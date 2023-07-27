import React from 'react'
import GreenSalad from '../assets/Pics/greek salad.jpg'
import LemonDessert from '../assets/Pics/lemon dessert.jpg'
import Bruchetta from '../assets/Pics/bruchetta.svg'


const recipes = [
  {
    id: 1,
    image: GreenSalad,
    name: 'Greek Salad',
    cost: '₹600/-'
  },
  {
    id: 2,
    image: LemonDessert,
    name: 'Lemon Dessert',
    cost: '₹130/-'
  },
  {
    id: 3,
    image: Bruchetta,
    name: 'Bruchetta',
    cost: '₹300/-'
  },

]

const Recipes = () => {
  return (
    <section className='section'>
      <section className="banner-recipes">
        <h2>This Week's SPECIALS</h2>
        <div className="recipes">
          {recipes.map((recipe) => {
            return <div key={recipe.id} className='recipe-card'>
              <div className="image">
                <img src={recipe.image} alt={recipe.name} />
              </div>
              <div className="content">
                <p> {recipe.name} </p>
                <p> {recipe.cost} </p>
              </div>
            </div>
          })}
        </div>
      </section>
    </section>
  )
}

export default Recipes