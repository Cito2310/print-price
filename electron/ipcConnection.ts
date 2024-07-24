import { BrowserWindow, dialog, ipcMain } from 'electron';

import { ipcNames } from '../types/ipcNames';

export const ipConnection = () => {

    ipcMain.on("print-page" as ipcNames, async (e, args) => {
        const win = BrowserWindow.getFocusedWindow();
        win?.webContents.print({
            silent: true,
            margins: {
                marginType: "none",
            },
            header: "Mercadito Ale",
            footer: "Mercadito Ale" 
        })
    })

}