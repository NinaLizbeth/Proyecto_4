
import { useState } from "react"
import "./GaleriaPage.css"

export const GaleriaPage = () => {
  const[selectedImage, setSelectedImage] = useState(null)
  const openModal = (event) => {
    setSelectedImage(event.target)
    console.log(event.target.src)
    
   

  }

  return (
    <>
      <div className="grid-layout">

        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691017644/galeria/Captura_de_pantalla_2023-08-02_190251_umipwu.webp" loading="lazy" />
        </div>
   
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190616_hmdyat.webp" loading="lazy" />
        </div>
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691017644/galeria/Captura_de_pantalla_2023-08-02_190330_hd1ch5.webp" loading="lazy"/>
        </div>
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691017644/galeria/Captura_de_pantalla_2023-08-02_190344_xvyrgl.webp" loading="lazy" />
        </div>
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190357_mnfii2.webp" loading="lazy" />
        </div>
        
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190452_pyvdzs.webp" loading="lazy" />
        </div>
       
       
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190505_flkbah.webp" loading="lazy" />
        </div>
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190525_w8f0rg.webp" loading="lazy"/>
        </div>
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190537_dfosoh.webp" loading="lazy"/>
        </div>
        
        <div className="caja">
          <img className="imagen" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691017645/galeria/Captura_de_pantalla_2023-08-02_190602_jqt14g.webp" loading="lazy" />
        </div>
       
        
        </div>
    </>
  )
}