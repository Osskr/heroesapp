import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({history}) => {
    
    //hook de react router dom para extraer la location
    const location = useLocation()
   
    const {q = '' } = queryString.parse(location.search)


    
    const [values, handleInputChange] = useForm({heroName: q})
    
    const {heroName} = values
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`?q=${heroName}`)
     }

     //const heroesFiltered = getHeroesByName(q)
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]) 
    return (
        <div>
            <h1>Search Screen</h1>

            <div className="row">
                <div className="col-4">
                    <h4>SearchForm</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                        name="heroName"
                        placeholder="find your hero"
                        className="form-control"
                        value = {q}
                        autoComplete="off"
                        onChange={handleInputChange}/>
                        <button type="submit" className="btn btn-outline-primary">Search</button>
                    </form>
                </div>
                <div className="col-8">
                <h4>Results</h4>
                <hr/>

                {
                    (q==='') 
                    &&
                    <div className="alert alert-info">
                        search a hero
                    </div>
                }
                {
                    heroesFiltered.map(hero => 
                        <HeroCard  key={hero.id}
                                    {...hero}/>
                    )
                }
            </div>

            </div>
        </div>
    )
}
