// https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion/Irelia.json

const champion = {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "11.14.1",
    "data": {
        "Irelia": {
            "id": "Irelia",
            "key": "39",
            "name": "Irelia",
            "title": "the Blade Dancer",
            "image": {
                "full": "Irelia.png",
                "sprite": "champion1.png",
                "group": "champion",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "skins": [{
                    "id": "39000",
                    "num": 0,
                    "name": "default",
                    "chromas": false
                },
                {
                    "id": "39001",
                    "num": 1,
                    "name": "Nightblade Irelia",
                    "chromas": false
                },
                {
                    "id": "39002",
                    "num": 2,
                    "name": "Aviator Irelia",
                    "chromas": false
                },
                {
                    "id": "39003",
                    "num": 3,
                    "name": "Infiltrator Irelia",
                    "chromas": false
                },
                {
                    "id": "39004",
                    "num": 4,
                    "name": "Frostblade Irelia",
                    "chromas": true
                },
                {
                    "id": "39005",
                    "num": 5,
                    "name": "Order of the Lotus Irelia",
                    "chromas": false
                },
                {
                    "id": "39006",
                    "num": 6,
                    "name": "Divine Sword Irelia",
                    "chromas": true
                },
                {
                    "id": "39015",
                    "num": 15,
                    "name": "iG Irelia",
                    "chromas": false
                },
                {
                    "id": "39016",
                    "num": 16,
                    "name": "PROJECT: Irelia",
                    "chromas": false
                },
                {
                    "id": "39017",
                    "num": 17,
                    "name": "PROJECT: Irelia Prestige Edition",
                    "chromas": false
                },
                {
                    "id": "39018",
                    "num": 18,
                    "name": "High Noon Irelia",
                    "chromas": true
                },
                {
                    "id": "39026",
                    "num": 26,
                    "name": "Sentinel Irelia",
                    "chromas": true
                }
            ],
            "lore": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland.",
            "blurb": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of...",
            "allytips": [
                "Use Bladesurge to cover great distances by targeting low life minions on your way to champion targets.",
                "Defiant Dance is not interrupted by crowd control, try timing it for incoming disables.",
                "Flawless Duet does not have a maximum travel distance, try using it in creative ways."
            ],
            "enemytips": [
                "Pay attention to Ionian Fervor stacks and try to engage Irelia when it is down.",
                "Minion waves greatly enhance Irelia's mobility, beware fighting her inside one.",
                "Beware of wasting your high impact spells on Defiant Dance."
            ],
            "tags": [
                "Fighter",
                "Assassin"
            ],
            "partype": "Mana",
            "info": {
                "attack": 7,
                "defense": 4,
                "magic": 5,
                "difficulty": 5
            },
            "stats": {
                "hp": 520,
                "hpperlevel": 110,
                "mp": 350,
                "mpperlevel": 50,
                "movespeed": 335,
                "armor": 36,
                "armorperlevel": 3,
                "spellblock": 28,
                "spellblockperlevel": 1.25,
                "attackrange": 200,
                "hpregen": 8.5,
                "hpregenperlevel": 0.85,
                "mpregen": 8,
                "mpregenperlevel": 0.8,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 65,
                "attackdamageperlevel": 4,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.656
            },
            "spells": [{
                    "id": "IreliaQ",
                    "name": "Bladesurge",
                    "description": "Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.",
                    "tooltip": "Irelia dashes to an enemy, dealing <physicalDamage>{{ championdamage }} physical damage</physicalDamage> and restoring <healing>{{ healamount }} Health</healing> to herself. If the enemy dies or was <keywordMajor>Unsteady</keywordMajor>, the Cooldown is refreshed.<br /><br />Deals {{ miniondamage }} damage to minions.",
                    "leveltip": {
                        "label": [
                            "Damage",
                            "Cooldown",
                            "Heal Ratio"
                        ],
                        "effect": [
                            "{{ basedamage }} -> {{ basedamageNL }}",
                            "{{ cooldown }} -> {{ cooldownNL }}",
                            "{{ healtadcoefficient*100.000000 }}% -> {{ healtadcoefficientnl*100.000000 }}%"
                        ]
                    },
                    "maxrank": 5,
                    "cooldown": [
                        11,
                        10,
                        9,
                        8,
                        7
                    ],
                    "cooldownBurn": "11/10/9/8/7",
                    "cost": [
                        20,
                        20,
                        20,
                        20,
                        20
                    ],
                    "costBurn": "20",
                    "datavalues": {

                    },
                    "effect": [
                        null,
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    ],
                    "effectBurn": [
                        null,
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0"
                    ],
                    "vars": [

                    ],
                    "costType": " {{ abilityresourcename }}",
                    "maxammo": "-1",
                    "range": [
                        600,
                        600,
                        600,
                        600,
                        600
                    ],
                    "rangeBurn": "600",
                    "image": {
                        "full": "IreliaQ.png",
                        "sprite": "spell4.png",
                        "group": "spell",
                        "x": 432,
                        "y": 48,
                        "w": 48,
                        "h": 48
                    },
                    "resource": "{{ cost }} {{ abilityresourcename }}"
                },
                {
                    "id": "IreliaW",
                    "name": "Defiant Dance",
                    "description": "Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.",
                    "tooltip": "<charge>Begin Charging:</charge> Irelia enters a defensive stance for up to {{ maxduration }} seconds, becoming unable to act but reducing physical damage taken by {{ finalphysicaldr }}% and magic damage taken by {{ finalmagicdr }}%.<br /><br /><release>Release:</release> Irelia lashes out with her blades, dealing <physicalDamage>{{ mindamagecalc }} physical damage</physicalDamage> increased up to <physicalDamage>{{ maxdamagecalc }}</physicalDamage> based on charge time.",
                    "leveltip": {
                        "label": [
                            "Damage",
                            "Cooldown",
                            "Mana Cost"
                        ],
                        "effect": [
                            "{{ mindamage }} -> {{ mindamageNL }}",
                            "{{ cooldown }} -> {{ cooldownNL }}",
                            "{{ cost }} -> {{ costNL }}"
                        ]
                    },
                    "maxrank": 5,
                    "cooldown": [
                        20,
                        18,
                        16,
                        14,
                        12
                    ],
                    "cooldownBurn": "20/18/16/14/12",
                    "cost": [
                        70,
                        75,
                        80,
                        85,
                        90
                    ],
                    "costBurn": "70/75/80/85/90",
                    "datavalues": {

                    },
                    "effect": [
                        null,
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    ],
                    "effectBurn": [
                        null,
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0"
                    ],
                    "vars": [

                    ],
                    "costType": " {{ abilityresourcename }}",
                    "maxammo": "-1",
                    "range": [
                        825,
                        825,
                        825,
                        825,
                        825
                    ],
                    "rangeBurn": "825",
                    "image": {
                        "full": "IreliaW.png",
                        "sprite": "spell4.png",
                        "group": "spell",
                        "x": 0,
                        "y": 96,
                        "w": 48,
                        "h": 48
                    },
                    "resource": "{{ cost }} {{ abilityresourcename }}"
                },
                {
                    "id": "IreliaE",
                    "name": "Flawless Duet",
                    "description": "Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.",
                    "tooltip": "Irelia throws a blade into the ground and can <recast>Recast</recast> for up to {{ buffduration }} seconds. <br /><br /><recast>Recast:</recast> Irelia throws a second blade, then they fly towards each other <status>Stunning</status> for {{ stunduration }} seconds and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. Champions and large jungle monsters become <keywordMajor>Unsteady</keywordMajor> for {{ markduration }} seconds.",
                    "leveltip": {
                        "label": [
                            "Damage",
                            "Cooldown"
                        ],
                        "effect": [
                            "{{ basedamage }} -> {{ basedamageNL }}",
                            "{{ cooldown }} -> {{ cooldownNL }}"
                        ]
                    },
                    "maxrank": 5,
                    "cooldown": [
                        18,
                        16.5,
                        15,
                        13.5,
                        12
                    ],
                    "cooldownBurn": "18/16.5/15/13.5/12",
                    "cost": [
                        50,
                        50,
                        50,
                        50,
                        50
                    ],
                    "costBurn": "50",
                    "datavalues": {

                    },
                    "effect": [
                        null,
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    ],
                    "effectBurn": [
                        null,
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0"
                    ],
                    "vars": [

                    ],
                    "costType": " {{ abilityresourcename }}",
                    "maxammo": "-1",
                    "range": [
                        850,
                        850,
                        850,
                        850,
                        850
                    ],
                    "rangeBurn": "850",
                    "image": {
                        "full": "IreliaE.png",
                        "sprite": "spell4.png",
                        "group": "spell",
                        "x": 48,
                        "y": 96,
                        "w": 48,
                        "h": 48
                    },
                    "resource": "{{ cost }} {{ abilityresourcename }}"
                },
                {
                    "id": "IreliaR",
                    "name": "Vanguard's Edge",
                    "description": "Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.",
                    "tooltip": "Irelia launches a barrage of blades, dealing <magicDamage>{{ missiledamage }} magic damage</magicDamage> and making champions and large jungle monsters <keywordMajor>Unsteady</keywordMajor> for {{ markduration }} seconds. The barrage explodes into a cage around the first champion hit for {{ zoneduration }} seconds. The cage deals <magicDamage>{{ zonedamage }} magic damage</magicDamage> and <status>Slows</status> by {{ slowamount }}% for {{ ccduration }} seconds.<br /><br /><passive>Bladesurge's base cooldown is reduced by {{ cooldownamount }} seconds.</passive>",
                    "leveltip": {
                        "label": [
                            "Damage",
                            "Wall Damage",
                            "Cooldown",
                            "Bladesurge Seconds Reduced:"
                        ],
                        "effect": [
                            "{{ basemissiledamage }} -> {{ basemissiledamageNL }}",
                            "{{ basezonedamage }} -> {{ basezonedamageNL }}",
                            "{{ cooldown }} -> {{ cooldownNL }}",
                            "{{ cooldownamount }} -> {{ cooldownamountNL }}"
                        ]
                    },
                    "maxrank": 3,
                    "cooldown": [
                        140,
                        120,
                        100
                    ],
                    "cooldownBurn": "140/120/100",
                    "cost": [
                        100,
                        100,
                        100
                    ],
                    "costBurn": "100",
                    "datavalues": {

                    },
                    "effect": [
                        null,
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ]
                    ],
                    "effectBurn": [
                        null,
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0"
                    ],
                    "vars": [

                    ],
                    "costType": " {{ abilityresourcename }}",
                    "maxammo": "-1",
                    "range": [
                        950,
                        950,
                        950
                    ],
                    "rangeBurn": "950",
                    "image": {
                        "full": "IreliaR.png",
                        "sprite": "spell4.png",
                        "group": "spell",
                        "x": 96,
                        "y": 96,
                        "w": 48,
                        "h": 48
                    },
                    "resource": "{{ cost }} {{ abilityresourcename }}"
                }
            ],
            "passive": {
                "name": "Ionian Fervor",
                "description": "When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.",
                "image": {
                    "full": "Irelia_Passive.png",
                    "sprite": "passive1.png",
                    "group": "passive",
                    "x": 48,
                    "y": 48,
                    "w": 48,
                    "h": 48
                }
            },
            "recommended": [

            ]
        }
    }
}

/*

To deal with arrays:

.filter()  - filter with a certain trait
.map() - break down and return the array, you can run a function on each item
.reduce() - combine all items into 1 under a function
.forEach() - iterate through your array
 
for loops - iterate through your array with a starting and ending index (i)

.length - the size of your array
.join() - put together all items in an array into a string with a delimiter
.split() - break down a string into array items
.splice() - remove item from array at an index
.push() - put new item to the end of array
.slice() - slice off a number of items from array with start and end
.includes() - returns true if something is found within the array
.indexOf() - returns the index of what you're looking for


To deal with objects

Object.keys()
Object.values()
Object.entries()

const { key, anotherKey } = object;

*/

// 1. Create a 'skins' list, and assign it to Aatrox's original skins list
/*
[
    {
    "id": "266000",
    "num": 0,
    "name": "default",
    "chromas": false
    },
    {
    "id": "266001",
    "num": 1,
    "name": "Justicar Aatrox",
    "chromas": false
    },
    {
    "id": "266002",
    "num": 2,
    "name": "Mecha Aatrox",
    "chromas": true
    }
]
*/

// 2. From the skins list, I need an array of skin names, just the names.
// ['Mecha Aatrox', 'Justicar Aatrox']

// 3. From the skins list, I need a array of objects that looks like this:
/*

[
    {
        skinName: 'Mecha Aatrox',
        id: '266002'
    },
    {
        skinName: 'Blood Moon Aatrox',
        id: '266007'
    }
    ...
]

*/

// 4. From the skins list, I need an object that looks like this:

// push items into an object
// data['Mecha Aatrox'] = id

/*

{
    'Mecha Aatrox': '266003',
    'Blood Moon Aatrox': '266007',
    ...
}


*/

// 5. Show me a list of skins with just the names like Q#2. But only show me skins that have chromas.


const q1 = (champion) => {
    const skins = [{
            "id": "39000",
            "num": 0,
            "name": "default",
            "chromas": false
        },
        {
            "id": "39001",
            "num": 1,
            "name": "Nightblade Irelia",
            "chromas": false
        },
        {
            "id": "39002",
            "num": 2,
            "name": "Aviator Irelia",
            "chromas": false
        }
    ]
    champion.data.Irelia.skins = skins;
};
const q2 = (skins) => {
    let ret = [];
    for (let i = 0; i < skins.length; i++) {
        ret.push(skins[i].name);
    }
    return ret.slice(1, ret.length);
};
const q3 = (skins) => {
    let ret = [];
    skins.forEach((value) => {
        ret.push({
            "skinName": value.name,
            "id": value.id
        });
    });
    return ret.slice(1, ret.length);
};

const q4 = (champion) => {
    let ret = {};
    let names = q2(champion)
    for (let i = 0; i < champion.length; i++) {
        ret[champion[i].name] = champion[i].id;
    }
    delete ret.default;
    return ret;
};
const q5 = (skins) => {
    let ret = [];
    for (let i = 0; i < skins.length; i++) {
        if (skins[i].chromas) ret.push(skins[i].name);
    }
    return ret;
};


q1(champion)
const skins = champion.data.Irelia.skins;
console.log(skins)
console.log(q2(skins));
console.log(q3(skins));
console.log(q4(skins));
// This doesn't return anything, because first three chromas of Irelia are falsy
console.log(q5(skins));