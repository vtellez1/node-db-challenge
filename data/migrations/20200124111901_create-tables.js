
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl =>{
      tbl.increments();
      tbl.string('name', 128).notNullable().index();
      tbl.text('description');
      tbl.boolean('completed').notNullable().defaultTo('false');
    })
  .createTable('resources', tbl =>{
    tbl.increments();
    tbl.string('name', 128).notNullable().index();
    tbl.text('description');
    })
.createTable('tasks', tbl =>{
    tbl.increments();
    tbl.text('description').notNullable();
    tbl.text('notes');
    tbl.boolean('completed').notNullable().defaultTo('false');
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
.createTable('projects_resources', tbl =>{
    tbl.increments();
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.integer('resource_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
