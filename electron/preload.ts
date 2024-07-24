import { ipcNames } from "../types/ipcNames"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    printPage: ( ) => ipcRenderer.send("print-page" as ipcNames),

    appClose: () => ipcRenderer.invoke("app-close" as ipcNames),
    appMaximize: () => ipcRenderer.invoke("app-maximize" as ipcNames),
    appMinimize: () => ipcRenderer.invoke("app-minimize" as ipcNames),
})