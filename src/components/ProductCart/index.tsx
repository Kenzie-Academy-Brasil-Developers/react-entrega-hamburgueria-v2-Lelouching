import { ProductCartStyle } from "./style"
import trash from "../../assets/trash.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface iProductProps{
    img: string,
    name: string,
    id: number,
    category?: string,
    price: number
}

export const ProductCart = ({ img, name, id, price }: iProductProps) => {

    const { removeFromCart } = useContext(CartContext)

    return (
        <ProductCartStyle>
            <div>
                <div>
                    <img src={img} alt={name} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <span>R$ {price.toFixed(2)}</span>
                </div>
            </div>
            <img onClick={() => removeFromCart(id)} src={trash} alt="Lixeira para excluir" />
        </ProductCartStyle>
    )
}