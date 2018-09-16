const got = {
  westeros: {
    country: 'The Seven Kingdoms', 
    customs: 'Feudal Monarchy', 
    people: 'Westerosi', 
    capital: 'Kings Landing', 
    language: 'Common Tounge', 
    founder: 'Aegon the Conqueror', 
    ruler: 'King or Queen of the Andals, the Rhoynar and the First Men', 
    castleHold: 'The Red Keep', 
    seatOfPower: 'The Iron Throne',
    currentEra: 'The Army of the Dead'
  },
  realms: [
    'Beyond the Wall',
    'North',
    'Iron Islands',
    'Vale',
    'Riverlands',
    'Westerlands',
    'Stormlands',
    'Reach',
    'Crownlands',
    'Dorne'
  ],
  eras: [
    'The Dawn Age',
    'The Age of Heroes',
    'The Long Night',
    'Invasion of the Andals',
    'The Doom of Valyria',
    'The Targaryen Conquest',
    'Roberts Rebellion',
    'The Greyjoy Rebellion',
    'War of the Five Kings',
    'The Army of the Dead'
  ],
  religions: [
    {
      faith: 'Old Gods of the Forest', 
      religion: 'Polytheistic', 
      followers: ['Children of the Forest', 'The North', 'wildlings'], 
      leaders: 'none', 
      sacred: ['Weirwoods', 'Greenseers', 'The Three Eyed Raven']
    },
    {
      faith: 'Faith of the Seven', 
      religion: 'Monotheism', 
      followers: ['Seven Kingdoms', 'Clergy'], 
      leaders: 'High Septon', 
      sacred: ['The Mother', 'The Father', 'The Maiden', 'The Crone', 'The Warrior', 'The Smith', 'The Stranger', 'Sept of Balor']
    },
    {
      faith: 'The Drowned God', 
      religion: 'Monolatristic', 
      followers: ['Ironborn', 'Faceless Men of Braavos'], 
      leaders: 'Drowned Men',
      sacred: ['The Iron Price', 'Storm God']
    },
    {
      faith: 'Rhllor, The Lord of Light', 
      religion: 'Ditheism', 
      followers: ['Essos', 'Free Cities', 'Asshai', 'Volantis', 'Slavers Bay'], leaders: 'Red Priestesses', 
      sacred: ['The Prince That Was Promised', 'Lightbringer']
    },
    {
      faith: 'The Many-Faced God', 
      religion: 'Syncretic Monotheism', 
      followers: ['Free People of Braavos', 'Slavers Bay'], 
      leaders: 'Faceless Men', 
      sacred: ['the gift of Death', 'Valar Morghulis', 'Valar Dohaeris']
    },
    {
      faith: 'The Great Stallion', 
      religion: 'Henotheistic', 
      followers: ['Dothraki', 'Essos'], 
      leaders: "Dosh Khaleen", 
      sacred: ['The Stallion Who Mounts the World', 'horses', 'Vaes Dothrak', 'The Mother of Mountains'] 
    }
  ],
  kingdoms: [
    'North',
    'Vale',
    'Isles and Rivers',
    'Rock',
    'Stormlands',
    'Reach',
    'Dorne'
  ],
  nobleHouses: [
   {
     house: 'Stark',
     sigil: 'A grey direwolf',
     words: 'Winter is Coming',
     ancestralSeat: 'Winterfell',
     founder: 'Bran the Builder',
     ancestralWeapons: true,
     mythicalCreatures: 'direwolf',
     alliance: ['Targaryen', 'Greyjoy'],
     familyTree: [
       {name: 'Jon Snow', titles: ['First of His Name', 'Warden of the North', 'King in the North', '998th Lord Commander of the Nights Watch', 'The Bastard of Winterfell', 'White Wolf', 'The Prince That Was Promised', 'King Crow', 'Friend of the Wildlings', 'The Resurrected', 'Defender of the Wall'], weapon: 'Longclaw', battlesFought: ['Battle of Castle Black', 'Massacre at Hardhome', 'Battle of the Bastards']},
       {name: 'Arya Stark', titles: ['No one', 'Faceless Man', 'Lady of Winterfell'], weapon: 'Needle', battlesFought: []},
       {name: 'Sansa Stark', titles: ['Lady of Winterfell', 'Princess of the Seven Kingdoms', 'Lady Regent of the North'], battlesFought: [], weapon: 'cunning'},
       {name: 'Bran Stark', titles: ['Lord of Winterfell', 'Little Lord', 'Three Eyed Raven'], weapon: 'supernatural powers', battlesFought: []}
     ]
   },
   {
     house: 'Targaryen',
     sigil: 'A red three headed dragon',
     words: 'Fire and Blood',
     ancestralSeat: 'Dragonstone',
     founder: 'Aegon the Conqueror',
     ancestralWeapons: false, 
     mythicalCreatures: 'dragon',
     alliance: ['Stark', 'Greyjoy'],
     familyTree: [
       {name: 'Daenerys Targaryen', titles: ['First of Her Name', 'Queen of the Andals, the Rhoynar and the First Men', 'Protector of the Seven Kingdoms', 'Khaleesi of the Great Grass Sea', 'Lady of Dragonstone', 'Queen of Meereen', 'Daenerys Stormborn', 'The Unburnt', 'The Breaker of Chains', 'The Mother of Dragons', 'Mhysa', 'The Silver Queen', 'The Prince That Was Promised'], weapon: 'fire breathing dragons', battlesFought: ['Battle of Goldroad']},
     ]
   },
   {
     house: 'Lannister',
     sigil: 'A golden lion',
     words: 'Hear me Roar',
     ancestralSeat: 'Casterly Rock',
     founder: 'Lann the Clever',
     ancestralWeapons: true,
     mythicalCreatures: 'none',
     alliance: ['Greyjoy'],
     familyTree: [
       {name: 'Tyrion Lannister', titles: ['Hand of the King', 'The Imp', 'Hand of the Queen', 'Master of Coin', 'The Little Lion', 'The Dwarf of Casterly Rock'], weapon: 'drinking and knowing things', battlesFought: ['Battle of the Blackwater']},
       {name: 'Cersei Lannister', titles: ['Mad Queen Cersei', 'Queen of the Andals and the First Men', 'Protector of the Seven Kingdoms', 'Lady of Casterly Rock', 'Lady Paramount of the Westerlands', 'Wardeness of the West', 'Queen Mother'], weapon: 'madness', battlesFought: []},
       {name: 'Jaime Lannister',  titles: ['The Kingslayer', 'Oathbreaker', 'Lord Commander of the Kingsguard'], weapon: 'Widows Wail', battlesFought: ['Sack of Kings Landing', 'Battle of the Blackwater', 'Battle of Goldroad']}
     ]
   },
   {
     house: 'Greyjoy',
     sigil: 'A golden kraken',
     words: 'We Do Not Sow',
     ancestralSeat: 'Pyke',
     founder: 'The Grey King',
     ancestralWeapons: false,
     mythicalCreatures: 'none',
     familyTree: [
       {name: 'Theon Greyjoy', titles: ['Prince of the Iron Islands', 'Reek'], weapon: 'desperation and survival', battlesFought: []}
     ]
   },
  ],
  famousBetrayals: [
    'Assassination of Jon Arryn',
    'The Red Wedding',
    'The Sack of Winterfell',
    'The Purple Wedding',
    'Mutiny at Castle Black',
    'Destruction of the Great Sept of Balor'
  ],
  famousBattles: [
    'Battle of the Trident',
    'Sack of Kings Landing',
    'Battle of the Blackwater',
    'Battle of Castle Black',
    'Massacre at Hardhome',
    'Battle of the Bastards',
    'Battle of Goldroad'
  ],
  organizations: [
    {
      name: 'The Brotherhood without Banners', 
      description: 'An outlaw group that resists authority, robs from the rich and gives to the poor', 
      notableMembers: ['Beric Dondarrion', 'Thoros of Myr'], 
      location: 'The Riverlands'
    },
    {
      name: 'The Nights Watch', 
      description: 'An ancient military order that patrols the Wall that separates the Seven Kingdoms from the lands beyond', 
      notableMembers: ['Jeor Mormont', 'Samwell Tarly', 'Benjen Stark'], 
      location: 'The Wall/Castle Black'
    },
    {
      name: 'The Order of Maesters', 
      description: 'A secular organization of scientific, intellectual and  philosophical scholars, healers and learned men', 
      notableMembers: ['Maester Aemon', 'Grand Maester Pycelle', 'Qyburn'], 
      location: 'The Citadel in Oldtown'
    },
    {
      name: 'The Iron Bank of Braavos', 
      description: 'The richest and most powerful financial institution in the known world', 
      notableMembers: [], 
      location: 'The Free City of Braavos'
    },
    {
      name: 'Faceless Men', 
      description: 'A cult of religious assassins with no identities that worship death and use magic to change their faces', 
      notableMembers: ['No one'], 
      location: 'The House of Black and White in Braavos'
    },
    {
      name: 'The Unsullied',
      description: 'Elite warrior eunuch soldiers famed for their fighting skills and discipline in battle', 
      notableMembers: ['Grey Worm', 'White Rat'], 
      location: 'Daenerys Targarens army'
    },
    {
      name: 'Kingsguard/Queensguard', 
      description: 'An elite group of the 7 greatest and skilled knights who serve as bodyguard to the King or Queen of the Seven Kingdoms', 
      notableMembers: ['Ser Barristan Selmy', 'Jaime Lannister', 'The Hound', 'The Mountain'], 
      location: 'The Red Keep'
    }
  ],
  armyOfTheDead: {
    age: 12000, 
    ruler: 'The Night King',
    location: 'South of The Wall', 
    people: ['Wights', '3 Giants', 'Undead dragon'], 
    soldiers: 100000,
    canRaiseCorpses: true, 
    threatToWorld: true, 
    possibleWeakness: ['Dragonglass', 'Valyrian Steel'],
    currentEra: 'The Long Night'
  },
  whiteWalkerSightings: [
    {seasonOne: false, whiteWalkersKilled: 0},
    {seasonTwo: true, whiteWalkersKilled: 0},
    {seasonThree: true, whiteWalkersKilled: 1},
    {seasonFour: true, whiteWalkersKilled: 0},
    {seasonFive: true, whiteWalkersKilled: 1},
    {seasonSix: true, whiteWalkersKilled: 1},
    {seasonSeven: true, whiteWalkersKilled: 1}
  ]
}

const gotMethods = { 

  findHouseStark() {
    return got.nobleHouses.find( house => {
      if (house.house === 'Stark') {
        return house;
      }
    })
  }, 

  getNobleHouses() {
    return got.nobleHouses.map( house => {
      return house.house;
    })
  },

  killWhiteWalkers() {
    return got.whiteWalkerSightings.filter( season => {
      return season.whiteWalkersKilled > 0;
    })
  },

  getHouseMembers() {
    return got.nobleHouses.reduce( (nobleFamilies, house) => {
      nobleFamilies[house.house] = [];
      house.familyTree.forEach( member => {
        nobleFamilies[house.house].push(member.name)
      })
      return nobleFamilies;
    }, {})
  },

  getKingdomsWithRealms() {
    return got.realms.filter( realm => {
      return got.kingdoms.includes(realm)
    })
  },

  battlesFought() {
    return got.nobleHouses.reduce( (totalWarriors, family) => {
     
     family.familyTree.forEach( houseMember => {
        if(houseMember.battlesFought.length > 0) {
          totalWarriors[houseMember.name] = houseMember.battlesFought;
        }
     })
     return totalWarriors;
    }, {})
  },

  getReligionTypes() {
    return got.religions.map( religion => {
      return religion.religion
    })
  },
  
  getWesterosHistory() {
    const currentEra = got.westeros.currentEra
    return got.eras.filter( era => {
      return era !== currentEra;
    })
  }, 

  startTheLongNight() {
    const westerosData = Object.keys(got.westeros)
    console.log(westerosData)
    westerosData.forEach( dataPoint => {
      console.log(dataPoint)
    })
  }
}

module.exports = gotMethods;






