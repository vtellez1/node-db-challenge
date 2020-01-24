
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Finish Lambda School', description: 'Learn some code to get a cool job.', completed: false},
        {name: 'Get some Sleep', description: 'Catch those ZZZs', completed: false},
        {name: 'Build a Snowman', description: 'Olaf inspired snowman', completed: false},
      ]);
    });
};
