import axios from 'axios'; 

// an axios instance with headers to access server 
const data = axios.create({
    baseURL :"https://afternoon-wave-68887.herokuapp.com/http://boarderectors-api.accentstaging.co.uk/agents", 
    headers : {
        "Content-Type": "application/json",
    }
})

// get agency account with account code
const GetAccount = (accountCode) => {
    return data.get(`/${accountCode}/`)
}; 

// get the agency properties with account code
const GetProperties = (accountCode) => {
    return data.get(`/${accountCode}/properties`)
}

// exporting endpoints
export {GetAccount,GetProperties}; 