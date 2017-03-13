import {Task} from './task';

describe('Task', () => {
  const task: Task = new Task({id: 1, title: 'test', done: 'false'});

  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should create an instance with parameters', () => {
    expect(task.id).toEqual(1);
    expect(task.title).toEqual('test');
    expect(task.done).toBeFalsy;
  });

  it('should toogle done parameter', () => {
    task.toogle();
    expect(task.done).toBeTruthy;

    task.toogle();
    expect(task.done).toBeFalsy;
  });
});
