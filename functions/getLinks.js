
 const {GET_LINKS}=require('./utils/linkQueries');
  const sendQuery = require('./utils/sendQuery');
  const fRes =require('./utils/formattedRes');

exports.handler= async (event)=>{
    
    try{
        const res =  await sendQuery(GET_LINKS)
        const data =res.allLinks.data
        return fRes(200,data)
    }

    catch(error){
        console.log(error);
        return fRes(500,{err:"something went wrong"})
        
    }
       


}