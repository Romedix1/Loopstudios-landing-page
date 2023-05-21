import React from "react";
import CreationData from "./CreationsData"
import CreationCard from "./CreationCard"

export default function Creations() {
    const cards = CreationData.map(item => {
        return (
            <CreationCard 
               key={item.id}
               {...item}
            />
        )
    })
    console.log(cards)
    return (
        <section className="creations-section">
            <h2 className="creations--header">Our creations</h2>

            <section className="creations--card-box">
                {cards}
            </section>

            <div className="creations--button-container">
                 <button className="creations--button">See All</button>
            </div>
        </section>
    )
} 