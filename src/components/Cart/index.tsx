import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ButtonStyle } from "../Button"
import { ProductCart } from "../ProductCart"
import { CartStyle } from "./style"

export const Cart = () => {

    const { setCartModal, cartProducts, setCartProducts, sumProductsPrice } = useContext(CartContext)

    return (
        <CartStyle >
            <div>
                <div>
                    <h3>Carrinho de compras</h3>
                    <span onClick={() => setCartModal(false)}>X</span>
                </div>
                {
                    cartProducts.length == 0 ? (
                        <div>
                            <h3>Sua sacola está vazia</h3>
                            <span>Adicione itens</span>
                        </div>
                    ) : (
                        <section>
                            <ul>
                                {
                                    cartProducts.map((product, index) => (
                                        <ProductCart key={index} img={product.img} name={product.name} id={product.id} price={product.price} />
                                    ))
                                }
                            </ul>
                            <div>
                                <div>
                                    <span>Total</span>
                                    <span>R$ {sumProductsPrice?.toFixed(2)}</span>
                                </div>
                                <ButtonStyle onClick={() => setCartProducts([])} type="button" width="full" styledBtn="colorGrey" padding="big">Remover todos</ButtonStyle>
                            </div>
                        </section>
                    )
                }
            </div>
        </CartStyle>
    )
}