
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Learn Backend', notes: 'Node, SQL, and some other good stuff', completed: false, project_id: 1},
        {description: 'Finish Portfolio', notes: 'Do it in ReactJS', completed: false, project_id: 1},
        {description: 'JS Whiteboarding', notes: 'Get those reps in', completed: false, project_id: 1},
        {description: 'Find a quiet room', notes: '', completed: false, project_id: 2},
        {description: 'Find a dark room', notes: 'Throw some dark curtains up', completed: false, project_id: 2},
        {description: 'Roll snow in a big balls', notes: 'Wear mittens', completed: false, project_id: 3},
        {description: 'Carefully place balls on top of each other', notes: 'Smaller balls on top', completed: false, project_id: 3},
        {description: 'Decorate with cool scarf', notes: '', completed: false, project_id: 3}
      ]);
    });
};
