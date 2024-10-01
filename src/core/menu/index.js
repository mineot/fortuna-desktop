import { app, Menu } from 'electron';
import messages from '../i18n/messages.json';
import languageKeys from '../i18n/language-keys.json';

export function findLanguage() {
  const lang = languageKeys[app.getLocale().toLowerCase()] ?? 'en';
  return messages[lang];
}

export function createMenu(mainWindow) {
  const t = findLanguage();

  const template = [
    {
      label: t.app,
      submenu: [
        {
          label: t.file,
          click: () => mainWindow.webContents.send('navigate', '/'),
        },
        { type: 'separator' },
        { label: t.quit, role: 'quit' },
      ],
    },
    {
      label: t.help,
      submenu: [
        {
          label: t.about,
          click: () => mainWindow.webContents.send('navigate', '/about'),
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// {
//   label: 'Edit',
//   submenu: [
//     { role: 'undo' },
//     { role: 'redo' },
//     { type: 'separator' },
//     { role: 'cut' },
//     { role: 'copy' },
//     { role: 'paste' },
//   ],
// },
