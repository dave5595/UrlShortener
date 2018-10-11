module.exports = {
  up: (queryInterface, Sequelize) => { },
  // queryInterface.addIndex('urls', {
  //   fields: ['code'],
  //   unique: true,
  // }),
  /*
  Add altering commands here.
  Return a promise to correctly handle asynchronicity.
  Example:
  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
*/

  down: (queryInterface, Sequelize) => { }
  // queryInterface.removeIndex('urls', 'code'), /*
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    Example:
    return queryInterface.dropTable('users');
  */
};