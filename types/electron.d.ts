declare global {
    interface Window {
        electronAPI: {
            printPage: () => Promise<void>,

            appClose: () => Promise<void>,
            appMaximize: () => Promise<void>,
            appMinimize: () => Promise<void>,
            // basicOnIpc: ( value: string ) => unknown,
            // basicHandleIpc: ( value: string ) => unknown,
        }
    }
}

export {}