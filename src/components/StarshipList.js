import React from 'react';
import CardStarships from './CardStarships';

const StarshipList = ({ starships }) => {
    return (
        <div>
            {starships.map(({ name, model, manufacturer, cost_in_credits, length, crew, consumables, hyperdrive_rating, starship_class }) => 
                <CardStarships key={name} name ={name} model = {model}
                manufacturer ={manufacturer} cost_in_credits ={cost_in_credits} length ={length}
                crew = {crew} consumables ={consumables} hyperdrive_rating = {hyperdrive_rating} starship_class = {starship_class} />)}
        </div>
    );
}

export default StarshipList; 