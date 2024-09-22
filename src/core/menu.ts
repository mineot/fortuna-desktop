import { app, Menu } from 'electron';
import menu from './menu.json';

const langMap = {
  ['en-us' as string]: 'en',
  ['en' as string]: 'en',
  ['pt-br' as string]: 'pt-br',
  ['pt' as string]: 'pt-br',
};

function getLanguage() {
  const key = langMap[app.getLocale().toLowerCase()] ?? 'en';
  return menu[key] as any;
}

export function createMenu(): void {
  const t = getLanguage();

  const template: any[] = [
    {
      label: t.file,
      submenu: [
        {
          label: t.home,
          click: () => console.log('Go to Home view'),
        },
        {
          label: t.quit,
          role: 'quit',
        },
      ],
    },
    // {
    //   label: "Edit",
    //   submenu: [
    //     { label: "Undo", role: "undo" },
    //     { label: "Redo", role: "redo" },
    //     { type: "separator" },
    //     { label: "Cut", role: "cut" },
    //     { label: "Copy", role: "copy" },
    //     { label: "Paste", role: "paste" },
    //   ],
    // },
    {
      label: t.help,
      submenu: [
        {
          label: t.about,
          click: () => console.log('Go to About view'),
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
