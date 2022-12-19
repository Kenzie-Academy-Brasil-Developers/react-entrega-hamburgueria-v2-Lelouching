import { ProductCartStyle } from "./style"
import trash from "../../assets/trash.svg"

interface iProductProps{
    img: string,
    name: string,
    id: number | undefined,
    category?: string,
    price?: number
}

export const ProductCart = ({ img, name, id }: iProductProps) => {
    return (
        <ProductCartStyle>
            <div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <div>
                        
                    </div>
                </div>
            </div>
            <img src={trash} alt="Lixeira para excluir" />
        </ProductCartStyle>
    )
}