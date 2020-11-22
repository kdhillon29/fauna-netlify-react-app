exports.handler= async (ev,context,callback)=>{

    return {
        statusCode:200,
        body:JSON.stringify({msg:"hello world"}),
    };

};