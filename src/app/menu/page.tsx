import Image from "next/image"
export default function About() {
  return (
    <main className="title">
       <div className="bg-[url('/menu-1.png')] h-screen">
          <h1 className="text-8xl font-serif font-bold text-white pt-28 px-20">View Our<br></br> New Menu</h1>
          <p className="text-sm font-semibold text-white pt-5 px-20">The freshest ingredients for you every day</p>
          </div>
           
{/* 2nd Section */}
    <section className="">
  <div className="">
          <h1 className="text-6xl text-center pt-32 pb-5 px-10 font-serif font-bold text-lime-950 bg-[url('/menu-2.png')] bg-no-repeat bg-right-top bg-[length:300px_200px] ">Starters</h1>
          <p className="text-sm text-center px-10   text-black ">This is a section of your menu, Give your section a brief description.</p>
          </div>

       <div className=" grid grid-cols-2 gap-10 m-10">
          <div className="">
           <Image width={500} height={400} src="/menu-3.png" alt="food" />
          </div>
          <div>
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$20</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Grilled Okra and Tomatoes</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
         
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$18</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Grilled Okra and Tomatoes</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
          
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$12</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Basil Pancakes</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
          
          </div>
          </div>
           </section>

      {/* 3rd Section */}

    <section className="m-10">
         <div className="pt-10">
           <h1 className="text-6xl text-center px-10 font-serif font-bold text-lime-950">Mains</h1>
          <p className="text-sm text-center px-10 pt-5  text-black ">This is a section of your menu, Give your section a brief description.</p>
          </div>

       <div className=" grid grid-cols-2 gap-10 m-10">
          <div>
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$20</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Deep Sea Snow White Cod Fillet</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
         
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$18</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Steak With Rosemary Butter</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
          
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$12</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Steaks With Grilled Kimchi</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
          </div>

          <div className="">
           <Image width={500} height={400} src="/menu-4.png" alt="food" />
          </div>

          </div>
           </section>


    {/* 4th Section */}
    <section className="m-10">
         <div className="text-center pt-20 bg-[url('/menu-5.png')] bg-no-repeat bg-center bg-[length:200px_200px]">
         <h1 className="text-6xl text-center px-10 font-serif font-bold text-lime-950  ">Pastries & Drinks</h1>
          <p className="text-sm text-center px-10 pt-5 pb-10 text-black ">This is a section of your menu, Give your section a brief description.</p>
          </div>

       <div className=" grid grid-cols-2 gap-10 m-10">
          <div className="pb-5">
           <Image width={500} height={400} src="/menu-6.png" alt="food" />
          </div>
          <div>
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$158</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Wine Pairing</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
         
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$168</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Natural Wine Pairing</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
          
          <p className="text-base font-semibold text-right px-10 pt-5 pr-5 text-black ">$90</p>
          <p className="text-sm font-semibold text-right px-10 pr-5 text-black ">................................................................................................................................................</p> 
          <h2 className="text-4xl text-left px-10 font-serif font-bold pt-5 text-lime-950">Whisky Flyer</h2>
          <p className="text-sm text-left px-10 pt-5 pr-5 text-black ">This is a section of your menu, Give your section a brief description.</p>
          
          </div>
          </div>
           </section>

      {/* 5th Section */}
   <div className="bg-lime-50">
    <div className="h-auto max-w-full rounded-lg">
   <h1 className="font-bold font-serif text-center pt-20 text-lime-950 text-6xl">Make a Reservation</h1>
   <p className="text-lg text-black text-center mt-2">
            Get in touch with resturant</p>
    </div>
  
    <div className="grid md:grid-cols-3 px-40 pt-20 pb-20 gap-10">
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">16/22/2021</button>
                       
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">6:00 pm</button>
     
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">2 Person</button>
     <div className="px-96">
    <button type="button" className="py-2.5 px-10 me-4 mb-4 text-sm font-medium text-white bg-lime-950 items-center focus:outline-none rounded-none border border-black hover:bg-lime-200 hover:text-lime-950">Book</button>
    </div>
    
    </div>
    </div>
   
           </main>
  );
}