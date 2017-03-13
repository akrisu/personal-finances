export class Task {
  private _id: number;
  private _title: string;
  private _done: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get done(): boolean {
    return this._done;
  }

  public set done(done: boolean) {
    this._done = done;
  }

  public toogle() {
    this.done = !this.done;
  }
}
