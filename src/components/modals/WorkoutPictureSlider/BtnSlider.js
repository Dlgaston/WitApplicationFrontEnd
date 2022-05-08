import React from 'react'
import '../../Home/Home.css'
import leftArrow from '../../../icons/left-arrow.png'
import rightArrow from  '../../../icons/rightarrow.png'

// import {faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BtnSlider = ({direction, moveSlide}) => {
    console.log(direction, moveSlide)
  return (
      <button
      onClick={moveSlide}
      className={direction === "next" ?'btn-slide next' : 'btn-slide prev'}>
         <img src={direction === "next" ? rightArrow : leftArrow} alt = ""/>
      </button>

  )
}

export default BtnSlider