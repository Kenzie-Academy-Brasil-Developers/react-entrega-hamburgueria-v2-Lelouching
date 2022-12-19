import { Link } from "react-router-dom"
import { FormStyle } from "../../components/Form/style"
import { Input } from "../../components/Input"
import { SiteLogo } from "../../components/SiteLogo"
import { RegisterStyle } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { ButtonStyle } from "../../components/Button"

interface iRegisterData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const Register = () => {

    const { registerLoading, registerUser } = useContext(UserContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Você precisa colocar seu nome"),
        email: yup.string().required("É necessário fornecer um email").email("Coloque um email válido"),
        password: yup.string().required("É necessário colocar uma senha").min(6, "Senha tem que ter no mínimo 6 caracteres").matches(/[a-z]/, "Senha tem que ter uma letra").matches(/[A-Z]/, "Senha tem que ter uma letra maiúscula").matches(/[0-9]/, "Senha tem que ter um número"),
        confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref("password")], "Os campos de senha devem ser iguais")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterData>({
        resolver: yupResolver(formSchema)
    })

    return (
       <RegisterStyle className="container">
            <FormStyle onSubmit={handleSubmit(registerUser)} noValidate>
                <div>
                    <h2>Cadastro</h2>
                    <Link to="/">Voltar para o login</Link>
                </div>
                <Input register={register("name")} errors={errors.name} type="text" placeholder="Nome" disabled={registerLoading} id="name" label="Nome" />
                <Input register={register("email")} errors={errors.email} type="email" placeholder="Email" disabled={registerLoading} id="email" label="Email" />
                <Input register={register("password")} errors={errors.password} type="password" placeholder="Senha" disabled={registerLoading} id="password" label="Senha" />
                <Input register={register("confirmPassword")} errors={errors.confirmPassword} type="password" placeholder="Confirmar senha" disabled={registerLoading} id="confirmPassword" label="Confirmar senha" />
                <ButtonStyle disabled={registerLoading} type="submit" width="full" padding="big" styledBtn="colorGrey">
                    {registerLoading ? "Cadastrando..." : "Cadastrar"}
                </ButtonStyle>
            </FormStyle>
            <SiteLogo/>
       </RegisterStyle> 
    )
}