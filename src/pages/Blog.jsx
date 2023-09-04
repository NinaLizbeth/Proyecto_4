import "./Blog.css"
import { BlogCard } from "../components/BlogCard"
import { BtnBlog } from "../components/BtnBlog"
export const Blog = () => {
    return (
        <>
            <section className="section">
                <div className="wrap-title-section">
                    <h2>Artículos del Blog</h2>
                </div>
                <div className="card-wrap">
                    <BlogCard
                        img={"https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691019448/Captura_de_pantalla_2023-08-02_193514_qnolr6.webp"}
                        titulo={"Viaje a Italia a través de su exquisita gastronomía"}
                        parrafo={"Viaje a Italia: turismo a través de la mejor gastronomía italiana. Circuitos por Italia a través de la mejor comida italiana. En un tour por Italia, un viaje a Roma es parada obligatoria y también Milán. Te contamos qué ver en Milán y qué visitar en Roma, especial foodies, en una increíble ruta por Italia."}
                        link={"https://www.barcelo.com/pinandtravel/es/viaje-a-italia-turismo/"}
                    />

                    <BlogCard
                        img={"https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691019448/Captura_de_pantalla_2023-08-02_193531_ksj8rk.webp"}
                        titulo={"Consejos para Cocinar como un Auténtico Chef Italiano en Casa"}
                        parrafo={"La cocina italiana es conocida en todo el mundo por sus sabores deliciosos y su enfoque en ingredientes frescos y simples. Si deseas llevar el auténtico sabor de Italia a tu propia cocina, estos increibles consejos te ayudarán a cocinar como un chef italiano experto desde la comodidad de tu hogar."}
                        link={"https://suelocaribe.com/gastronomia/aprende-a-cocinar-como-un-italiano-secretos-de-la-cocina-italiana/"}
                    />
                    <BlogCard
                        img={"https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691019448/Captura_de_pantalla_2023-08-02_193546_gm9wuh.webp"}
                        titulo={"¿Sabes cómo nació la pizza margarita?"}
                        parrafo={"De todas las posibles combinaciones de ingredientes para elaborar una pizza sin duda la sencilla pero deliciosa Pizza Margarita es la más conocida en el mundo. Y esto llama mucho la atención, en una sociedad donde la sofisticación, las recetas exóticas y la cocina vanguardista es la moda."}
                        link={"https://foodandwineespanol.com/como-se-invento-la-pizza-margarita/"}
                    />
                    <BlogCard
                        img={"https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691019448/Captura_de_pantalla_2023-08-02_193557_pdqk1s.webp"}
                        titulo={"Los chefs con más estrellas Michelin del mundo"}
                        parrafo={"Las estrellas Michelin son el sueño de todo chef de alta gastronomía. Tocar ese cielo de luminarias, y conseguir convertirse en triestrellado, equivale a ganar la Champions, un Nobel o un Oscar. Conseguirlo en más de una ocasión es un privilegio reservado a unos cuantos elegidos, muy pocos en todo el mundo. "}
                        link={"https://www.expansion.com/fueradeserie/gastro/2022/06/03/6290b9cde5fdea98218b45d8.html"}
                    />


                </div>
            </section>
        </>
    )
}
