export function SignUpComponent(){
    return(
        <div className="container-fluid form-validate mt-3 text-center p-3 text-white">
            <p>Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div id='inp-div' className="input-group">
            <input type="email" id='inp' placeholder="Email address"  className="form-control h-5 imp"></input>   
            <button className="btn btn-danger">Register </button> 
            </div>
   
 </div>
        )
}