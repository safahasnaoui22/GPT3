import React from 'react'
import "./header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__trxt"> Let's build somthing amazing with GPT-3 OPenAI</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit temporibus officia explicabo dolore voluptate quis esse modi aliquam quaerat vel.
                </p>
                <div  className="gpt3__header-content__input">
                    <input type="email" placeholder="Email "></input>
                    <button type="button">Start</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} />
                    <p>1.600 people request access a visit in last 24H</p>
                </div>
                
            </div>
            <div className="gpt3__header-image">
                    <img  src={ai} />
                </div>
        </div>
    )
}

export default Header
