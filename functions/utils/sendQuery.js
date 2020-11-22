const axios = require('axios');
 require('dotenv').config();
 
module.exports= async (query,variables)=>{
    const {data:{data,error}}= await axios({
        url:'https://graphql.fauna.com/graphql',
        method:'POST',
        headers:{
            Authorization:`Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data:{
            query,
            variables
        }

    });
    if(error){
        console.log(error);
        throw new Error('something went wrong');
    }
    return data;
    
}