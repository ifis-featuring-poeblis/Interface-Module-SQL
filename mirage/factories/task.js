import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  taskText: faker.list.cycle('Select all user', 'Select one user'),
  afterCreate(task, server) {
    task.schema = server.create('schema');
    task.save();
  }
});
