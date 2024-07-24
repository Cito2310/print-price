import { UseFormRegister } from "react-hook-form"
import { InputContainter } from "../components/InputContainter"
import { FormDataPrint } from "../../types/formDataPrint"

interface props {
    register: UseFormRegister<FormDataPrint>
    onPrint: () => Promise<void>
}

export const ScreenMain = ({ onPrint, register }: props) => {
    return (
        <div>
            <InputContainter label="Nombre del Producto:" registerReturn={register("name")} />

            <InputContainter label="Precio:" registerReturn={register("price")} />

            <button onClick={onPrint}>Imprimir</button>
        </div>
    )
}
