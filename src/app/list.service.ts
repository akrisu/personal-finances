import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable()
export class ListService {
  private _lastId: number;
  private _todoList: Array<Task> = [];

  constructor() { }

  public get lastId(): number {
    return this._lastId;
  }

  public set lastId(lastId: number) {
    this._lastId = lastId;
  }

  public set todoList(todoList: Array<Task>) {
    this._todoList = todoList;
  }

  public get todoList(): Array<Task> {
    return this._todoList;
  }

  public add(task: Task): void {
    this.todoList.push(task);

    if (this.lastId) {
      this.lastId++;
      return;
    }

    this.lastId = 1;
  }

  public delete(id: number): void {
    const todoListBeforeLength: number = this.todoList.length;

    this.todoList = this.todoList.filter(task => task.id !== id);

    if (todoListBeforeLength === this.todoList.length) {
      throw new TypeError('Task with specified ID doesn\'t exist');
    }
  }

  public get(id: number): Task {
    const gettedTasks: Array<Task> = this.todoList.filter(task => task.id === id);

    if (gettedTasks.length > 0) {
      return gettedTasks.pop();
    }

    throw new TypeError('Task with specified ID doesn\'t exist');
  }

  public getAll(): Array<Task> {
    return this.todoList;
  }

  public getUndone(): Array<Task> {
    return this.todoList.filter(task => task.done === false);
  }

  public getDone(): Array<Task> {
    return this.todoList.filter(task => task.done === true);
  }

  public update(id: number, values: Object = {}): void {
    try {
      const taskToUpdate: Task = this.get(id);

      if (taskToUpdate) {
        Object.assign(taskToUpdate, values);
      }
    } catch (exception) {
      throw new TypeError('Task with specified ID doesn\'t exist');
    }
  }
}
