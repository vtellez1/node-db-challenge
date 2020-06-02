
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Training Kit', description: 'A great resource for Lambda Students'},
        {name: 'Youtube Videos', description: 'Great information and free'},
        {name: 'A Good Bed', description: 'Best with comfy blankets'},
        {name: 'Snow', description: 'preferably cold'},
        {name: 'Carrots', description: 'for a cool nose'},
      ]);
    });
};
