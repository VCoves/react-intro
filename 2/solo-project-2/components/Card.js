import React from "react"

export default function Card(prop){
    return (
        <div className="card">
            <img className="card--img" src={prop.data.imageUrl}/>
            <div className="card-content">
                <div className="card--location">
                    <img src="../images/s2.svg"/>
                    <h3>{prop.data.location.toUpperCase()}</h3>
                    <a href={prop.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{prop.data.title}</h2>
                <h2 className="card--date">{prop.data.startDate} - {prop.data.endDate}</h2>
                <h2 className="card--description">{prop.data.description}</h2>
            </div>
        </div>
    )
}