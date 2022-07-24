import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [btn, setBtn] = useState(false)
    function toggleClick() {
        setBtn(!btn)
    }
    let toggleClassCheck = btn ? 'active' : null;
    let btnClassCheck = btn ? 'btn-close' : null;
    return (
        <>
            <div className="nav">
                <div className="nav-icon"></div>
                <div className="line"></div>
                <button className={`burger-btn ${btnClassCheck}`}
                    onClick={toggleClick}></button>

                <div className={`nav-ul ${toggleClassCheck}`}>
                    <ul>
                        <Link to='/' className='nav-link'><span>00</span>  HOME</Link>
                        <Link to='/Destination' className='nav-link'><span>01</span>  DESTINATION</Link>
                        <Link to='/Crew' className='nav-link'><span>02</span>  CREW</Link>
                        <Link to='/Technology' className='nav-link'><span>03</span>  TECHNOLOGY</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
