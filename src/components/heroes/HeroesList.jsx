import React, { useMemo } from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'


export const HeroesList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // por si la carga es muy pesada e innecesaria. solo se va a disparar si el publisher cambia
    //const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero =>(
                    <HeroCard key={hero.id}
                                  {...hero}/> 
                ))
            }
        </div>
    )
}
