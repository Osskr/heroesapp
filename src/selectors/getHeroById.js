const { heroes } = require("../data/heroes");
export const getHeroesById = (id) => {
    const validPublishers = ['DC Comics', 'Marvel Comics']
    
    return heroes.find(hero => hero.id === id)
}
