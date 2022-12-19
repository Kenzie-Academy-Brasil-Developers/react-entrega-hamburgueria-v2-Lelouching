import { SiteLogoStyle } from "./style"
import shoppingBag from "../../assets/shoppingBag.svg"
import bubbles from "../../assets/bubbles.svg"

export const SiteLogo = () => {
    return (
        <SiteLogoStyle>
            <h1>Burguer <span>Kenzie</span></h1>
            <div>
                <div>
                    <img src={shoppingBag} alt="Sacola de compras" />
                </div>
                <span>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</span>
            </div>
            <img src={bubbles} alt="Círculos cinzas" />
        </SiteLogoStyle>
    )
}