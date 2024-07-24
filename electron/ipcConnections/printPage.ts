import { BrowserWindow, ipcMain } from "electron"
import { ipcNames } from "../../types/ipcNames"

export const printPage = (app: Electron.App, win: BrowserWindow) => {
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