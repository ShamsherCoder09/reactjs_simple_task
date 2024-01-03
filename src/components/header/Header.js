import React from 'react'
import logoImage from '../images/logoimage.png'
import './header.css'

function Header() {
    return (
        <>
            <div className='first-main-cont'>
                <div className='headerContainer'>

                    <header className='header'>
                        <h1 class="styletext"><b>PROVOKERS</b></h1>
                        <img className='logo-profile' src={logoImage} alt='logo profile' />

                        <h4>Welcome to the <span class="game">game world</span></h4>
                    </header>
                </div>

                <div className='headerContainer2'>
                    <header className='header2'>
                        <img className='profile' src='https://wallpapercave.com/wp/wp7657669.jpg' alt='game profile' style={{ width: "1024", height: "1060" }} />
                        <div className='mainContainer'>
                            <div className='firstInside secondInisde'>
                                <div className='container-top'>
                                    <div class="flex-container">
                                        <h1 class="w3-text-white">for chrome ,mobile</h1>

                                    </div>
                                    <div>
                                        <h1 className='w3-text-white '><b>& Cloud gaming</b></h1>
                                        <h6 className='four'><button className='btn'>Claim Tickets</button></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </header>

                </div>
            </div>
        </>
    )
}

export default Header
