import React,{useContext} from 'react';
import { FilterContext } from '../FilterContext';
import CloseBtn from './CloseBtn';
import agentLogo from '../agentlogo.jpg'; 
import '../css/agent.min.css';





export default function Agent() {

    const {agentWin} = useContext(FilterContext); 
    const [agentTab,SetAgentTab,inputData,openProp] = agentWin;

 
    const closeAgent = () => {
        SetAgentTab(false)
    }
   

    return (
        <div className={`agent ${agentTab ? '' :'hide'}`}>
            <CloseBtn data={closeAgent}/>
            <div className="agent__header">
                <div className="agent__logo">
                    <img className="agent__logoimg" src={agentLogo} alt="agent-img"  />
                </div>

                <div className="agent__info">
                    <h2 className="agent__title">{inputData.companyName}</h2>
                    <p className="agent__accno"><span>Agent Code: {inputData.accountCode}</span></p>
                </div>
            </div>

            {  typeof inputData.branchAddress !== 'undefined' &&  
                <div className="agent__infocontainer">
                <div className="agent__address">
                        <h3 className="agent__addheader">Office Address:</h3>
                        <p className="agent__fulladdress"><span>
                            {inputData.branchAddress.houseNumber} {inputData.branchAddress.address1}, {inputData.branchAddress.locality}, <br/>
                            {inputData.branchAddress.town} {inputData.branchAddress.county},<br/>
                            {inputData.branchAddress.postcode}, UK 
                            </span>
                        </p>    
                </div>

                <div className="agent__address">
                    <h3 className="agent__addheader">Contact Information:</h3>
                    <p className="agent__fulladdress"><span>
                    realestateagency@realco.co.uk<br/>
                    +4479282661161<br/>
                    </span>
                    </p>
                </div>  
                </div>
            }

            <button className="agent__properties" onClick={()=>{openProp()}}>View Properties</button>
        </div>
    )
}
