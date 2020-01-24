
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: '', notes: '', completed: false, project_id: ''},
        {description: '', notes: '', completed: false, project_id: ''},
        {description: '', notes: '', completed: false, project_id: ''},
        {description: '', notes: '', completed: false, project_id: ''},
        {description: '', notes: '', completed: false, project_id: ''},
        {description: '', notes: '', completed: false, project_id: ''}
      ]);
    });
};
