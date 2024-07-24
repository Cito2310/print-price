import { FormEvent } from "react";
import { InputContainter } from "./components/InputContainter";
import { usePrint } from "./hooks/usePrint";
import { ScreenPrint } from "./screen/Screen_Print";
import { TopBar } from "./TopBar/TopBar";


const defaultValues = {
    price: 0,
    name: "",
    header: "MERCADITO ALE",
}

function App() {
    const { isPrinting, data, onPrint, register, setIsPrinting } = usePrint( defaultValues )

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onPrint()
    }
    return (
        <>
                {
                    isPrinting === false && 
                        <div className="h-screen flex flex-col bg-gray-200">
                                <TopBar />


                                <form onSubmit={onSubmit} className="mt-16 bg-white w-[500px] px-5 py-4 rounded-md  absolute left-0 right-0 mx-[auto] flex flex-col gap-2">
                                    <InputContainter type="number" label="Precio:" registerReturn={register("price")} />
                            
                                    <button className="rounded bg-blue-500 px-2 py-0.5 hover:brightness-95 active:brightness-90 transtiio-base">Imprimir</button>
                                </form>
                        </div>
                }
                
                {
                    isPrinting === true && <ScreenPrint data={data} setIsPrinting={setIsPrinting} />
                }
        </>
    );
}

export default App;
