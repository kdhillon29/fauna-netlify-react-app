import React, { useState } from 'react';

const LinkForm = ({refreshLinks,toggleAddForm}) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false)

      function resetForm(){
          setName('');
          setUrl('');
          setDescription('');
          console.log('in reset form')
      }

    async function  handleSubmit(e){
       e.preventDefault();
       setLoading(true)
       const link={name,url,description}
       console.log(link)
        try{
           const res = await fetch('/.netlify/functions/createLink',{
                method:'POST',
                body:JSON.stringify(link)
            });
            setLoading(false);
            resetForm();
            toggleAddForm()
            refreshLinks();
        }

        catch(err){console.log(err)}
      // console.log('handle Submit')
   }
    return ( 

        <div>
            <div className="card bg-secondary w-50 mx-auto mb-3">
                <div className="card-header bg-primary text-center">
                    <h3>Add Link  </h3>
              
                    </div>

                <div className="card-body">
              { loading&&  <div className="spinner-border text-success ml-5 "
                style={{width: '3rem', height: '3rem'}} role="status">
             <span className="sr-only  ">Loading...</span>
             </div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                           <label htmlFor="name"> Name </label>
                           <input type="text" name="name" value={name} className="form-control"
                           onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="url"> Url </label>
                           <input type="text" name="url" value={url} className="form-control"
                           onChange={e=>setUrl(e.target.value)}/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="description"> Description </label>
                           <input type="text" name="desscription" value={description} className="form-control"
                           onChange={e=>setDescription(e.target.value)}/>
                        </div>

                        <button className="btn btn-success" type="submit">Submit</button>
                        </form>
                </div>

           

            </div>
         


        </div>



     );
}

export default LinkForm;