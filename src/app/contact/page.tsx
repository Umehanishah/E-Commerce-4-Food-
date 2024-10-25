import Image from "next/image";

export default function About() {
  return (
    <main className="title">
      <div className="bg-[url('/contact-1.png')] h-screen">
     
      <h1 className="text-8xl font-serif font-bold text-left px-20 pt-60 text-white">Get in Touch</h1>
      <p className="text-sm font-semibold text-left px-20 pt-5 text-white">The most important thing for us is to give you the comfortable dining experience</p>
      
     </div>

      {/* 2nd Section */}
  <section>
       <div className="grid grid-cols-2 gap-5 m-20">
       <div className="bg-[url('/contact-2.png')] bg-no-repeat bg-right-top bg-[length:150px_150px]">
        <Image width={500} height={400} src="/contact-3.png" alt="food" className="pt-20"/>
        </div>

         <div>
          <p className="text-sm pt-60 pr-44 px-40 font-semibold text-black">We can be Contacted via email <span className="text-lime-600">info@foodzero.com</span> or telephone on <span className="text-lime-600">+86 852 346 000</span></p>
          </div>
        
          </div>
           </section>

      {/* 3rd Section */}
      <section>
       <div className="grid grid-cols-2 gap-5 m-20">
      
         <div>
          <p className="text-sm pt-80 pr-20 px-20 font-semibold text-black">We are located in 1959 Sepulvda Blvd. Culver City, CA, 90230.</p>
          <div className="px-20 pt-10">
        <button type="button" className="py-2.5 px-10 me-4 mb-4 text-sm font-medium text-black bg-transparent items-center focus:outline-none rounded-none border border-black hover:bg-lime-200 hover:text-lime-950">View in maps</button>
        </div>
          </div>

      <div>
        <Image width={500} height={400} src="/contact-4.png" alt="food" className="pt-20"/>
        </div>

          </div>
           </section>

     

          {/* 6th Section */}
          <div className="bg-lime-50">
    <div className="h-auto max-w-full rounded-lg bg-[url('/contact-5.png')] bg-no-repeat bg-center-top bg-[length:250px_200px]">
   <h1 className="font-bold font-serif text-center pt-20 text-lime-950 text-6xl">Make a Reservation</h1>
   <p className="text-lg text-black text-center mt-2">
            Get in touch with resturant</p>
    </div>
  
    <div className="grid md:grid-cols-2 px-40 pt-20  gap-10">
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">First Name</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left  font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">Last Name</button>
    </div>

    <div className="grid md:grid-row-2 px-40 pt-5 gap-10">
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left  font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">Email</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left  font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">Phone</button>
    </div>

    <div className="grid md:grid-cols-2 px-40 pt-5 gap-10">
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left  font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">16/22/2021</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left  font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">6:00 pm</button>
    </div>

    <div className="grid md:grid-cols-1 px-40 pt-5 pb-20 gap-10">
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm text-left  font-medium text-black focus:outline-none rounded-none border border-black hover:bg-lime-800 hover:text-white">2 Person</button>
     </div>
     
     <div className="px-96">
    <button type="button" className="py-2.5 px-60 me-4 mb-10 text-sm  font-medium text-white bg-lime-950 items-center focus:outline-none rounded-none border border-black hover:bg-lime-200 hover:text-lime-950">Book</button>
    </div>
    
    </div>

           </main>
  );
}