import { Low } from 'lowdb';
import { Data } from './contract';

export class Model<T> {
  private $db: Low<Data>;
  private $key: string;

  constructor(db: Low<Data>, key: string) {
    this.$db = db;
    this.$key = key;
  }

  async all(): Promise<T[]> {
    await this.$db.read();
    return this.$db.data[this.$key];
  }

  async push(value: T) {
    await this.$db.read();
    this.$db.data[this.$key].push(value);
    await this.$db.write();
  }
}
