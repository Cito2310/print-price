import { useEffect, useState } from "react"
import { ConfigApp } from "../../types/configTypes"
import { defaultConfigApp } from "../defaultConfigApp"
import { KeyLocalStorage } from "../../types/keyLocalStorage";

export const useConfig = () => {
    const [config, setConfig] = useState<ConfigApp>(defaultConfigApp);

    useEffect(() => {
        const configAppData = window.localStorage.getItem("config-app" as KeyLocalStorage);

        if ( configAppData ) setConfig( JSON.parse(configAppData) );
    }, [])

    useEffect(() => {
        window.localStorage.setItem("config-app" as KeyLocalStorage, JSON.stringify(config) );
    }, [config])

    return { config, setConfig }
}