import { InputContainter } from "./components/InputContainter";
import { usePrint } from "./hooks/usePrint";
import { ScreenPrint } from "./screen/Screen_Print";


const defaultValues = {
    price: 0,
    name: "",
    header: "MERCADITO ALE",
}

function App() {
    const { isPrinting, data, onPrint, register, setIsPrinting } = usePrint( defaultValues )

    return (
        <>
            {
                isPrinting === false && <div>
                    <InputContainter label="Nombre del Producto:" registerReturn={register("name")} />

                    <InputContainter label="Precio:" registerReturn={register("price")} />

                    <button onClick={onPrint}>Imprimir</button>
                </div>
            }

            {
                isPrinting === true && <ScreenPrint data={data} setIsPrinting={setIsPrinting} />
            }
        </>
    );
}

export default App;
