
 const {UPDATE_LINK}=require('./utils/linkQueries');
 const sendQuery = require('./utils/sendQuery');
 const fRes =require('./utils/formattedRes');

exports.handler= async (event)=>{

    const {name,url,description,_id:id,archived}= JSON.parse(event.body);       
    const variables={name,url,description,archived,id}
   
   try{
       const {updateLink:updatedLink} =  await sendQuery(UPDATE_LINK,variables)
      // const data =res.allLinks.data
       return fRes(200,updatedLink)
   }

   catch(error){
       console.log(error);
       return fRes(500,{err:"something went wrong"})
       
   }
      


}