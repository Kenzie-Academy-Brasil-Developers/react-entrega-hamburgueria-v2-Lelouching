import { HeaderStyle } from "./style"
import whiteSearch from "../../assets/whiteSearch.svg"
import shoppingCart from "../../assets/shoppingCart.svg"
import leave from "../../assets/leave.svg"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { ButtonStyle } from "../Button"
import { CartContext } from "../../context/CartContext"

export const Header = () => {

    const { leaveAccount } = useContext(UserContext)

    const { setSearchProduct, cartProducts, setCartModal } = useContext(CartContext)

    const [inputValue, setInputValue] = useState("")

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchProduct(inputValue)
    }

    return (
        <HeaderStyle>
           <nav className="container">
                <h1>Burguer <span>Kenzie</span></h1>
                <div>
                    <form onSubmit={(e) => formSubmit(e)}>
                        <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Digitar pesquisa" />
                        <ButtonStyle type="submit" padding="smaller" styledBtn="colorBrand" width="fit">
                            <img src={whiteSearch} alt="Lupa de pesquisa" />
                        </ButtonStyle>
                    </form>
                    <div onClick={() => setCartModal(true)}>
                        <span>
                            {cartProducts ? cartProducts.length : "0"}
                        </span>
                        <img src={shoppingCart} alt="Carrinho de compras" />
                    </div>
                    <img onClick={leaveAccount} src={leave} alt="Deslogar do site" />
                </div>
            </nav> 
        </HeaderStyle>
    )
}