import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent"
import BuyTShirt from "../components/BuyTShirt";
import BuyCup from "../components/BuyCup";


function HomePage() {
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
            <section style={{
                margin: "30px",
                display: "flex",
                justifyContent: "space-around"
            }}>
                <BuyTShirt></BuyTShirt>
                <BuyCup></BuyCup>
            </section>
            
        </>

        
    );
    }

export default HomePage;
