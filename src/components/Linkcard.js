import React, { useState } from 'react'




export default function Linkcard({link,refreshLinks}) {
   //const [mylink, setLink] = useState(link);
   const [loading  , setLoading] = useState(false);
   const myStyle = {
   position:'relative',
   zIndex:1000,
   top:10,
   left:10,
//    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
//     backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
     height:50,
     width:50,
    textAlign:'center',
    marginTop:'20px',
    marginBottom:'20px',
    display:'inline block'
   
   

  };
     async function archiveLink(){
         setLoading(true)
         const editLink  ={...link,archived:!link.archived}
       //  setLink(prevstate=>editLink)
     
        // console.log(editLink)
      // console.log(mylink)
        try {
            await fetch('./api/updateLink',{
                method:'PUT',
                body:JSON.stringify(editLink)
            })
           
            refreshLinks();
            setLoading(false)
            
        } catch (error) {
            console.error('no some error',error)
            
        }
        
    }

    async function deleteLink(){
        setLoading(true)
          const id =link._id
        try{
            await fetch('./api/deleteLink',{
                method:'DELETE',
                body:JSON.stringify({id})
            })
            refreshLinks();
            setLoading(false)
            
        } catch (error) {
            console.error('no some error',error)
            
        }

    }
    return (
        <>
      
        <div    className={`card h-auto   p-1 mb-2  ${link.archived ? "bg-danger": "bg-light"} `}>
           {loading && <div style={myStyle}>
            <div className="spinner-border text-primary" style={{width: '2rem', height: '2rem',marginTop:10}} role="status">
             <span className="sr-only">Loading...</span>
             </div>
             </div>}
            <div className="card-header   bg-dark"> {link.name}</div> 
        
        <div className="card-body h-75 ">
       
            <div className="d-flex p-md-1   ">
            <div className="w-50 border-right  "><a href={link.url}>{link.url}</a>   </div> 
           <div className=" w-50  text-secondary p-1 overlflow-auto"> <p>{link.description}</p>  </div>
            
            </div>
          
        </div>
        <div className="card-footer px-md-1 ">
        <button className="btn btn-warning mr-md-3 p-md-2 shadow" onClick={archiveLink}>{!link.archived?'Archive':'Unarchive'}</button>
            <button className="btn btn-danger   shadow" onClick={deleteLink}>Delete</button>
        </div>
            
        </div>
        </>
    )
}
