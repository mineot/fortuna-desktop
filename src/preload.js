// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  on: (channel, callback) => ipcRenderer.on(channel, callback),
  getLanguage: () => ipcRenderer.invoke('get-locale'),
});
