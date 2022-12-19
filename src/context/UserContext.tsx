import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iChildren{
    children: React.ReactNode
}

interface iLoginData{
    email: string,
    password: string
}

interface iUserLoginResponse{
    id: string,
    name: string,
    email: string
}

interface iUserInfo{
    accessToken: string,
    user: iUserLoginResponse
}

interface iRegisterData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

interface iContextProps{
    loginUser: (dataInput: iLoginData) => void,
    loginLoading: boolean,
    registerLoading: boolean,
    registerUser: (dataInput: iRegisterData) => void,
    leaveAccount: () => void
}

export const UserContext = createContext({} as iContextProps)

export const UserProvider = ({ children }: iChildren) => {

    const navigate = useNavigate()

    const [loginLoading, setLoginLoading] = useState<boolean>(false)

    const [registerLoading, setRegisterLoading] = useState<boolean>(false)

    const loginUser = async (dataInput: iLoginData) => {
        setLoginLoading(true)
        try {
            const { data } = await api.post<iUserInfo>("/login", dataInput)
            toast.success("Logado com sucesso")

            localStorage.setItem("@token", JSON.stringify(data.accessToken))
            localStorage.setItem("@user", JSON.stringify(data.user))

            setTimeout(() => {
                navigate("/home")
            }, 1500)
        } catch (error) {
            console.log(error)
            toast.error("Email ou senha incorretos!")
        } finally {
            setLoginLoading(false)
        }
    }

    const registerUser = async (dataInput: iRegisterData) => {
        setRegisterLoading(true)
        try {
            const { email, password, name } = dataInput

            const userData = {
                email,
                password,
                name
            }

            const { data } = await api.post<iUserInfo>("/users", userData)

            localStorage.setItem("@token", JSON.stringify(data.accessToken))
            localStorage.setItem("@user", JSON.stringify(data.user))

            toast.success("Conta criada com sucesso!")

            setTimeout(() => {
                navigate("/home")
            }, 1500)
        } catch (error) {
            console.log(error)
            toast.error("O email que você inseriu já está em uso")
        } finally {
            setRegisterLoading(false)
        }
    }

    const leaveAccount = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ loginUser, loginLoading, registerUser, registerLoading, leaveAccount }}>
            {children}
        </UserContext.Provider>
    )
}