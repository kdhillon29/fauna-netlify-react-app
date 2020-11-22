
 const {CREATE_LINK}=require('./utils/linkQueries');
 const sendQuery = require('./utils/sendQuery');
 const fRes =require('./utils/formattedRes');

exports.handler= async (event)=>{

    const {name,url,description}= JSON.parse(event.body);       
    const variables={name,url,description,archived:false}
   
   try{
       const {createLink:createdLink} =  await sendQuery(CREATE_LINK,variables)
      // const data =res.allLinks.data
       return fRes(200,createdLink)
   }

   catch(error){
       console.log(error);
       return fRes(500,{err:"something went wrong"})
       
   }
      


}