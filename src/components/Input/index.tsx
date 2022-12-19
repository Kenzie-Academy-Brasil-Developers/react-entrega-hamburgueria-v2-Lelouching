import { InputStyle } from "./style"
import { UseFormRegisterReturn } from "react-hook-form"
import { InputHTMLAttributes, useState } from "react"

interface iInputErrors{

}

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
    errors: any,
    label: string,
    id: string,
    type: string,
    disabled: boolean,
    placeholder: string,
    register: UseFormRegisterReturn
}

export const Input = ({ errors, label, id, type, disabled, placeholder, register }: iInputProps) => {

    return (
        <InputStyle>
            <label className="teste" htmlFor={id}>{label}</label>
            <input id={id} type={type} {...register} disabled={disabled} placeholder={placeholder}  />
            {errors && <span>{errors.message}</span>}
        </InputStyle>
    )
}