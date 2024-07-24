

export interface ConfigArgs {
    method: "modify" | "get"
    config: ConfigApp
}


export interface ConfigApp {
    fontSize: number,
    generateName: boolean,
}