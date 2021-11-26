import React,{useContext} from 'react';
import { FilterContext } from '../FilterContext';
import CloseBtn from './CloseBtn';
import '../css/agent.min.css';
import '../css/property.min.css';




export default function Properties() {

    const {propWin} = useContext(FilterContext);
    const [inputData,propTab,properties,SetPropTab] = propWin; 

    const closeProp = ()=> {
        SetPropTab(false);
    }
    

    return (

        <div className={`agent property ${propTab ? '' :'hide'}`}>
                <CloseBtn data={closeProp}/>

                <div className="property__header">
                    <h3 className="property__agencytitle">{inputData.companyName}</h3>
                    <p className="agent__accno property__tag"><span>Properties</span></p>
                </div>

                <div className="property__propwrapper">

                    <div className="property__container">
                            <div className="property__conheader">
                                <div className="property_imgcon">
                                    <img src="" alt="property-logo" />
                                </div>
                            </div>
                    </div>
                </div>

        </div>
    )
}
