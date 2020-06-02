
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Finish Lambda School', project_description: 'Learn some code to get a cool job.', completed: false},
        {name: 'Get some Sleep', project_description: 'Catch those ZZZs', completed: false},
        {name: 'Build a Snowman', project_description: 'Olaf inspired snowman', completed: false},
      ]);
    });
};
