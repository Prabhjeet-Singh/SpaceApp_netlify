import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import './Technology.css'
import vehicleImg from '../../../images/technology/image-launch-vehicle-portrait.jpg'
import portImg from '../../../images/technology/image-spaceport-portrait.jpg'
import capsuleImg from '../../../images/technology/image-space-capsule-portrait.jpg'

const Technology = () => {
  const [techname, setTechName] = useState('LANUCH VEHICLE');
  const [techdes, setTechDes] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
  const [techImg, setTechImg] = useState(vehicleImg);

  const techOne = () => {
    setTechName('LAUNCH VEHICLE');
    setTechDes("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
    setTechImg(vehicleImg)
  }
  const techTwo = () => {
    setTechName('SPACEPORT');
    setTechDes("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
    setTechImg(portImg)
  }
  const techThree = () => {
    setTechName('SPACE CAPSULE');
    setTechDes("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
    setTechImg(capsuleImg)
  }

  return (
    <div className='tech-bg'>
      <Navbar />
      <div className='tech-center'>
        <div className="tech-left">
          <h2><span>03</span>SPACE LAUNCH 101</h2>
          <div className="tech-left-flex">
            <div className="flex-one">
              <button onClick={techOne}>1</button>
              <button onClick={techTwo}>2</button>
              <button onClick={techThree}>3</button>
            </div>
            <div className="flex-two">
              <h3>THE TECHNOLOGY...</h3>
              <h1>{techname}</h1>
              <p>{techdes}</p>
            </div>
          </div>
        </div>
        <div className="tech-right">
          <img src={techImg} alt="tech" />
        </div>
      </div>
    </div>
  )
}

export default Technology
