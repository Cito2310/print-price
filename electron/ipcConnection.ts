import { BrowserWindow } from 'electron';

import { controlWindow } from './ipcConnections/controlWindow';
import { printPage } from './ipcConnections/printPage';

export const ipConnection = (app: Electron.App, win: BrowserWindow) => {

    printPage( app, win )

    controlWindow( app, win )

}