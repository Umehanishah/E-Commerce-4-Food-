import Image from "next/image";

export default function About() {
  return (
    <main className="title">
      <div className="bg-[url('/about-1.png')] h-screen">
      <h1 className="text-8xl font-serif font-bold text-right px-40 pt-60 text-white">Who We Are</h1>
      <p className="text-sm font-semibold text-right px-40 pt-5 text-white">The most important thing for us is to give you the comfortable dining experience</p>
     </div>

      {/* 2nd Section */}
  <section>
       <div className="grid grid-cols-2 gap-1 m-20">
         <div className="bg-[url('/about-9.png')] bg-no-repeat bg-right-top bg-[length:150px_150px]">
          <h1 className="text-6xl font-serif font-bold pt-20 text-lime-950">Our Story</h1>
          <p className="text-sm pt-5 pr-5 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio, quia cupiditate amet iste enim autem libero, et eaque minus odit porro nisi perferendis provident, vel repudiandae placeat officia quasi.</p>
          </div>
          <div>

          <Image width={500} height={400} src="/about-2.png" alt="food"/>
          </div>
          </div>
           </section>

      {/* 3rd Section */}
        
  <section>
       <div className="grid grid-cols-2 gap-10 m-10">
       
       <div className="text-center">
       <h2 className="text-4xl font-serif font-semibold pt-10">Resturent Manager</h2>
       <p className="text-sm font-medium pt-5 pb-5">Carson Hugn</p>
          <Image width={500} height={400} src="/about-3.png" alt="manager"/>
          <p className="text-sm  pt-80 pb-10 pl-28 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga doloremque corporis porro veritatis quis laborum. Dolores perferendis, a tempora, iure neque aperiam eveniet nostrum consequatur vitae assumenda nemo. Animi?</p>

          </div>

         <div className="text-center">
          <p className="text-sm pb-28 text-left pr-28 text-black pt-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio, quia cupiditate amet iste enim autem libero, et eaque minus odit porro nisi perferendis provident, vel repudiandae placeat officia quasi.</p>
          <h2 className="text-4xl font-serif font-semibold pt-10">Executive Chef</h2>
          <p className="text-sm font-medium pt-5 pb-5">Carson Hugn</p>
          <Image width={500} height={400} src="/about-4.png" alt="manager"/>
          </div>
          
          </div>
           </section>

    {/* 4th Section */}
      <section>
        <div className="bg-[url('/about-5.png')] h-screen">
         <div className="bg-[url('/about-5.1.png')] h-screen">
          <h2 className="text-5xl font-semibold text-white font-serif text-center pt-40">It Looks delicious</h2>
          <p className="text-sm text-white text-center pt-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="pt-10 mx-60 px-80">
          <Image width={100} height={100} src="/about-5.2.png" alt="food"/>
          </div>
          </div>
         </div>
      </section>

      {/* 5th Section */}
       <section>
       <h1 className="text-6xl font-serif font-semibold pt-40 pb-20 text-center text-lime-950 bg-[url('/about-11.png')] bg-no-repeat bg-right-top bg-[length:400px_300px]">Sophisticated Process</h1>
        
       <div className="grid grid-cols-2 gap-10 m-10">
       <div>
          <Image width={500} height={400} src="/about-6.png" alt="food"/>
          
          <h1 className="text-6xl font-serif font-bold pt-60 text-lime-950"><span className="text-4xl">03.</span> Bake</h1>
          <p className="text-sm pt-5 pr-10 pb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio, quia cupiditate amet iste enim autem libero, et eaque minus odit porro nisi perferendis provident, vel repudiandae placeat officia quasi.</p>
           
          <Image width={500} height={400} src="/about-8.png" alt="food"/>
          <Image width={200} height={200} src="/about-10.png" alt="food"/>
          
          </div>

         <div>
          <h1 className="text-6xl font-serif font-bold pt-20 text-lime-950"><span className="text-4xl">01.</span> Slice</h1>
          <p className="text-sm pt-5 pr-10 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio, quia cupiditate amet iste enim autem libero, et eaque minus odit porro nisi perferendis provident, vel repudiandae placeat officia quasi.</p>
          
          <Image width={500} height={400} src="/about-7.png" alt="food" className="pt-60"/>
          
          <h1 className="text-6xl font-serif font-bold pt-10 text-lime-950"><span className="text-4xl">02.</span> Pickled</h1>
          <p className="text-sm pt-5 pr-10 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio, quia cupiditate amet iste enim autem libero, et eaque minus odit porro nisi perferendis provident, vel repudiandae placeat officia quasi.</p>
          </div>
          </div>
           </section>

          {/* 6th Section */}
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