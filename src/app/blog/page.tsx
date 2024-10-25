import Image from "next/image";

export default function Home() {
  return (
    <main className="title">
       <div className="bg-[url('/blog-1.png')] h-screen">
          <h1 className="text-6xl font-serif font-bold text-center text-white pt-60 px-20">Blogs - Two Columns</h1>
          <p className="text-sm font-semibold text-white text-center pt-5 px-20">It is easy way to creatr your beautiful blog for daily</p>
          </div>

    {/* 1st Section*/}
    <div className="pt-20 px-40">
    <a href="/" className="text-gray-400 visited:text-gray-600 text-sm">Home / </a>
    <a href="/blog" className="text-gray-400 visited:text-gray-600 text-sm">Blog / </a>
    <a href="/blog.two.columns" className="text-gray-800 visited:text-gray-900 text-sm">Blog Two Columns </a>
    </div>
    <div className="grid md:grid-cols-2 px-20 pt-10 pb-28 gap-10 bg-white">
    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20 w-96 h-96">
        <Image width={800} height={800} src="/blog-2.png" alt="Fish"/></div>
    <div className="flex px-20 pt-10">
        <Image width={50} height={50} src="/blog-3.png" alt="Fish"/>
        <p className="text-xs text-lime-700 text-center mt-2">
            Julie Christie * October 17,2021 * 3:33 pm * 2 comments</p>
            </div>
   <h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
   protection against diseases</h1>
   <p className="px-20">............................................................................................................</p>
   <p className="text-sm text-black text-left px-20 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    
    <p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
            Read More <Image width={20} height={10} src="/arrow-2.png" alt="arrow"/> </p>
    </div>

    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20 w-96 h-96">
        <Image width={800} height={800} src="/blog-4.png" alt="Fish"/></div>
    <div className="flex px-20 pt-10">
        <Image width={50} height={50} src="/blog-5.png" alt="Fish"/>
        <p className="text-xs text-lime-700 text-center mt-2">
            Julie Christie / October 17,2021 / 3:33 pm / 2 comments</p>
            </div>
   <h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
   protection against diseases</h1>
   <p className="px-20">............................................................................................................</p>
   <p className="text-sm text-black text-left px-20 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    
    <p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
    Read More <Image width={20} height={10} src="/arrow-2.png" alt="arrow"/></p>
    </div>


    </div>

        {/* 2nd Section*/}
        <div>

        </div>
    <div className="grid md:grid-cols-2 px-20 pt-10 pb-28 gap-10 bg-white">
    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20 w-96 h-96">
        <Image width={800} height={800} src="/blog-6.png" alt="Fish"/></div>
    <div className="flex px-20 pt-10">
        <Image width={50} height={50} src="/blog-7.png" alt="Fish"/>
        <p className="text-xs text-lime-700 text-center mt-2">
            Julie Christie / October 17,2021 / 3:33 pm / 2 comments</p>
            </div>
   <h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
   protection against diseases</h1>
   <p className="px-20">............................................................................................................</p>
   <p className="text-sm text-black text-left px-20 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    
    <p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
    Read More <Image width={20} height={10} src="/arrow-2.png" alt="arrow"/> </p>
    </div>

    <div className="h-auto max-w-full rounded-lg">
    <div className="ml-20 w-96 h-96">
        <Image width={800} height={800} src="/blog-8.png" alt="Fish"/></div>
    <div className="flex px-20 pt-10">
        <Image width={50} height={50} src="/blog-9.png" alt="Fish"/>
        <p className="text-xs text-lime-700 text-center mt-2">
            Julie Christie / October 17,2021 / 3:33 pm / 2 comments</p>
            </div>
   <h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
   protection against diseases</h1>
   <p className="px-20">............................................................................................................</p>
   <p className="text-sm text-black text-left px-20 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
    
    <p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
    Read More <Image width={20} height={10} src="/arrow-2.png" alt="arrow"/></p>
    </div>
    </div>

    {/* 3rd Section*/}
    <div>

</div>
<div className="grid md:grid-cols-2 px-20 pt-10 pb-28 gap-10 bg-white">
<div className="h-auto max-w-full rounded-lg">
<div className="ml-20 w-96 h-96">
<Image width={800} height={800} src="/blog-10.png" alt="Fish"/></div>
<div className="flex px-20 pt-10">
<Image width={50} height={50} src="/blog-11.png" alt="Fish"/>
<p className="text-xs text-lime-700 text-center mt-2">
    Julie Christie / October 17,2021 / 3:33 pm / 2 comments</p>
    </div>
<h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
protection against diseases</h1>
<p className="px-20">............................................................................................................</p>
<p className="text-sm text-black text-left px-20 mt-2">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>

<p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
Read More <Image width={20} height={10} src="/arrow-2.png" alt="arrow"/> </p>
</div>

<div className="h-auto max-w-full rounded-lg">
<div className="ml-20 w-96 h-96">
<Image width={800} height={800} src="/blog-12.png" alt="Fish"/></div>
<div className="flex px-20 pt-10">
<Image width={50} height={50} src="/blog-13.png" alt="Fish"/>
<p className="text-xs text-lime-700 text-center mt-2">
    Julie Christie / October 17,2021 / 3:33 pm / 2 comments</p>
    </div>
<h1 className="font-medium font-serif px-20 text-left mt-5 text-lime-950 text-2xl">Fruit and vegetables and <br></br>
protection against diseases</h1>
<p className="px-20">............................................................................................................</p>
<p className="text-sm text-black text-left px-20 mt-2">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>

<p className="flex gap-2 text-sm text-black px-20 text-left mt-5">
Read More <Image width={20} height={10} src="/arrow-2.png" alt="arrow"/> </p>
</div>
</div>

    {/* 4th Section*/}
    <div className="h-auto max-w-full rounded-lg">
    <div className="text-center pb-10">
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-lime-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-lime-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">2</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-lime-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">3</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-lime-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">4</button>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-lime-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next</button>
    
    </div>
    </div>
  
     </main>
  );
}