import React from 'react'
import './Hero.css'
import ecocoin from '../../assets/ecocoin.gif'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className="flex">
            <div className="liftide">
                <h1>Eco coin</h1>
                <h1 className='game'> A Gamified Platform for Sustainable Living</h1>
                <Link to="/Addimage"> <button className='btn'>Get started</button></Link>
            </div>
            <div className="rightside">
                <img src={ecocoin} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero