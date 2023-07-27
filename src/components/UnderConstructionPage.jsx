import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/Pics/underConstruction.svg'

const UnderConstructionPage = () => {
  return (
    <main className='under-construction'>
    <div>
      <img src={img} alt="Under Construction" className='img img-uc'/>
    </div>
    <h3>Under Construction</h3>
      <Link to='/' className='btn'>Back To Home</Link>
    </main>
  )
}

export default UnderConstructionPage

