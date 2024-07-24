import { ButtonWindow } from "./ButtonWindow"

export const TopBar = () => {
    const appClose = () => window.electronAPI.appClose()
    const appMinimize = () => window.electronAPI.appMinimize()
    const appMaximize = () => window.electronAPI.appMaximize()


    return (
        <nav className="w-screen h-[34px] draggable flex justify-between bg-[#161616] text-[#dddddd]">
            {/* LEFT */}    
            <div className="basis-[0] flex-grow">
            </div>


            {/* RIGHT */}
            <div className="flex justify-end basis-[0] flex-grow">
                <ButtonWindow onClick={appMinimize} element="minus"/>
                {/* <ButtonWindow onClick={appMaximize} element="square"/> */}
                <ButtonWindow onClick={appClose} element="xcross"/>
            </div>
        </nav>
    )
}