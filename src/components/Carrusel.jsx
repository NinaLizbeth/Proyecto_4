import "./Carrusel.css"
export const Carrusel = () => {


  return (
    <>
      <div data-bs-ride="carousel"  id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item ">
            <video autoPlay muted loop playsinline src="https://res.cloudinary.com/dt7h6qci4/video/upload/v1691600159/2003804_Homemade_Epicure_Dinner_1920x1080_sss9uh.mp4" className="d-block w-100" alt="plato1"></video>
            <div className="carousel-caption d-none d-md-block">
            <h1>Bienvenido a Dolce Vita</h1>
              <p>"Un pedazo de Italia en cada plato"</p>
            </div>
          </div>
          <div className="carousel-item active">
            <video autoPlay muted loop playsinline src="https://res.cloudinary.com/dt7h6qci4/video/upload/v1690915016/Untitled_rcwdel.mp4" className="d-block w-100" alt="plato2"></video>
            <div className="carousel-caption d-none d-md-block">
              <h1>Bienvenido a Dolce Vita</h1>
              <p>"Un pedazo de Italia en cada plato"</p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop playsinline src="https://res.cloudinary.com/dt7h6qci4/video/upload/v1690915145/Untitled_1_graa4a.mp4" className="d-block w-100" alt="plato3" ></video>
            <div className="carousel-caption d-none d-md-block">
            <h1>Bienvenido a Dolce Vita</h1>
              <p>"Un pedazo de Italia en cada plato"</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}