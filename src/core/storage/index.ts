import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { Model } from './model';

import { Data, dataKeys, defaultData, User } from './contract';

export class Storage {
  private $db: Low<Data>;
  private $userModel: Model<User>;

  async initDB(filePath: string): Promise<void> {
    const adapter = new JSONFile<Data>(filePath);
    this.$db = new Low(adapter, defaultData);
    await this.$db.read();
    this.$db.data ||= defaultData;
    await this.$db.write();
    this.$userModel = new Model(this.$db, dataKeys.USERS);
  }

  get user(): Model<User> {
    return this.$userModel;
  }
}
