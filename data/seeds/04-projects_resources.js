
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects_resources').insert([
        {project_id:'', resource_id: ''},
        {project_id:'', resource_id: ''},
        {project_id:'', resource_id: ''},
        {project_id:'', resource_id: ''},
        {project_id:'', resource_id: ''}
      ]);
    });
};
