import { useEffect, useState } from "react"
import eventsQuery from "../../services/eventsQueries"
import {useParams} from "react-router-dom"

function EventOne() {

    const [event, setEvent] = useState(null)
    const params = useParams()
    console.log(params);
        

    useEffect(() => {
        eventsQuery.getById(params.id).then(setEvent)
    },[])

    return(
        <main>
        {
            event
            ? <div className="event-card">
            <img src={event.photo}  alt={event.name} className="event-image"/>
            <div className="event-details">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-date">Fecha del evento: {new Date(event.date).toLocaleDateString()}</p>
                <p className="event-minimum-age">Apto mayores de: {event.minimumAge} años</p>
                <p className="event-attendees">Asistentes disponibles: {event.attendees.length}</p>
            </div>
        </div>
            : <p>Cargando...</p>
        }
        </main>
    )
}

export default EventOne