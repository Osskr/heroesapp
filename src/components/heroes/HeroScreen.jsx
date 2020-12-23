import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {
    
  
    const {heroId}= useParams()
    //sirve para extraer los parametros que vayan por el url
    
    const hero = getHeroesById(heroId)

    if(!hero){
        return <Redirect to='/'/> // por si me tira un id que no existe
    }

    const handleClick = ()=>{
        if(history.length <= 2){
            history.push('/')// para que vuelva a la pagina principal si la anterior es una ventana que no es de nuestra app
        } else {
            history.goBack();//para volver atras
         }
    }
    const   {
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters} = hero

   
    
    return (
        <div className="animate__animated animate__backInLeft">
            <div className="row mt-5 ">
                <div className="col-4">
                        <img src={`../assets/heroes/${heroId}.jpg`} alt={superhero} className="img-thumbnail"/>
                </div>
                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
                        <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                        <li className="list-group-item"><b>First Appereance:</b>{first_appearance}</li>
                    </ul>

                    <h5>Characters</h5>
                    <p>{characters}</p>
                    <button className="btn btn-outline-primary"
                            onClick={handleClick}>Return</button>
                </div>
            </div>
        </div>
    )
}
    