gameData.ELEMENTS[gameData.FAMILIES.unit].push(
[
	{
		name : 'Builder',
		r : 0,
		t : 0,
		shape : [[1]],
		speed : 1,
		isBuilder : true,
		buttons : [{buttonId : 1000, image : 'build.png', isEnabled : true, name: 'Build'}],
		timeConstruction : 10,
		l : 40,
		attackSpeed : 1,
		attack : 5, 
		defense : 0,
		weaponType : fightLogic.WEAPON_TYPES.normal,
		armorType : fightLogic.ARMOR_TYPES.unarmored,
		gatheringSpeed : 1,
		maxGathering : 10,
		pop : 1,
		needs : [{t : gameData.RESOURCES.gold.id, value : 40}],
		g : 'peon.js',
		image: 'peon.png',
		height: 6,
		range: 1,
		buttonId : 101,
		vision : 8
	},
	{
		name : 'Footman',
		r : 0,
		t : 1,
		shape : [[1]],
		speed : 1,
		isBuilder : false,
		buttons : [],
		timeConstruction : 15,
		l : 80,
		attackSpeed : 1,
		attack : 10, 
		defense : 1,
		weaponType : fightLogic.WEAPON_TYPES.normal,
		armorType : fightLogic.ARMOR_TYPES.medium,
		pop : 1,
		needs : [{t : gameData.RESOURCES.gold.id, value : 50}],
		g : 'swordsman.js',
		image: 'swordsman.png',
		height: 6,
		range: 1,
		buttonId : 102,
		vision : 8
	},
	{
		name : 'Knight',
		r : 0,
		t : 2,
		shape : [[1]],
		speed : 2,
		isBuilder : false,
		buttons : [],
		timeConstruction : 25,
		l : 120,
		attackSpeed : 1,
		attack : 20, 
		defense : 3,
		weaponType : fightLogic.WEAPON_TYPES.normal,
		armorType : fightLogic.ARMOR_TYPES.heavy,
		pop : 2,
		needs : [{t : gameData.RESOURCES.gold.id, value : 120}],
		g : 'knight.js',
		image: 'knight.png',
		height: 6,
		range: 1,
		buttonId : 103,
		vision : 8
	},
	{
		name : 'Bowman',
		r : 0,
		t : 3,
		shape : [[1]],
		speed : 1,
		isBuilder : false,
		buttons : [],
		timeConstruction : 15,
		l : 50,
		attackSpeed : 1,
		attack : 12, 
		defense : 1,
		weaponType : fightLogic.WEAPON_TYPES.piercing,
		armorType : fightLogic.ARMOR_TYPES.light,
		pop : 1,
		needs : [{t : gameData.RESOURCES.gold.id, value : 60}, {t : gameData.RESOURCES.wood.id, value : 20}],
		g : 'bowman.js',
		image: 'bowman.png',
		height: 6,
		range: 10,
		buttonId : 104,
		vision : 12
	}
]);