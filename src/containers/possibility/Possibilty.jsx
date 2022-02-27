import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
function Possibilty() {
    return (
        <div className='gpt3__posibility section__padding' id='possibility'>
          <div  className='gpt3__posibility-image' >
              <img src={possibilityImage} />
              </div>  
              <div className='gpt3__posibility-content' >
                  <h4>Request Early Access to GEt Started</h4>
                  <h1 className='gradient__text'>The Possibilities Are Beyond UR Imagination
</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Ducimus facilis facere reiciendis amet autem aut 
     rem incidunt explicabo saepe quisquam.</p>
     <h4>Request Early Access to GEt Started</h4>
              </div>
        </div>
    )
}

export default Possibilty
