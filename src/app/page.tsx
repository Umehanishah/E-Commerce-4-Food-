import Image from "next/image"
export default function Home() {
  return (
    <main className="title">
      {/* Hero Section */}
      <section className="flex gap-2 items-center w-full bg-lime-950 ">
        {/* Left side */}
        <div className="flex-1 px-3 md:px-10 pt-3 md:pt-20">
          <h1 className="font-semibold md:font-bold mb-2 tracking-widest leading-none font-serif text-white text-3xl md:text-6xl">Healthy Eating is important part of lifestyle</h1>
          <p className="text-xs text-white pt-3 md:pt-5 pb-3 md:pb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptatum voluptatibus doloremque facilis alias error iste 
            fugiat tenetur, impedit nulla eius dolore officia officiis. 
          </p>
          <div className="text-white pb-10 md:pb-40">
          <Image width={40} height={100} src="/scroll.png" alt="food" />
          </div>
          <Image width={500} height={400} src="/img-2.png" alt="food" className="w-full rounded-md" />
         
         <p className="font-medium md:font-bold font-serif text-white pt-3 md:pt-10 text-xl md:text-2xl">Start to plan<br></br> your diet today</p>
         <p className="text-xs md:text-lg text-white pt-2 pb-20 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptatum voluptatibus doloremque facilis alias error iste 
            fugiat tenetur.
          </p>
           </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex-1 px-3 md:px-10">
          <Image width={792} height={931} src="/img-1.png" alt="food" className="w-full rounded-lg"/>
          </div>
          <div className="flex gap-2 items-center -mt-10 my-40">
          <Image width={150} height={150} src="/spices1.png" alt="food" />
          <Image width={150} height={150} src="/spices2.png" alt="food" />
          <Image width={150} height={150} src="/spices3.png" alt="food" />
          </div>
          
          <div className="pr-3 md:pr-10 -mt-5 md:-mt-20">
          <p className="text-3 md:text-10 text-white text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptatum voluptatibus doloremque facilis alias error iste 
            fugiat tenetur.
          </p>
          </div>
          <div className="pt-3 md:pt-10 pb-3 md:pb-10 px-10 md:px-40">
           <Image width={250} height={500} src="/img-3.png" alt="food" />
           </div>
        </div>
      </section>

      {/*2nd section*/}

      <section className=" bg-white bg-[url('/img-4.jpg')] bg-no-repeat bg-right-top bg-[length:400px_300px]">
         
      <h1 className="font-bold font-serif text-lime-950 pt-20 md:pt-40 px-3 md:px-10 text-2xl md:text-4xl">Our Menu</h1>
    <p className="text-xs md:text-base text-black-90 pt-2 px-3 md:px-10">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Voluptatum voluptatibus doloremque facilis alias error iste 
      fugiat tenetur.
     </p>
     
     
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 pt-10">
    <div className="h-auto max-w-full rounded-lg">
      
     <div className="pt-5 md:pt-10">
          <p className="text-gray-500 px-96">$20</p>
          <hr className="w-96 h-1 bg-gray-200 md:my-1"></hr>
          <h1 className="font-semibold md:font-bold font-serif mt-5 text-lime-950 text-xl md:text-2xl">Deep Sea Snow White COd Fillet</h1>
          <p className="text-xs md:text-sm text-black mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>

          <div className="pt-5 md:pt-10">
          <p className="text-gray-500 px-96">$20</p>
          <hr className="w-96 h-1 bg-gray-200 md:my-1"></hr>
          <h1 className="font-semibold md:font-bold font-serif mt-5 text-lime-950 text-xl md:text-2xl">Deep Sea Snow White COd Fillet</h1>
          <p className="text-xs md:text-sm text-black mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>

          <div className="pt-5 md:pt-10">
          <p className="text-gray-500 px-96">$20</p>
          <hr className="w-96 h-1 bg-gray-200 md:my-1"></hr>
          <h1 className="font-semibold md:font-bold font-serif mt-5 text-lime-950 text-xl md:text-2xl">Deep Sea Snow White COd Fillet</h1>
          <p className="text-xs md:text-sm text-black mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>
          
          </div>

          <div className="h-auto max-w-full rounded-lg">
        
          <div className="pt-5 md:pt-10">
          <p className="text-gray-500 px-96">$20</p>
          <hr className="w-96 h-1 bg-gray-200 md:my-1"></hr>
          <h1 className="font-semibold md:font-bold font-serif mt-5 text-lime-950 text-xl md:text-2xl">Deep Sea Snow White COd Fillet</h1>
          <p className="text-xs md:text-sm text-black mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>

          <div className="pt-5 md:pt-10">
          <p className="text-gray-500 px-96">$20</p>
          <hr className="w-96 h-1 bg-gray-200 md:my-1"></hr>
          <h1 className="font-semibold md:font-bold font-serif mt-5 text-lime-950 text-xl md:text-2xl">Deep Sea Snow White COd Fillet</h1>
          <p className="text-xs md:text-sm text-black mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>

          <div className="pt-5 md:pt-10">
          <p className="text-gray-500 px-96">$20</p>
          <hr className="w-96 h-1 bg-gray-200 md:my-1"></hr>
          <h1 className="font-semibold md:font-bold font-serif mt-5 text-lime-950 text-xl md:text-2xl">Deep Sea Snow White COd Fillet</h1>
          <p className="text-xs md:text-sm text-black mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>
          

           </div>
           </div>
           </section>
      
      {/* 3rd section*/}
      <section className="flex items-center mt-20 bg-lime-50">
    {/* Left side */}
    <div className="pt-20 px-20">
    <div className="-mb-32">
           <Image width={300} height={300} src="/img-6.png" alt="food" />
           </div>
           <Image width={500} height={600} src="/img-5.png" alt="food" />
           </div>

        {/* Right Side */}
        <div className="flex-1 ">
          <div className="pt-1">
          <h1 className="font-bold font-serif mt-5 text-lime-950 text-5xl">Excellent <br></br> Cook</h1>
          <p className="text-sm text-black mt-2 mr-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
          </div>

          <div className="pt-5 px-36">
           <Image width={300} height={300} src="/img-6.png" alt="food" />
           </div>
           
           </div>
        </section>

        {/* 4th Section*/}
        
        <div className="grid md:grid-cols-3 px-40 pt-28 gap-10">
    <div className="h-auto max-w-full rounded-lg">
      <div className="ml-20">
        <Image width={100} height={100} src="/CircleIcon-1.png" alt="Fish">
   </Image></div>
   <h1 className="font-bold font-serif text-center mt-5 text-lime-950 text-2xl">Premium Quality</h1>
   <p className="text-sm text-black text-center mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem.</p>
    </div>
    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20">
        <Image width={100} height={100} src="/CircleIcon-2.png" alt="Carrot">
        </Image></div>
        
   <h1 className="font-bold font-serif text-center mt-5 text-lime-950 text-2xl">Premium Quality</h1>
   <p className="text-sm text-black text-center mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem.</p>
    </div>
    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20">
        <Image width={100} height={100} src="/CircleIcon-3.png" alt="Lemon">
        </Image></div>
        
   <h1 className="font-bold font-serif text-center mt-5 text-lime-950 text-2xl">Premium Quality</h1>
   <p className="text-sm text-black text-center mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem.</p>
    </div>
    </div>

    {/* 5th Section*/}
        
    <div className="grid md:grid-cols-2 px-20 pt-28 pb-28 gap-10 bg-white">
    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20 w-96 h-96">
        <Image width={800} height={800} src="/Feature Image-1.png" alt="Fish"></Image></div>
    <div className="flex px-20 pt-10">
        <Image width={50} height={50} src="/Avatar-1.png" alt="Fish"></Image>
        <p className="text-xs text-lime-700 text-center mt-2">
            Julie Christie * October 17,2021 * 3:33 pm * 2 comments</p>
            </div>
   <h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
   protection against diseases</h1>
   <p className="px-20">............................................................................................................</p>
   <p className="text-sm text-black text-left px-20 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    
    <p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
            Read More <img src="/arrow-2.png"></img> </p>
    </div>

    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20 w-96 h-96">
        <Image width={800} height={800} src="/Feature Image-2.png" alt="Fish"></Image></div>
    <div className="flex px-20 pt-10">
        <Image width={50} height={50} src="/Avatar-2.png" alt="Fish"></Image>
        <p className="text-xs text-lime-700 text-center mt-2">
            Julie Christie * October 17,2021 * 3:33 pm * 2 comments</p>
            </div>
   <h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
   protection against diseases</h1>
   <p className="px-20">............................................................................................................</p>
   <p className="text-sm text-black text-left px-20 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    
    <p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
            Read More <img src="/arrow-2.png"></img> </p>
    </div>


    </div>

    {/* 6th Section*/}
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
    <button type="button" className="py-2.5 px-10 me-4 mb-4 text-sm font-medium text-white bg-lime-950 items-center focus:outline-none rounded-none border border-black hover:bg-lime-200 hover:text-lime-950">16/22/2021</button>
    </div>
    
    </div>
    </div>
    
{/* 7th Section*/}
<div className="bg-white">
    <div className="h-auto max-w-full rounded-lg">
   <h1 className="font-bold font-serif text-center pt-20 text-lime-950 text-5xl">Calories Energy<br></br> Balance</h1>
   <p className="text-lg text-black text-center mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    </div>
   
    <div className="grid md:grid-cols-3 px-40 pt-20 gap-10">
    <Image width={300} height={400} src="/MenuCategory-1.png" alt="Starter"></Image>
                          
    <Image width={300} height={400} src="/MenuCategory-2.png" alt="mains"></Image>
       
    <Image width={300} height={400} src="/MenuCategory-3.png" alt="Soups"></Image>
    </div>
    </div>

    {/* 8th Section*/}
<div className="bg-white">
    <div className="h-auto max-w-full rounded-lg">
  <p className="text-base font-semibold text-black text-left pt-40 px-60">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias consequuntur, nemo nobis minus laboriosam soluta vel dolores rerum quia explicabo itaque, voluptate earum ipsa ipsum aliquam consectetur ex est reprehenderit.</p>
            
    </div>
    <div className="-mt-20 px-60 float-right">
            <Image object-right width={100} height={100} src="/img-7.png" alt="Starter"></Image>
            </div>
    </div>

    <div className="grid grid-cols-3 gap-1 ml-24 px-40 pt-20 pb-20">
    <div className="">
    <Image width={80} height={80} src="/Avatar-3.png" alt="Avater"></Image>
    </div>

    <div className="">
    <p className="text-lg font-semibold">John Doe</p>
    <p className="text-xs">Bloger</p>
    </div>

    <div className="">
    <Image width={80} height={80} src="/arrow.png" alt="Avater"></Image>
    </div>
    </div>
    </main>
  );
}