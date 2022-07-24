import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import './Crew.css';
import anousImg from '../../../images/crew/image-anousheh-ansari.png';
import douglasImg from '../../../images/crew/image-douglas-hurley.png';
import markImg from '../../../images/crew/image-mark-shuttleworth.png';
import victorImg from '../../../images/crew/image-victor-glover.png';

const Crew = () => {
  const [post,setPost]=useState('FLIGHT ENGINEER');
  const [name,setName]=useState('ANOUSHEH ANSARI');
  const [comment,setComment]=useState('Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.');
  const [crewImg, setCrewImg]=useState(anousImg);

  const crewOne=()=>{
    setPost("Commander");
    setName("Douglas Hurley");
    setComment("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
    setCrewImg(douglasImg);
  }
  const crewTwo=()=>{
    setPost("Mission Specialist");
    setName("Mark Shuttleworth");
    setComment("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.");
    setCrewImg(markImg);
  }
  const crewThree=()=>{
    setPost("Pilot");
    setName("Victor Glover");
    setComment("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.");
    setCrewImg(victorImg);
  }
  const crewFour=()=>{
    
    setPost("Flight Engineer");
    setName("Anousheh Ansari");
    setComment("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.");
    setCrewImg(anousImg);
  }

  return (
    
    <div className='crew-bg'>
     <Navbar/>
     <div className="crew-main">
      <div className="crew-left">
          <h3><span>02</span>MEET YOUR CREW</h3>
          <h2>{post}</h2>
          <h1>{name}</h1>
          <p>{comment}</p>
          <div className="crew-btn">
            <button onClick={crewOne}></button>
            <button onClick={crewTwo}></button>
            <button onClick={crewThree}></button>
            <button onClick={crewFour}></button>
          </div>
        </div>
        <div className="crew-right">
          <img src={crewImg} alt="crew" />
        </div>
     </div>
    </div>
    
  )
}

export default Crew
