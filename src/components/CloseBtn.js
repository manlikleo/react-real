import React from 'react'
import closeBtn from '../close.png';
import '../css/agent.min.css';

export default function CloseBtn({data}) {

    return (
        <button className="agent__closewrapper" onClick={()=> {data()}}>
        <img className="agent__img" src={closeBtn} alt="close-btn"/>
     </button>
    )
}
