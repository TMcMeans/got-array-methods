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
      console.log(b.era, a.era)
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