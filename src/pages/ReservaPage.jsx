import { ReservaForm } from "../components/ReservaForm"
import "./ReservaPage.css"
export const ReservaPage = () => {

    return (
      <>
 
      <div className="container">
      
        
        <div className="reservaContainer">
          <img className="ImgSmiley" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:good/v1691019432/Captura_de_pantalla_2023-08-02_193451_alguwi.webp" alt="reserva" />
          <ReservaForm/>
        </div>
      
      </div>
      </>
    )
  }