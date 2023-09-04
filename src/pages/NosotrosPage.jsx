import "./NosotrosPage.css"
export const NosotrosPage = () => {

    const activeClass = (event) => {
        const panels = document.querySelectorAll(".panel")
        panels.forEach( (panel) => panel.classList.remove("active"))
console.log(event)
event.target.classList.add("active")

    }
    return (
        <>
            
            <div className="divText" >
        
                <h1>¡Bienvenidos a Dolce Vita!</h1>
                <h3>"Un pedazo de Italia en cada plato"</h3>
                <p>En lo profundo de la hermosa campiña italiana, nació nuestra historia: la familia Rossi, arraigada a la tradición y pasión por la cocina. Decidimos emprender un emocionante viaje para llevar un pedazo de nuestra amada Italia a tierras lejanas, compartiendo la magia culinaria y el espíritu acogedor de nuestra familia. Así nació Dolce Vita, nuestro querido restaurante italiano.

Hemos reunido a los mejores chefs italianos cuyos conocimientos culinarios han sido transmitidos de generación en generación. Cada plato en nuestras mesas es una obra maestra creada con pasión, dedicación y los ingredientes más frescos. Desde el auténtico risotto de Lombardía hasta los exquisitos raviolis de la Toscana, cada bocado te transportará a las calles empedradas y los aromas irresistibles de Italia.

Nuestro compromiso va más allá de la excelencia culinaria. En Dolce Vita, creemos en brindar el mejor servicio posible. Desde que crucen nuestras puertas, serán recibidos con una cálida sonrisa y la hospitalidad italiana. Nos esforzamos por crear una experiencia inolvidable para cada cliente, cuidando cada detalle y atendiendo todas sus necesidades.
 Queremos que te sientas como en casa, como parte de nuestra familia.
Ya sea que estés celebrando una ocasión especial, disfrutando de una cena romántica o sumergiéndote en los placeres culinarios de Italia, Dolce Vita está aquí para hacer de cada visita una experiencia inolvidable. Únete a nosotros mientras compartimos con amor nuestra pasión por la cocina italiana y hacemos realidad nuestros sueños.</p>
<h3>¡Buon appetito!</h3>
            </div>
            <div className="container">

                <div onClick={activeClass}

                    className="panel  panel5" >
                </div>

                <div onClick={activeClass} className="panel active panel1" >
                </div>

                <div onClick={activeClass} className="panel panel2">
                </div>

                <div onClick={activeClass} className="panel panel3">
                </div>

                <div onClick={activeClass} className="panel panel4" >
                </div>

            </div>
        </>
    )

}