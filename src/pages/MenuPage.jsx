
import { NavLink } from "react-router-dom"
import "./MenuPage.css"
export const MenuPage = () => {

  return (
    <>
    <h1 className="h1menu">MENU</h1>
    <div>
        <div className="container">
        <div class="row photos">

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599776/MENU_ANTIPASTI_bhjpa8.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183702_zkgdom.webp" loading="lazy" /> </a> <div className="centered-text">
            <h2>Antipasti</h2>
          </div></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599804/MENU_BEVANDE_th8dcq.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183719_u8ljik.webp" loading="lazy" /></a><h2>Bevande</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599822/MENU_CALZONE_t7pqrz.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183733_qr4i4j.webp" loading="lazy" /></a><h2>Calzone</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599874/MENU_GELATO_nduenn.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183751_swrheg.webp" loading="lazy" /></a><h2>Gelato</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599894/MENU_INSALATA_go9qoh.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183806_yvwob8.webp" loading="lazy" /></a><h2>Insalata</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599929/MENU_PASTAS_snbvit.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183820_isgx15.webp" loading="lazy"/></a><h2>Pastas</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599947/MENU_PESCI_df7li5.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183836_ccb1qo.webp" loading="lazy" /></a><h2>Pesci</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599960/MENU_PIZZAS_l5r5t2.jpg" data-lightbox="photos"target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183851_rywlwp.webp" loading="lazy"/></a><h2>Pizzas</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691600011/sopas_guisos_f34v6r.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183914_oytfgb.webp" loading="lazy" /></a> <h2>Sopas y Guisos</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691600067/MENU_VINOS_o4l45g.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016319/menu/Captura_de_pantalla_2023-08-02_183928_hbmzax.webp" loading="lazy"/></a><h2>Vinos</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599915/MENU_NI%C3%91OS_rmjm2h.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016320/menu/Captura_de_pantalla_2023-08-02_183943_ukt0uw.webp" loading="lazy" /></a><h2>Menu Per Bambini </h2></div> 

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599850/MENU_DOLCI_rh9ffn.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016320/menu/Captura_de_pantalla_2023-08-02_184001_nvlh6e.webp" loading="lazy" /></a><h2>Dolci</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599836/MENU_CARNES_hrlyyc.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016320/menu/Captura_de_pantalla_2023-08-02_184022_n7zbxf.webp" loading="lazy" /></a><h2>Carnes</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599980/MENU_RISOTTO_plhbak.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016320/menu/Captura_de_pantalla_2023-08-02_184038_kzmsun.webp" loading="lazy" /></a><h2>Risotto</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599980/MENU_RISOTTO_plhbak.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016320/menu/Captura_de_pantalla_2023-08-02_184058_qiae6p.webp" loading="lazy" /></a><h2>Infusiones</h2></div>

          <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://res.cloudinary.com/dt7h6qci4/image/upload/v1691599980/MENU_RISOTTO_plhbak.jpg" data-lightbox="photos" target="_blank"><img class="img-fluid rounded" src="https://res.cloudinary.com/djae49wbg/image/upload/q_auto:low/v1691016321/menu/Captura_de_pantalla_2023-08-02_184114_ajegoe.webp" loading="lazy" /></a><h2>Vegano</h2></div>


        </div>
      </div>
    </div>
    </>
  )
}


