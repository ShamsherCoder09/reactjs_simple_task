import React, { useEffect, useState } from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Countdown from '../countTimer/CountDown'
import firstImg from '../images/logoimage.png'

const images = [
    firstImg,
    'https://gartcod.cloud/_next/static/media/mobile.548cdf6e.svg',
    'https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg'
]

function Card() {

    const colors = ['blue', 'green', 'pink', 'red'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000)

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentColorIndex, colors.length])

    const currentColor = colors[currentColorIndex];

    return (
        <>
            <div className='divcontainer'>

                <div className='styletext'>
                    <p>Join us on the launch of gartcod by</p>
                    <h5>
                        provoker
                        <span className='year'>2024</span>
                    </h5>
                </div>

                <div className='midimage'>
                    <img className='imgStyle' src="https://tse3.mm.bing.net/th?id=OIP.GBlh-fGuUjSQC-yNstrTSgHaEK&pid=Api&P=0&h=180" alt='game' />
                </div>

                <div className='for'>
                    <p>for</p>
                </div>
                <div className='image-change-cont'>
                    {images.map((index3, index) => (
                        <img
                            key={index}
                            src={index3}
                            alt={`good changes ${index + 1}`}
                            className={index === currentIndex ? 'visible' : 'hidden'}
                        />
                    ))}
                </div>
                <div class="and-text">&</div>

                <div className='color-change-text' style={{ color: currentColor }}>
                    Cloud Computing
                </div>

                <Countdown />

                <div className='twobtn'>
                    <p className="left"><button className="likebtn"><b> Like <FontAwesomeIcon icon={faCheck} /></b></button></p>
                    <p className="right"><button className="rightbtn"><b>Replies  </b> <span
                        className="replice">1</span></button></p>
                </div>

            </div>
        </>
    )
}

export default Card
