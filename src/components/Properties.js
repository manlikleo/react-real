import React,{useContext} from 'react';
import { FilterContext } from '../FilterContext';
import CloseBtn from './CloseBtn';
import '../css/agent.min.css';
import '../css/property.min.css';
import agentLogo from '../agentlogo.jpg'; 




export default function Properties() {

    const {propWin} = useContext(FilterContext);
    const [inputData,propTab,properties,SetPropTab] = propWin; 

    const closeProp = ()=> {
        SetPropTab(false);
    }
    
    const calcCharge =(stat,amount)=>{
        let levy;

        if(stat === 'For Sale'){
            levy = 0.04 * amount
        }else{
            levy = 0.075 * amount
        }
        return parseFloat(levy).toFixed(2); 

    }

    return (

        <div className={`agent property ${propTab ? '' :'hide'}`}>
                <CloseBtn data={closeProp}/>

                <div className="property__header">
                    <h3 className="property__agencytitle">{inputData.companyName}</h3>
                    <p className="agent__accno property__tag"><span>Properties</span></p>
                </div>

                <div className="property__propwrapper">

                    {properties === 0 ? (

                    <div className="search__loader"></div>  

                    ):(
                         properties.map( property => (
                            <div className="property__container">
                                <div className="property__conheader">
                                    <div className="property__imgcon">
                                        <img className="property__img" src={agentLogo} alt="property-logo" />
                                    </div>
                                    <div className="property__addresscon">
                                            <h3 className="property__addressheader">Property Location:</h3>
                                            <p className="property__address"><span>{property.address.houseNumber}, {property.address.address1}, {property.address.locality},<br/>{property.address.town}, {property.address.town},<br/>{property.address.postcode}, Uk. </span></p>
                                    </div>
                                </div>

                                <div className="property__conheader">
                                    <div className="property__addresscon">
                                            <h4 className="property__listheader">Board Type:</h4>
                                            <p className="property__listinfo"><span>{property.erectedBoardType.title}</span></p>
                                    </div>
                                    <div className="property__addresscon">
                                            <h4 className="property__listheader">Date Listed</h4>
                                            <p className="property__listinfo"><span>{property.erectedAt.split('T')[0]}</span></p>
                                    </div>
                                </div>

                                <div className="property__conheader">
                                    <div className="property__addresscon">
                                            <h4 className="property__listheader">Total Charge:</h4>
                                            <p className="property__listinfo"><span>£{property.totalFeeCharged}</span></p>
                                    </div>
                                    <div className="property__addresscon">
                                            <h4 className="property__listheader">Levy Charged</h4>
                                            <p className="property__listinfo"><span>£{calcCharge(property.erectedBoardType.title,property.totalFeeCharged)}</span></p>
                                    </div>
                                </div>
                            </div>

                    ))
                    )}

                    

                   
                </div>

                <button className="property__pagination">Next</button>
        </div>
    )
}
