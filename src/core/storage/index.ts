import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

interface User {
  id: string;
  name: string;
}

interface Data {
  users: User[];
}

const defaultData: Data = { users: [] };

export class Storage {
  private $db: Low<Data>;

  async initDB(filePath: string): Promise<void> {
    const adapter = new JSONFile<Data>(filePath);
    this.$db = new Low(adapter, defaultData);
    await this.$db.read();
    this.$db.data ||= defaultData;
    await this.$db.write();
  }

  async addUser(user: User): Promise<void> {
    await this.$db.read();
    this.$db.data.users.push(user);
    await this.$db.write();
  }

  async getUsers(): Promise<User[]> {
    await this.$db.read();
    return this.$db.data?.users || [];
  }
}
