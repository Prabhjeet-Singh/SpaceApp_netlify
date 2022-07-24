import React from 'react'
import { useState } from 'react';
import './DestinProp.css'
import moonImg from '../../../images/destination/image-moon.png'
import marsImg from '../../../images/destination/image-mars.png'
import europaImg from '../../../images/destination/image-europa.png'
import titanImg from '../../../images/destination/image-titan.png'

const DestinProp = () => {
  const [name, setName] = useState('MOON');
  const [png, setPng] = useState(moonImg)
  const [description, setDescription] = useState('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.')
  const [distance, setDistance] = useState('384,400km')
  const [travel, setTravel] = useState('3 days')

  const moon = () => {
    setName('MOON')
    setPng(moonImg)
    setDescription('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.')
    setDistance('384,400 KM')
    setTravel('3 DAYS')
  }
  const mars = () => {
    setName('MARS')
    setPng(marsImg)
    setDescription('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!')
    setDistance('225 MIL. KM')
    setTravel('9 MONTHS')
  }
  const europa = () => {
    setName('EUROPA')
    setPng(europaImg)
    setDescription('The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.')
    setDistance('628 MIL. KM')
    setTravel('3 YEARS')
  }
  const titan = () => {
    setName('TITAN')
    setPng(titanImg)
    setDescription('The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.')
    setDistance('1.6 BIL. KM')
    setTravel('7 YEARS')
  }



  return (
    <>

      <div className="destination">
        <div className="destin-left">
          <div className="des-rel">
            <h3><span>01</span> PICK YOUR DESTINATION</h3>
          </div>
          <img
            src={png}
            className="destin-pic"

            alt="planet" />
        </div>


        <div className='destin-right'>
          <nav>
            <ul className='destin-ul'>
              <button className='one ' onClick={moon}>MOON</button>
              <button className='two' onClick={mars}>MARS</button>
              <button className='three' onClick={europa}>EUROPA</button>
              <button className='four' onClick={titan}>TITAN</button>
            </ul>
          </nav>
          <h1>{name}</h1>
          <p className="destin-para">{description}</p>
          <div className="destin-line"></div>
          <div className="destin-dis">
            <div className="destin-one">
              <p className="destin-one-para">AVG.DISTANCE</p>
              <h3 className="destin-one-h3">{distance}</h3>
            </div>
            <div className="destin-two">
              <p className="destin-one-para">EST. TRAVEL TIME</p>
              <h3 className="destin-one-h3">{travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DestinProp

