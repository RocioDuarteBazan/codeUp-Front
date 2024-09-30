import React, { useState} from 'react';
import { Link } from 'react-router-dom';

function PlaceCard({ name, photo, description, _id }) {
    const [imageURL, setImageUrl] = useState(photo)
    const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmj8qjOlj7WQ-GGuDPXkQRh2_x0nUR6WUSQA&s"

    return (
        <div className="event-card">
            <img src={imageURL} alt={name} className="event-image" onError={() => setImageUrl(uri)}/>
            <div className="event-details">
                <h3 className="event-name">{name}</h3>
                <p className="event-description">{description}</p>
                <Link to={`${_id}` }>More</Link>
            </div>
        </div>
    );
};

export default PlaceCard;