import { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import eventQueries from '../../services/eventsQueries';


function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventQueries.getAll().then(setEvents)
    }, [])

    return (
        <main>
            <h1>Eventos</h1>
            {
                events.map(event => <EventCard key={event._id} {...event} />)
            }
        </main>
    )
}

export default Events;