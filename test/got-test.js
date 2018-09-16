const { expect } = require('chai');

const gotMethods = require('../lib/got')

describe('Game of Thrones Problem set', () => {
  
  it('should find and return the house Stark object', () => {
    const houseStark = gotMethods.findHouseStark();

    expect(houseStark).to.deep.equal({
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
       {name: 'Sansa Stark', titles: ['Lady of Winterfell', 'Princess of the Seven Kingdoms', 'Lady Regent of the North'], weapon: 'cunning', battlesFought: []},
       {name: 'Bran Stark', titles: ['Lord of Winterfell', 'Little Lord', 'Three Eyed Raven'], weapon: 'supernatural powers', battlesFought: []}
     ]
   });
  });

  it('should return an array of the names of all the noble Houses', () => {
    const nobleHouses = gotMethods.getNobleHouses();

    expect(nobleHouses).to.deep.equal([
      'Stark',
      'Targaryen',
      'Lannister',
      'Greyjoy'
    ]);
  });

  it('should return an array of all the got seasons where a white walker was killed', () => {
      const whiteWalkersKilled = gotMethods.killWhiteWalkers();

      expect(whiteWalkersKilled).to.deep.equal([ 
        {seasonThree: true, whiteWalkersKilled: 1},
        {seasonFive: true, whiteWalkersKilled: 1},
        {seasonSix: true, whiteWalkersKilled: 1},
        {seasonSeven: true, whiteWalkersKilled: 1}
      ]);
  });

  it('should return an object where the key is a noble House name and the value is an array with each member of that family', () => {
    const houseMembers = gotMethods.getHouseMembers();

    expect(houseMembers).to.deep.equal({
      Stark : ['Jon Snow', 'Arya Stark', 'Sansa Stark', 'Bran Stark'],
      Targaryen: ['Daenerys Targaryen'],
      Lannister: ['Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister'],
      Greyjoy: ['Theon Greyjoy']
    });
  });

  it('should return an array with each kingdom with a matching realm of the same name', () => {
    const kindgomRealms = gotMethods.getKingdomsWithRealms();

    expect(kindgomRealms).to.deep.equal(['North', 'Vale', 'Stormlands', 'Reach', 'Dorne']);
  });

  it('should return an object with each character as the key and an array of all the famous battles they fought in as the value', () => {
    const fierceFighters = gotMethods.battlesFought();

    expect(fierceFighters).to.deep.equal({ 
        "Daenerys Targaryen": [ "Battle of Goldroad" ],
        "Jaime Lannister": [ "Sack of Kings Landing", "Battle of the Blackwater", "Battle of Goldroad" ],
        "Jon Snow": [ "Battle of Castle Black", "Massacre at Hardhome", "Battle of the Bastards"],
       "Tyrion Lannister": [ "Battle of the Blackwater" ]
    });
  });

  it('return an array of all the religion types in the got world', () => {
    const religionTypes = gotMethods.getReligionTypes();

    expect(religionTypes).to.deep.equal([  
          "Polytheistic",
          "Monotheism",
          "Monolatristic",
          "Ditheism",
          "Syncretic Monotheism",
          "Henotheistic"
      ]);
  });

  it('should return all the eras that are not the current era of Westeros', () => {
    const eras = gotMethods.getWesterosHistory();

    expect(eras).to.deep.equal([
      "The Dawn Age",
      "The Age of Heroes",
      "The Long Night",
      "Invasion of the Andals",
      "The Doom of Valyria",
      "The Targaryen Conquest",
      "Roberts Rebellion",
      "The Greyjoy Rebellion",
      "War of the Five Kings"
      ]);
  });

  it('The night king has taken over westeros and the long night is here. Return an object with ', () => {
    const theLongNight = gotMethods.startTheLongNight();

    expect(theLongNight).to.deep.equal([
      'Crono',
      'Robo',
      'Frog'
    ]);

  });
});
