import Link from "next/link"

function footer(){
    return(
        <footer className="flex justify-between">
            
        <div className="bg-lime-950 pt-20 pb-20  text-white">
   
        <div className="grid md:grid-cols-3 gap-60">
        <div className="flex gap-20">
        <h3 className="text-4xl px-20">Food <br></br> Zero. </h3>

        <p>Contact<br></br>
        +1+86 852 346 000<br></br>  
        info@foodzero.com <br></br>
        <br></br>
        Contact<br></br>
        +1+86 852 346 000<br></br>
        info@foodzero.com</p>
        </div>    
    
    <div className="">
    <h3 className="text-2xl font-semibold">Never Miss a Recipe </h3>
    
    <div className="grid md:grid-cols-3 px-5 pt-10 pb-5 gap-96 ">
    <button type="button" className="py-3 px-40 mb-1 text-sm text-gray-300 focus:outline-none rounded-none border border-white hover:text-white">Email</button>
    <button type="button" className="py-3 px-20 mb-1 text-sm text-gray-300 focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">Subscribe</button> 
    </div>
      
    <div className="text-xs pl-10 pb-10">  
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, nihil non. Quia vel </p>  
    </div>
    </div>    
      </div>

    <p>......................................................................................................................................................................................................................................................................................................................................................................</p>

<div className="m-10">
<p> @2020 Zero Inc.All rights Reserved</p>
</div>


</div>

        </footer>
    )
}
export default footer