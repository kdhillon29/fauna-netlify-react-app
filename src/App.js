
import './App.css';
import React, { useEffect, useState } from 'react';
import Linkcard from './components/Linkcard';
import LinkForm from './components/LinkForm';

function App() {
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false)
  function toggleAddForm(){
    console.log('in toggle form')
    setShowForm(!showForm)
  }
  
    async function getLinks(){
      try {
        const res = await fetch('./.netlify/functions/getLinks')
     
        const links = await res.json()
        console.log(links);
        setLinks(links);
      } 
      catch (error) {
        console.error('there is error in app.js',error)
      }
    };
     function refreshLinks(){
      getLinks();
    }
   useEffect(() => {
     getLinks();
    
     return () => {
       
     }
   }, [])

  return (
    <div className="container  bg-dark text-light">
      {/* <div className="d-inline-flex p-2 m-2">
        <div className="m-2">sample text</div><div>sample text1</div>
        <div>sample text2</div>
      </div> */}
       {/* <Spinner animation="border" variant="primary" /> */}
     
      <header className=" py-3 mt-2 ">
        <h3 className="mt-2 text-center">List-o-Links</h3>
       
        {/* <ul className="list-group bg-dark mt-3 p-2 w-50 mx-auto">
          {links.map((link,index)=><li key={index} 
          className="list-group-item list-group-item-dark 
          list-group-item-action text-light font-weight-bold">{link.name}</li>) }
        </ul> */}

      </header>
       <div className="  mb-5 p-2">
           <button onClick={toggleAddForm}  className=" float-right  btn btn-success">Add Link</button>
       </div>
       {showForm && <LinkForm refreshLinks={refreshLinks} toggleAddForm={toggleAddForm}/>}
      <div className="container ">
        <div className="row"> 
         <div className="col-6" > 
         <h3 className="text-center"> Active Links </h3>
         {links.filter(link=>!link.archived).map((link,index)=><Linkcard key={index} link={link} refreshLinks={refreshLinks}/>)}
         </div>
         <div className="col-6 ml-n5 ml-md-0" >
         <h3 className="text-center" >Archived Links </h3>  
         {links.filter(link=>link.archived).map((link,index)=><Linkcard key={index} link={link} refreshLinks={refreshLinks}/>)}
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
