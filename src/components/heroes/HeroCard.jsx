import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id,superhero,publisher, 
                          alter_ego,first_appearance,characters}) => {
    
        return (
            <div className="card" style={ { maxWidth:300}} >
                <img src={`./assets/heroes/${id}.jpg`}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="mb-0">{superhero}</h5>
                    <p className="card-text my-0">{alter_ego}</p>
                    <p className="card-text "><small>{first_appearance}</small></p>
               

                    {
                        (alter_ego !== characters) 
                    && <p>{characters} </p>
                    }
                    <span className='badge badge-dark font-weight-bold'>{publisher}</span>

                    <p><Link to={`./hero/${id}`}>Mas info</Link></p>
                </div>
            </div>
    )
}



