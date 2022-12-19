import { ButtonStyle } from "../../components/Button"
import { FormStyle } from "../../components/Form/style"
import { Input } from "../../components/Input"
import { SiteLogo } from "../../components/SiteLogo"
import { LoginStyle } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Link } from "react-router-dom"

interface iLoginData{
    email: string,
    password: string
}

export const Login = () => {

    const { loginUser, loginLoading } = useContext(UserContext)

    const formSchema = yup.object().shape({
        email: yup.string().required("É necessário fornecer um email").email("Coloque um email válido"),
        password: yup.string().required("É necessário colocar uma senha").min(6, "Senha tem que ter no mínimo 6 caracteres")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<iLoginData>({
        resolver: yupResolver(formSchema)
    })

    return (
       <LoginStyle className="container">
            <FormStyle onSubmit={handleSubmit(loginUser)} noValidate>
                <h2>Login</h2>
                <Input register={register("email")} errors={errors.email} type="email" placeholder="Email" disabled={loginLoading} id="email" label="Email" />
                <Input register={register("password")} errors={errors.password} type="password" placeholder="Senha" disabled={loginLoading} id="password" label="Senha" />
                <ButtonStyle disabled={loginLoading} type="submit" width="full" padding="big" styledBtn="colorBrand">
                    {loginLoading ? "Logando..." : "Logar"}
                </ButtonStyle>
                <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                <Link to="/register">Cadastrar</Link>
            </FormStyle>
            <SiteLogo/>
       </LoginStyle>
    )
}