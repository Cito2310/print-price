import { UseFormRegisterReturn } from "react-hook-form"

interface props {
    registerReturn: UseFormRegisterReturn<string>
    label: string
    type: "number" | "text"
}

export const InputContainter = ({registerReturn, label, type}: props) => {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input autoFocus className=" border rounded outline-none border-slate-300 px-1.5 py-0.5" type={type} {...registerReturn} />
        </div>
    )
}
