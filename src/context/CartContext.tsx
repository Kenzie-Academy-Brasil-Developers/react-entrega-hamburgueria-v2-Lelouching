import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface iChildren{
    children: React.ReactNode
}

interface iProduct{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
    product: iProduct
}

interface iContextProps{
    products: null | iProduct[],
    setProducts: Dispatch<SetStateAction<iProduct[] | null>>,
    searchProduct: string,
    setSearchProduct: Dispatch<SetStateAction<string>>,
    filterProducts: undefined | iProduct[],
    setCartProducts: Dispatch<SetStateAction<iProduct[]>>,
    cartProducts: iProduct[],
    addToCart: (product: iProduct) => void,
    cartModal: boolean,
    setCartModal: Dispatch<SetStateAction<boolean>>,
    sumProductsPrice: number | undefined,
    removeFromCart: (id: number) => void
}

export const CartContext = createContext({} as iContextProps)

export const CartProvider = ({ children }: iChildren) => {

    const [searchProduct, setSearchProduct] = useState<string>("")

    const [products, setProducts] = useState<null | iProduct[]>(null)

    const [cartProducts, setCartProducts] = useState<iProduct[]>([] as iProduct[])

    const [cartModal, setCartModal] = useState<boolean>(false)

    const navigate = useNavigate()

    const filterProducts = products?.filter(product => {
        if(searchProduct == "") {
            return product
        } else {
            return product.name.toLowerCase().includes(searchProduct.toLowerCase().trim()) || product.category.toLowerCase().includes(searchProduct.toLowerCase().trim())
        }
    })

    const sumProductsPrice = cartProducts?.reduce((a, b) => {return a + b.price}, 0)

    const addToCart = (product: iProduct) => {
        if(cartProducts) {
            const findEqual = cartProducts?.find((productCart) => product.id == productCart.id)

            if(findEqual) {
                toast.warning("Você já adicionou esse produto ao carrinho")
            } else {
                const newArray = cartProducts?.map((productTest) => productTest)
                newArray?.push(product)
                setCartProducts(newArray)
            }
            return
        } else {
            setCartProducts([product])
        }
    }

    const removeFromCart = (id: number) => {
        const filterCart = cartProducts?.filter(product => product.id !== id)
        if(filterCart?.length === 0) {
            setCartProducts([])
        } else {
            setCartProducts(filterCart)
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            const token = localStorage.getItem("@token") || ""

            if(token) {
                try {
                    const { data } = await api.get<iProduct[]>("/products", {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(token)}`
                        }
                    })
                    navigate("/home")
                    setProducts(data)
                } catch (error) {
                    console.log(error)
                    localStorage.clear()
                    navigate("/")
                    toast.error("Logue novamente!")
                }
            } else {
                localStorage.clear()
                navigate("/")
            }
        }

        getProducts()
    }, [])

    return (
        <CartContext.Provider value={{ removeFromCart ,products, setProducts, searchProduct, setSearchProduct, filterProducts, cartProducts, setCartProducts, addToCart, cartModal, setCartModal, sumProductsPrice }}>
            {children}
        </CartContext.Provider>
    )
}