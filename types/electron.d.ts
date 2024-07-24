declare global {
    interface Window {
        electronAPI: {
            printPage: () => Promise<void>,
            // basicOnIpc: ( value: string ) => unknown,
            // basicHandleIpc: ( value: string ) => unknown,
        }
    }
}

export {}