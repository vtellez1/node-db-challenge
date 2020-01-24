const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getTasks,
    addTask,
    getResources,
    addResource,
    findProjectById,
    findResourceById,
    findTaskById
}

function findProjectById(id){
    return db('projects').where({ id }).first()
}

function findResourceById(id){
    return db('resources').where({ id }).first()
}

function findTaskById(id){
    return db('tasks').where({ id }).first()
}

function getProjects(){
    return db.select('*').from('projects')
}

function addProject(project){
    return db('projects').insert(project)
    .then(([id]) => {
        return findProjectById(id);
    })
}

function getResources(){
    return db.select('*').from('resources')
}

function addResource(resource){
    return db('resources').insert(resource)
    .then(([id]) => {
        return findResourceById(id);
    })
}

function getTasks(project_id){
    return db('projects as p')
    .join('tasks as t', 'p.id', 't.project_id')
    .select('p.id','p.name', 'p.project_description', 't.description', 't.notes', 't.completed')
    .where('t.project_id', project_id)
}

function addTask(taskData, id){
    return db('tasks').insert(taskData)
    .where('project_id', id)
    .then(([id]) => {
        return findTaskById(id);
    })
}