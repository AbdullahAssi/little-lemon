import React from 'react'
import dish from '../assets/Pics/restauranfood.jpg'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <section className='section background-primary'>
      <div className="banner">
        <div className="banner-item">
          <h1 className='margin-top'>Little Lemon</h1>
          <h3 className='margin-top heading-banner'>Islamabad</h3>
          <p className='margin-top'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam placeat adipisci reiciendis accusamus qui corrupti unde aliquam saepe. Ducimus dolorum omnis odit repudiandae sapiente!</p>
          <Link to='reservations' className='btn margin-top-btn'>Reserve a Table</Link>

        </div>
        <div className="banner-img">
          <img src={dish} alt='Spring rolls' />
          <Link to='menu' className='btn'>Menu</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner