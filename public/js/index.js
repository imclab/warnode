//switch between touch and mouse events
var inputEvents;
if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
	inputEvents = 'touchstart';
} else {
	inputEvents = 'click';
}

//adds armies buttons
initArmyChooser();

//buttons entrance animation
$('#chooseArmy').addClass('moveToLeft');
$('#armies').addClass('moveToTop');
$('#footer').fadeIn();

//adds / update player's name
$('input', '#playerName').val(gameManager.getPlayerName());
$('input', '#playerName').change(function () {
	gameManager.updatePlayerName($(this).val());
});
$('input', '#playerName').click(function () {
	$(this).select();
});
$('input', '#playerName').keydown(function (e) {
	if (e.which == 13) {
		$(this).blur();
	}
});

var hasClicked = false;
var gameInitData = {};
var timeout = null;

$('.bigButton', '#armies').bind(inputEvents, function () {

	if (!hasClicked) {
		hasClicked = true;

		//prepare game data
		var army = $(this).attr('data-army');
		gameInitData.army = army;
		gameInitData.mapType = 'random';
		gameInitData.mapSize = 'medium';
		gameInitData.vegetation = 'standard';
		gameInitData.initialResources = 'standard';

		//animations
		closePopups();
		$('#chooseArmy').addClass('hideToLeft');
		$('#armies').removeClass('moveToTop');
		$('#footer').fadeOut();
		$('#loading').removeClass('hide').addClass('moveToLeft');
		$('#playOffline').removeClass('hide');

		//check if webGL is supported
		if (!isWebGLEnabled()) {
			// Browser has no idea what WebGL is. Suggest they
			// get a new browser by presenting the user with link to
			// http://get.webgl.org
			$('#errorWebGL').fadeIn();
			return;   
		} else {
			$('#playOffline').fadeIn();
		}

		//wait for the end of the animations
		timeout = setTimeout(function () {
			$('#armies').addClass('hide');
			gameManager.initGame(gameInitData);
		}, 600);
	}
});

var launchGame = false;

//play in offline mode
$('a', '#playOffline').bind(inputEvents, function () {
	clearInterval(timeout);
	if (!launchGame) {
		launchGame = true;
		$('#armies').addClass('hide');
		$('#playOffline').fadeOut();
		$('#nbPlayers').addClass('hide');
		gameManager.isOfflineGame = true;
		gameManager.initGame(gameInitData);
	}
});

//footer links
$('a', '#footer').bind(inputEvents, function () {
	
	closePopups();

	var element;
	switch (parseInt($(this).attr('data-id'))) {
		case 0:
			element = $('#about');
			break;
		case 1:
			element = $('#credits');
			break;
		case 2:
			element = $('#share');
			break;
	}

	//animation
	element.css('top', (window.innerHeight - element.height()) / 2);
	element.css('left', (window.innerWidth - element.width()) / 2);

	return false;
});

//hide popups
$('#introScreen').bind(inputEvents, function () {
	closePopups();
});

//custom radio buttons
$('.customRadio').bind(inputEvents, function () {
	$('.customRadio[data-name="' + $(this).attr('data-name') + '"]').removeClass('checked');
	$(this).addClass('checked');
});

var musicEnabled = false;

//music button
$('#music').click(function () {
	if(musicEnabled) {
		$('#music').removeClass('musicEnabled').html('Off');
	} else {
		$('#music').addClass('musicEnabled').html('On');
	}
	musicEnabled = !musicEnabled;
});


preloadImages();


function closePopups() {
	$('.popup').css('top', -500);
}

function initArmyChooser () {
	for (var i in gameData.RACES) {
		var army = gameData.RACES[i];
		$('#armies').append(createArmyBox(army));
	}
}

function createArmyBox (army) {
	return '<div class="bigButton" data-army="' + army.id + '"><div class="spriteBefore sprite-' + army.image.replace('.png', '') + '">' + army.name + '</div></div>';
}

function preloadImages() {
	var images = new Array()
	function preload() {

		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
			$('#imagesPreload').append(images[i]);
		}
	}
	preload(
		gameSurface.IMG_PATH + 'sprite.png',
		gameSurface.IMG_PATH + 'cursor.png',
		gameSurface.IMG_PATH + 'cursor_hover.png',
		gameSurface.IMG_PATH + 'cursor_attack.png'
	)
}

function isWebGLEnabled() {
	try { 
		return !! window.WebGLRenderingContext && !! document.createElement('canvas').getContext('experimental-webgl');
	} catch(e) { 
		return false; 
	}
}
