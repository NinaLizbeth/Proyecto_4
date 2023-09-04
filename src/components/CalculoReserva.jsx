

//  creo una funcion y le doy propiedades (props).
const CalculoReserva = ({ reserva, mesasTotales, children }) => {

    // El useState me define el estado de 'mesasDisponibles'.
    const [mesasDisponibles, setMesasDisponibles] = useState(0);

    // La funcion asincrónica me calcula la cantidad de mesas disponibles.
    const calcularMesasDisponibles = async () => {

        // Creo constantes segun la capacidad de mesas disponibles: Dobles, de 4 personas y de 6 personas
        const capacidadMesaDoble = 2;
        const capacidadMesaCuatro = 4;
        const capacidadMesaSeis = 6;

            // Constante para definir la cantidad de mesas por tipo: Son 40 mesas, 10 dobles, 15 de cuatro personas y 15 de 6 personas.
            const mesasDobles = 10;
            const mesasCuatro = 15;
            const mesasSeis = 15;
    
 // Creo una constante en la que defino la cantidad de horas  en que estarian las personas ocupando una mesa.(Calculo 3 horas)
        const duracionReservaHoras = 3;

        // Esta constante define el horario en que se abre (13:00 horas) y cierra (24:00 horas) mi restaurant
        const horaApertura = 13;
        const horaCierre = 24;

    //  Con "reserva.fecha" Accedo a la "propiedad fecha" dentro de reserva y "new Date" crea una nueva fecha basandose en la informscion de "reserva.fecha"
        const fechaReserva = new Date(reserva.fecha);

//El método split(":") divide la hora en partes separadas por ":" dejando primero la hora y luego los minutos. (formato tipo: 13:00) 
//El [0]: Accede al primer elemento del nuevo arreglo, que seria la hora.
// Y parseInt converte  la hora en un número entero. 
        const horaReserva = parseInt(reserva.hora.split(":")[0]);

        // Calcula la capacidad total de personas.
        const capacidadTotal = (mesasDobles * capacidadMesaDoble) +
            (mesasCuatro * capacidadMesaCuatro) +
            (mesasSeis * capacidadMesaSeis);

        // Calcula los horarios en que esta abierto el restaurant para la reserva que seria de las 13:00 a las 24:00
        const horarios = horaCierre - horaApertura - duracionReservaHoras;

        // Calcula la capacidad total segun el horario de la reserva.
        const capacidadHorario = capacidadTotal * horarios;

        // Calcula el número máximo de reservas en el horario.
        const maxReservasHorario = Math.floor(capacidadHorario / capacidadMesaCuatro);

        // hace el cálculo de mesas disponibles.
        const mesasOcupadas = 0; 
        const mesasDisponibles = maxReservasHorario - mesasOcupadas;

        // Con "setMesasDisponibles" se deberia ctualizar el estado de "mesasDisponibles".
        setMesasDisponibles(mesasDisponibles);
    };

}