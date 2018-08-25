const { expect } = require('chai');

const chronoMethods = require('../lib/chrono')

describe('Answers to Chrono Trigger Problem set', () => {
  
  it.skip('should return an array of all Chrono Trigger characters names', () => {
    const characters = chronoMethods.getCharacterNames();

    expect(characters).to.deep.equal([ 
      'Crono',
      'Marle',
      'Lucca',
      'Robo',
      'Frog',
      'Ayla',
      'Magus' 
    ]);
  });



  it.skip('should return an array of the names of all Chrono Trigger characters that can die', () => {
    const canDie = chronoMethods.getCanDie();

    expect(canDie).to.deep.equal([
      'Crono',
      'Magus'
    ]);
  });

  it.skip('should return an array of all Ayla\'s Single, Double, and Triple techs', () => {
    const aylasTechs = chronoMethods.getAylasTechs();

    expect(aylasTechs).to.deep.equal([ 
      'Kiss',
      'Roundillo Kick',
      'Cat Attack',
      'Boulder Toss',
      'Charm',
      'Tail Spin',
      'Dino Tail',
      'Triple Kick',
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
      'Dropdown',
      'Final Kick',
      'Gatling Kick',
      'Twister',
      '3-D Attack',
      'Spin Strike',
      'Poyozo Dance' 
    ]);
  });

  it.skip('should return an array of all Triple Techs without duplicates', () => {
    const tripleTechs = chronoMethods.getTripleTechs();

    expect(tripleTechs).to.deep.equal([ 
      'Delta Force',
      'Lifeline',
      'Frost Arc',
      'Final Kick',
      'Ring of Fire',
      'Delta Storm',
      'Gatling Kick',
      'Triple Attack',
      'Twister',
      '3-D Attack',
      'Eternal Darkness',
      'Poyozo Dance',
      'Master Mune',
      'Omega Flare',
      'Spin Strike' 
    ]);
  });

  it.skip('should return a number of total unique roles in the game', () => {
    const totalRoles = chronoMethods.getUniqueRoleTotal();

    expect(totalRoles).to.equal(4);
  });

  it.skip('should return an array of objects containing character names and their era', () => {
    const charEraObject = chronoMethods.getCharEraObject();

    expect(charEraObject).to.deep.equal([ 
      { name: 'Crono', era: '1000 AD' },
      { name: 'Marle', era: '1000 AD' },
      { name: 'Lucca', era: '1000 AD' },
      { name: 'Robo', era: '2300 AD' },
      { name: 'Frog', era: '600 AD' },
      { name: 'Ayla', era: '65000000 BC' },
      { name: 'Magus', era: '12000 BC' } 
    ]);
  });

  it.skip('should return an object with the name of the character with the most Triple Techs and their total number of Triple Techs', () => {
    const mostTripleTechChar = chronoMethods.getMostTripleTechs();

    expect(mostTripleTechChar).to.deep.equal({name: 'Crono', tripleTechs: 10});
  });

  it.skip('should return an array of names of characters that have at least three roles and one of them is "physical"', () => {
    const threeRolesPhysical = chronoMethods.getThreeRolesPhysical();

    expect(threeRolesPhysical).to.deep.equal([
      'Crono',
      'Robo',
      'Frog'
    ]);

  });
});
