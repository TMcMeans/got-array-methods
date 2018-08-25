const chronoCharacterData = {
  characters: [
    {
      name: 'Crono',
      era: '1000 AD',
      weapon: 'katana',
      magic: 'light',
      roles: ['physical', 'magic', 'attack'],
      singleTechs: [
        'Cyclone', 
        'Wind Slash', 
        'Lightning', 
        'Cleave', 
        'Lightning II', 
        'Raise', 
        'Frenzy', 
        'Luminaire'
      ],
      doubleTechs: [
        'Aura Whirl',
        'Ice Sword',
        'Ice Sword II',
        'Fire Whirl',
        'Fire Sword',
        'Fire Sword II',
        'Supersonic Spin',
        'Cyclone Sweep',
        'Megavolt',
        'X-Strike',
        'Sword Stream',
        'Lightning Rod',
        'Drill Kick',
        'Thunder Chomp',
        'Falcon Strike',
      ],
      tripleTechs: [
        'Delta Force',
        'Lifeline',
        'Frost Arc',
        'Final Kick',
        'Ring of Fire',
        'Delta Storm',
        'Gatling Kick',
        'Triple Attack',
        'Twister',
        '3-D Attack'
      ],
      canDie: true
    },
    {
      name: 'Marle',
      era: '1000 AD',
      weapon: 'crossbow',
      magic: 'water',
      roles: ['magic', 'support'],
      singleTechs: [
        'Aura', 
        'Allure', 
        'Ice', 
        'Cure', 
        'Haste', 
        'Ice II', 
        'Cure II', 
        'Arise'
      ],
      doubleTechs: [
        'Aura Whirl',
        'Ice Sword',
        'Ice Sword II',
        'Antipode Bomb',
        'Antipode Bomb II',
        'Antipode Bomb III',
        'Aura Beam',
        'Ice Tackle',
        'Cure Wind',
        'Ice Water',
        'Glacial Freeze',
        'Double Cure',
        'Twin Charm',
        'Ice Toss',
        'Iceberg Toss',
      ],
      tripleTechs: [
        'Delta Force',
        'Lifeline',
        'Frost Arc',
        'Final Kick',
        'Eternal Darkness',
        'Poyozo Dance',
        'Master Mune'
      ],
      canDie: false
    },
    {
      name: 'Lucca',
      era: '1000 AD',
      weapon: 'pistol',
      magic: 'fire',
      roles: ['magic', 'attack', 'support'],
      singleTechs: [
        'Flamethrower', 
        'Hypnowave', 
        'Fire', 
        'Napalm', 
        'Protect', 
        'Fire II', 
        'Megaton Bomb', 
        'Flare'
      ],
      doubleTechs: [
        'Fire Whirl',
        'Fire Sword',
        'Fire Sword II',
        'Antipode Bomb',
        'Antipode Bomb II',
        'Antipode Bomb III',
        'Fire Punch',
        'Fire Tackle',
        'Double Bomb',
        'Red Needle',
        'Line Bomb',
        'Frog Flare',
        'Flame Kick',
        'Inferno',
        'Blaze Kick',
      ],
      tripleTechs: [
        'Delta Force',
        'Ring of Fire',
        'Delta Storm',
        'Gatling Kick',
        'Eternal Darkness',
        'Omega Flare',
        'Poyozo Dance'
      ],
      canDie: false
    },
    {
      name: 'Robo',
      era: '2300 AD',
      weapon: 'mechanical arm',
      magic: 'none',
      roles: ['physical', 'attack', 'support'],
      singleTechs: [
        'Rocket Punch', 
        'Cure Beam', 
        'Laser Spin', 
        'Robo Tackle', 
        'Heal Beam', 
        'Rapid-fire Fist', 
        'Proximity Bomb', 
        'Electrocute'
      ],
      doubleTechs: [
        'Supersonic Spin',
        'Cyclone Sweep',
        'Megavolt',
        'Aura Beam',
        'Ice Tackle',
        'Cure Wind',
        'Fire Punch',
        'Fire Tackle',
        'Double Bomb',
        'Frog Launcher',
        'Bubble Breath',
        'Cure Wave',
        'Boogie',
        'Spin Kick',
        'Beast Toss'
      ],
      tripleTechs: [
        'Lifeline',
        'Ring of Fire',
        'Triple Attack',
        'Twister',
        'Omega Flare',
        'Spin Strike',
        'Master Mune'
      ],
      canDie: false
    },
    {
      name: 'Frog',
      era: '600 AD',
      weapon: 'sword',
      magic: 'water',
      roles: ['physical', 'magic', 'support', 'attack'],
      singleTechs: [
        'Slurp',
        'Slurp Slash',
        'Water',
        'Heal',
        'Aerial Strike',
        'Water II',
        'Cure II',
        'Frog Squash'
      ],
      doubleTechs: [
        'X-Strike',
        'Sword Stream',
        'Lightning Rod',
        'Ice Water',
        'Glacial Freeze',
        'Double Cure',
        'Red Needle',
        'Line Bomb',
        'Frog Flare',
        'Frog Launcher',
        'Bubble Breath',
        'Cure Wave',
        'Slurp Kiss',
        'Bubble Burst',
        'Dropdown'
      ],
      tripleTechs: [
        'Frost Arc',
        'Delta Storm',
        'Triple Attack',
        '3-D Attack',
        'Spin Strike',
        'Master Mune'
      ],
      canDie: false
    },
    {
      name: 'Ayla',
      era: '65000000 BC',
      weapon: 'fists',
      magic: 'none',
      roles: ['physical', 'attack'],
      singleTechs: [
        'Kiss',
        'Roundillo Kick',
        'Cat Attack',
        'Boulder Toss',
        'Charm',
        'Tail Spin',
        'Dino Tail',
        'Triple Kick'
      ],
      doubleTechs: [
        'Drill Kick',
        'Thunder Chomp',
        'Falcon Strike',
        'Twin Charm',
        'Ice Toss',
        'Iceberg Toss',
        'Flame Kick',
        'Inferno',
        'Blaze Kick',
        'Boogie',
        'Spin Kick',
        'Beast Toss',
        'Slurp Kiss',
        'Bubble Burst',
        'Dropdown'
      ],
      tripleTechs: [
        'Final Kick',
        'Gatling Kick',
        'Twister', 
        '3-D Attack',
        'Spin Strike',
        'Poyozo Dance'
      ],
      canDie: false
    },
    {
      name: 'Magus',
      era: '12000 BC',
      weapon: 'scythe',
      magic: 'shadow',
      roles: ['magic', 'support', 'attack'],
      singleTechs: [
        'Lightning II',
        'Ice II',
        'Fire II',
        'Dark Bomb',
        'Barrier',
        'Dark Mist',
        'Black Hole',
        'Dark Matter'
      ],
      doubleTechs: [],
      tripleTechs: [
        'Eternal Darkness',
        'Omega Flare'
      ],
      canDie: true
    }
  ]
}

const chronoMethods = {
  getCharacterNames() {
    let names = chronoCharacterData.characters.map((character) => {
      return character.name;
    });
    return names;
  },

  getCanDie() {
    let canDieChars = chronoCharacterData.characters.filter((character) => {
      return character.canDie;
    }).reduce((sum, char) => {
      sum.push(char.name);
      return sum;
    }, []);

    return canDieChars;
  },

  getAylasTechs() {
    let aylaObject = chronoCharacterData.characters.filter((character) => {
      return character.name === 'Ayla'
    });
    let aylasTechs = aylaObject[0].singleTechs.concat(aylaObject[0].doubleTechs, aylaObject[0].tripleTechs)

    return aylasTechs;
  },

  getTripleTechs() {
    let tripleTechArray = chronoCharacterData.characters.reduce((tripleTechsAcc, character) => {
      character.tripleTechs.forEach((tech) => {
        if (!tripleTechsAcc.includes(tech)) {
          tripleTechsAcc.push(tech)
        }
      })
      return tripleTechsAcc
    }, [])
    return tripleTechArray
  },

  getUniqueRoleTotal() {
    let totalRoles = chronoCharacterData.characters.reduce((rolesArray, character) => {
      character.roles.forEach((role) => {
        if (!rolesArray.includes(role)) {
          rolesArray.push(role);
        }
      });
      return rolesArray
    }, []);
    return totalRoles.length
  },

  getCharEraObject() {
    let charObjects = chronoCharacterData.characters.map((character) => {
      return {name: character.name, era: character.era}
    });
    return charObjects
  },

  getMostTripleTechs() {
    let tripleTechSort = chronoCharacterData.characters.sort((charA, charB) => {
      return charB.tripleTechs.length - charA.tripleTechs.length
    })

    let mostTripleTechsChar = [tripleTechSort[0]]

    let mostTripleTechs = mostTripleTechsChar.map((character, index) => {
      if (index === 0) {
        return {name: character.name, tripleTechs: character.tripleTechs.length}
      }
    });

    return mostTripleTechs[0]
  },

  getLatestCharName() {
    let latestName = chronoCharacterData.characters.map((char) => {
      return {name: char.name, era: char.era}
    })
    let filteredList = latestName.filter((char) => {
      return char.era.includes('AD')
    })

    let fixedStringList = filteredList.map((char) => {
      let eraCap = char.era
      eraCap = eraCap.substring(0, eraCap.length -3)
      return {name: char.name, era: eraCap};
    });

    let sortedList = fixedStringList.sort((a, b) => {
      return b.era - a.era;
    })
    return sortedList[0].name
  },

  getThreeRolesPhysical() {
    return chronoCharacterData.characters.filter((character) => {
      return character.roles.length > 2;
    }).filter((character) => {
      return character.roles.includes('physical')
    }).map((character) => {
      return character.name;
    });
  }
}

module.exports = chronoMethods;