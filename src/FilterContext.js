import React,{useState} from 'react'; 
import AccData from './Account.json';
import PropData from './properties.json';
// import {GetAccount,GetProperties} from './DataService'; 

const FilterContext = React.createContext(); 


const FilterProvider = ({children}) => {

    const [inputVal,setInputValue] = useState(''); 
    const  [inputData, setInputData] = useState({});
    const [loader, setLoader] = useState(false);
    const [anim,setAnim] = useState(true);
    const [error, SetError] = useState(false)
    const [comName,setcomName] = useState(false)

    const [agentTab, SetAgentTab] = useState(false);


    const [propTab,SetPropTab] = useState(false);
    const [properties, SetProperties] = useState([])


    function handleSubmit(value) {
        if (value !== '') {
            setInputValue(value);
            setLoader(!loader)
            setAnim(false)
            const agency = AccData.filter(accNum => accNum.accountCode === value.toUpperCase())[0];   
            if (agency === undefined) {
                setInputData({});
                SetError(true)
                setAnim(false)
                setcomName(false)
            } else {
                setcomName(true)
                setAnim(false)
                SetError(false)
                setInputData(agency);
            }
        }
    }

    const openAgent = () => {
        SetAgentTab(true);
    }

    const handleChange = (value) => {
        setInputValue(value);
        setLoader(false);
    }

    const openProp = () => {
        SetAgentTab(false);
        SetPropTab(true)
        SetProperties(PropData); 
    }

   




    const UiData={
        searchHandlers:[handleSubmit,handleChange,openAgent,inputData,inputVal],
        searchStates :[loader,anim,error,comName],
        agentWin : [agentTab,SetAgentTab,inputData,openProp],
        propWin : [inputData,propTab,properties,SetPropTab]
    }

    return <FilterContext.Provider value={UiData}>{children}</FilterContext.Provider>
}

export {FilterContext,FilterProvider}