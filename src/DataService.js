import axios from 'axios'; 

const data = axios.create({
    baseURL :"https://afternoon-wave-68887.herokuapp.com/http://boarderectors-api.accentstaging.co.uk/agents", 
    headers : {
        "Content-Type": "application/json",
    }
})

const GetAccount = (accountCode) => {
    return data.get(`/${accountCode}/`)
}; 


const GetProperties = (accountCode) => {
    return data.get(`/${accountCode}/properties`)
}

export {GetAccount,GetProperties}; 