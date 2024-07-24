import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormDataPrint } from "../../types/formDataPrint";


export const usePrint = ( defaultValues: FormDataPrint) => {
    const [isPrinting, setIsPrinting] = useState(false);
    const [data, setData] = useState<FormDataPrint>({} as FormDataPrint)

    const { register, getValues } = useForm<FormDataPrint>({ defaultValues });

    const onPrint = async() => {
        setData(getValues());
        setIsPrinting(true)

        setTimeout(async() => {
            await window.electronAPI.printPage()
        }, 500);
    }

    return {
        setIsPrinting,
        isPrinting,
        register,
        onPrint,

        data,
    }
}
