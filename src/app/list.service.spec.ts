/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListService } from './list.service';
import { Task } from './task';

describe('Task list service', () => {
  const task: Task =  new Task({id: 1, title: 'test', done: false});
  const task2: Task = new Task({id: 2, title: 'second test', done: true});

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService]
    });
  });

  it('should inject a service', inject([ListService], (listService: ListService) => {
    expect(listService).toBeTruthy();
  }));
  it('should return an empty list', inject([ListService], (listService: ListService) => {
    expect(listService.getAll()).toBeNull;
  }));
  it('should add task to list', inject([ListService], (listService: ListService) => {
    listService.add(task);

    expect(listService.todoList.length).toEqual(1);
    expect(listService.lastId).toEqual(1);
    expect(listService.todoList).toContain(task);
  }));

  it('should delete specified task from list', inject([ListService], (listService: ListService) => {
    listService.add(task);
    listService.delete(task.id);

    expect(listService.todoList).not.toContain(task);
  }));

  it('should throw an error when task to delete doesnt exist', inject([ListService], (listService: ListService) => {
    const deleteWithWrongParameter: Function = () => {
      listService.delete(-100);
    };

    expect(deleteWithWrongParameter).toThrowError(TypeError);
  }));

  it('should be able to get specified task from list', inject([ListService], (listService: ListService) => {
    listService.add(task);
    const gettedTask: Task = listService.get(task.id);

    expect(gettedTask).toEqual(task);
  }));

  it('should throw an error when task to get doesnt exist', inject([ListService], (listService: ListService) => {
    const getWithWrongParameter: Function = () => {
      listService.get(-100);
    };

    expect(getWithWrongParameter).toThrowError(TypeError);
  }));

  it('should be able to get all tasks', inject([ListService], (listService: ListService) => {
    listService.add(task);
    listService.add(task2);

    const taskList: Array<Task> = listService.getAll();
    expect(taskList).toEqual([task, task2]);
  }));

  it('should be able to get undone tasks', inject([ListService], (listService: ListService) => {
    listService.add(task);
    listService.add(task2);

    const undoneTasks: Array<Task> = listService.getUndone();
    expect(undoneTasks).toEqual([task]);
  }));

  it('should be able to get done tasks', inject([ListService], (listService: ListService) => {
    listService.add(task);
    listService.add(task2);

    const doneTasks: Array<Task> = listService.getDone();
    expect(doneTasks).toEqual([task2]);
  }));

  it('should update specified task', inject([ListService], (listService: ListService) => {
    listService.add(task);
    listService.update(task.id, {title: 'changedTitle', done: true});
    const gettedTask: Task = listService.get(task.id);

    expect(gettedTask.title).toEqual('changedTitle');
    expect(gettedTask.done).toBeTruthy();
  }));

  it('should throw an error when task to update doesn\'t exist', inject([ListService], (listService: ListService) => {
    const updateWithWrongParameter: Function = () => {
      listService.update(-100);
    };

    expect(updateWithWrongParameter).toThrowError(TypeError);
  }));
});
