import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h1>Dc Heroes</h1>
            <hr/>
            <HeroesList publisher={'DC Comics'}/>
        </div>
    )
}


