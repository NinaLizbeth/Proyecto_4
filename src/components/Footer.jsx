import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <div id="footerId" className="divFooter">
                <div className="cajaImagen">
                </div>
                <div className="direccion">
                    <h3>Dolce Vita restaurant</h3>
                    <h4>Av. Roma n°1714, Viña Del Mar</h4>
                    <a className="ubica" href="https://www.google.com/maps/place/Ristorante+Piacere/@41.9177599,12.4621469,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61e461aeff9d:0xa9b0386db37d85b0!8m2!3d41.9177599!4d12.4621469!16s%2Fg%2F11hp5p80wj?entry=ttu" target="_blank"><img className="img-ubica" src="/assets/imges/ubica.png" alt="" /></a>
                    <div className="mapa"><iframe className="mapG" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.841779390736!2d12.462146900000002!3d41.91775990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61e461aeff9d%3A0xa9b0386db37d85b0!2sRistorante%20Piacere!5e0!3m2!1sen!2scl!4v1691505058245!5m2!1sen!2scl"  style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                </div>

                <div className="socialMedia">

                    <div className="contacto">
                        <a href=""><img className="social" src="/assets/imges/instagram.png" alt="" /></a>
                        <h2 className="h2-footer">@dolcevitaresto</h2>
                    </div>

                    <div className="contacto">
                        <a href=""><img className="social" src="/assets/imges/face.png" alt="" /></a>
                        <h2 className="h2-footer" >DolceVita Restorant</h2>
                    </div>

                    <div className="contacto">
                        <img className="social2" src="/assets/imges/fono.png" alt="" />
                        <h2 className="h2-footer">+56965678216</h2>
                    </div>

                </div>
            </div>

        </>
    )
}