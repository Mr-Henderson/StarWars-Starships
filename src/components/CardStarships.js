import React from 'react';


const CardStarships = ({ name, model, manufacturer, cost_in_credits, length, crew, consumables, hyperdrive_rating, starship_class }) => {
	return (
		<div className="tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5">
			<h2>{name}</h2>
            <p><strong>Model:</strong> {model}</p>
            <p><strong>Manufacturer:</strong> {manufacturer}</p>
            <p><strong>Cost_in_credits:</strong> {cost_in_credits}</p>
            <p><strong>Length:</strong> {length}</p>
            <p><strong>Crew:</strong> {crew}</p>
            <p><strong>Consumables:</strong> {consumables}</p>
            <p><strong>Hyperdrive_rating:</strong> {hyperdrive_rating}</p> 
            <p><strong>Starship_class:</strong> {starship_class}</p>
		</div>
	);
};

export default CardStarships;