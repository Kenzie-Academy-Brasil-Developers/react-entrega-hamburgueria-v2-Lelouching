import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ButtonStyle } from "../Button"
import { ProductListStyle } from "./style"

interface iProductProps{
    img: string,
    name: string,
    id: number,
    category: string,
    price: number,
    product: iProductProps
}

export const ProductList = ({ img, name, category, price, product }: iProductProps) => {

    const { addToCart } = useContext(CartContext)

    return (
        <ProductListStyle>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <span>{category}</span>
                <span>R$ {price.toFixed(2)}</span>
                <ButtonStyle onClick={() => addToCart(product)} type="button" width="fit" padding="small" styledBtn="colorGrey">Adicionar</ButtonStyle>
            </div>
        </ProductListStyle>
    )
}