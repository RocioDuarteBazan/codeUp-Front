import { useEffect, useState } from 'react';
import PlaceCard from '../../components/PlaceCard';
import placesQueries from '../../services/placesQueries';


function Events() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        placesQueries.getAll().then(setPlaces)
    }, [])

    return (
        <main>
            <h1>Places</h1>
            {
                places.map(place => <PlaceCard key={place._id} {...place} />)
            }
        </main>
    )
}

export default Events;