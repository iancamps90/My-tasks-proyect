import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent"
import BuyTShirt from "../components/BuyTShirt";
import BuyCup from "../components/BuyCup";
import ProductWrapper from "../hoc/ProductWrapper";
import CompoundFooter from "../components/CompoundFooter";


function HomePage() {

    const getBuyTShirt = (quantity, decrease, increase) => {
        return (
            <BuyTShirt
                quantity={quantity}
                decrease={decrease}
                increase={increase}
            ></BuyTShirt>
        )
    }
    const getBuyCup = (quantity, decrease, increase) => {
        return (
            <BuyCup
                quantity={quantity}
                decrease={decrease}
                increase={increase}
            ></BuyCup>
        )
    }
    return (
        <>
            
            <HeaderComponent></HeaderComponent>

            
            <div style={{ textAlign: "center" }}>
                <h2>Bienvenido a tu lista de tareas</h2>
                <Link to="/tasks" className="link">
                    Ver Tareas
                </Link>
            </div>
            <h2 style={{ textAlign: "center" }}>Apoya la pagina</h2>
            <section
                style={{
                margin: "30px",
                display: "flex",
                justifyContent: "space-around"
            }}>
                <ProductWrapper render={getBuyTShirt} />
                <ProductWrapper render={getBuyCup} />
            </section>

            <CompoundFooter className="footer">
                <CompoundFooter.Title className="footer-title">
                    Task App
                </CompoundFooter.Title>

                <CompoundFooter.SocialMedia className="social-media">
                    Facebook Instagram X
                </CompoundFooter.SocialMedia>

                <CompoundFooter.Copyright className="copyright">
                    ©  Task App
                </CompoundFooter.Copyright>

            </CompoundFooter>
            
        </>

        
    );
    }

export default HomePage;
