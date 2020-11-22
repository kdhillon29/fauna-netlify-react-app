
 const {DELETE_LINK}=require('./utils/linkQueries');
 const sendQuery = require('./utils/sendQuery');
 const fRes =require('./utils/formattedRes');

exports.handler= async (event)=>{

    const {id}= JSON.parse(event.body);       
    const variables={id}
   
   try{
       const {deleteLink:deletedLink} =  await sendQuery(DELETE_LINK,variables)
      // const data =res.allLinks.data
       return fRes(200,deletedLink)
   }

   catch(error){
       console.log('there are errors:',error);
       return fRes(500,{err:"something went wrong"})
       
   }
      


}