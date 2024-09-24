// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { Storage } from './storage';
window.storage = new Storage();
// const storage = new Storage();

// (async () => {
//   await storage.initDB('./test.json');

//   await storage.addUser({ id: '1', name: 'ABC' });
//   await storage.addUser({ id: '2', name: 'DEF' });
//   await storage.addUser({ id: '3', name: 'HIJ' });

//   await storage.addUser({ id: '4', name: 'XXX' });
//   await storage.addUser({ id: '5', name: 'YYY' });
//   await storage.addUser({ id: '6', name: 'ZZZ' });

//   const users = await storage.getUsers();
//   console.log(users);
// })();
