import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../Home/Home.css'
import BtnSlider from './BtnSlider'

const Slider = ({planArray}) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide =()=>{
        if(slideIndex !== planArray.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === planArray.length){
            setSlideIndex(1)
        }
    }
    const prevSlide =() =>{
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(planArray.length)
        }
    }
    const moveDot = index =>{
        setSlideIndex(index)
    }
    return (
        <div className="profile-slider-modal">
            {planArray.map((obj, index) => {
                return (
                    <div
                     key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <h1 className='h1-underline'>
                            {obj.planStart}
                        </h1>
                        <img src={obj.image} alt = ""/>
                    </div>
                )
            })}
            <BtnSlider moveSlide ={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className='container-dots'>
                {planArray.map((item,index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    )
}

export default Slider