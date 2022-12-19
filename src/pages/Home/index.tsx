import { useContext, useEffect } from "react"
import { Cart } from "../../components/Cart"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { CartContext } from "../../context/CartContext"
import { api } from "../../services/api"
import { HomeStyle } from "./style"

interface iProduct{
    id?: number,
    name: string,
    category: string,
    price: number,
    img: string,
    product: iProduct
}

export const Home = () => {

    const { products, filterProducts, cartModal, setProducts } = useContext(CartContext)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const token = localStorage.getItem("@token") || ""
                const { data } = await api.get<iProduct[]>("/products", {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    }
                })
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }

        getProducts()
    }, [])

    return (
       <HomeStyle>
            {
                cartModal && <Cart />
            }
           <Header/>
            <main className="container">
                <ul>
                    {
                        products && (
                            filterProducts?.map((product, index) => (
                                <ProductList key={index} img={product.img} name={product.name} price={product.price} category={product.category} product={product} id={product.id} />
                            ))
                        )
                    }
                </ul>
            </main>
       </HomeStyle>
    )
}