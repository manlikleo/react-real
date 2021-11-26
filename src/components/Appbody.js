import React,{useContext} from 'react'
import { FilterContext } from '../FilterContext';
import '../css/search.min.css';


export default function Appbody() {

    const{searchHandlers,searchStates} = useContext(FilterContext); 

    const [handleSubmit,handleChange,openAgent,inputData,inputVal] = searchHandlers
    const [loader,anim,error,comName] = searchStates; 

    return (
        <div className="search">
            <div className="search__content">
                <h2 className="search__title">Real Estate Agency Portal</h2>
                <p className="search__subtitle"> <span>Transforming the industry with transparency and technology</span></p>
            </div>

            <div className="search__wrapper">
                <form className="search__inputwrapper" onSubmit={(e)=> {e.preventDefault();handleSubmit(e.target.agency.value)}}>
                    <input className="search__input" type="search" placeholder="Find Real Estate Agency with Agent Code" name="agency" onChange={(e)=> handleChange(e.target.value)} value={inputVal} maxLength="6"/>
                    <button type="submit" className="search__button">Find Agent</button>
                </form>

                <div className= {`search__results ${loader ? '': 'hide' } `}>

                    <div className={`search__agentInfo ${comName? '' :  'hide'} `}>
                             <h5 className="search__agentName">{inputData.companyName}</h5>
                            <button type="button" className="search__agentBtn" onClick={openAgent}> More Information </button>
                    </div>
                    
                    <p className={`search__message ${error ? '' : 'hide'}`}> Kindly re-check Agent Code <br/> Agent not present in our record</p>

                    <div className={`search__loader ${anim ?'':'hide'}`}></div>
                </div>

            </div> 
        </div>
       
    )
}

