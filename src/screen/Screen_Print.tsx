import React, { useEffect } from 'react'
import { FormDataPrint } from '../../types/formDataPrint';

interface props {
    setIsPrinting: React.Dispatch<React.SetStateAction<boolean>>
    data: FormDataPrint
}


export const ScreenPrint = ({ setIsPrinting, data }: props) => {
    const { header, name, price } = data;

    useEffect(() => {
        setTimeout(() => {
            setIsPrinting(false)
        }, 2000);
    }, [])
    

    return (
        <div className='print-base text-center bg-white fixed z-50 break-words w-[182px]' style={{fontSize: "0.6rem"}}>
            <h2 className='font-semibold text-[1.1em]'>{name}</h2>
            <h1 className='font-bold text-center text-[2em]'>$ {price},00</h1>
            {/* <p>{header}</p> */}
        </div>
    )
}