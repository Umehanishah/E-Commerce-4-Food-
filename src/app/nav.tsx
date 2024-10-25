

function Nav(){
    return(
        <nav className="flex justify-between bg-lime-950">
            
            <div>
                <h2 className="text-lg md:text-3xl font-serif mx-3 md:mx-5 mt-5 md:mt-10 ml-5 md:ml-10 font-semibold text-white">FOOD ZERO</h2>
            </div>

            <div className="max-w-lg mx-auto pt-5 md:pt-10 text-center">
                <details className="open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-2 md:p-6 rounded-sm md:rounded-lg">
            <summary className="text-sm leading-2 md:leading-6 text-white px-20 md:px-80 dark:text-white font-semibold select-none">
                Navigation
            </summary>
            <div className="mt-2 md:mt-3 text-xs md:text-base leading-6 md:leading-8 text-slate-600 dark:text-slate-400">
            <ul className="flex-1 gap-x-3 md:gap-x-10 mr-3 md:mr-10 mt-3 md:mt-5 my-3 md:my-10 text-white font-serif font-medium md:font-semibold">
                        
                        <li>
                        <a href="/" className="hover:bg-lime-800 hover:px-20 md:hover:px-40 pt-1 md:pt-2 pb-1 md:pb-2 hover:rounded-sm">HOME</a>
                        </li>
                        <hr></hr>
                        <li>
                         <a href="/about" className="hover:bg-lime-800 hover:px-20 md:hover:px-40 pt-1 md:pt-2 pb-1 md:pb-2 hover:rounded-sm">ABOUT</a>
                         </li>
                         <hr></hr>
                        <li>
                        <a href="/menu" className="hover:bg-lime-800 hover:px-20 md:hover:px-40 pt-1 md:pt-2 pb-1 md:pb-2 hover:rounded-sm">MENU</a>
                        </li>
                        <hr></hr>
                        <li>
                        <a href="/blog" className="hover:bg-lime-800 hover:px-20 md:hover:px-40 pt-1 md:pt-2 pb-1 md:pb-2 hover:rounded-sm">BLOG</a>
                        </li>
                        <hr></hr>
                        <li>
                        <a href="/contact" className="hover:bg-lime-800 hover:px-20 md:hover:px-40 pt-1 md:pt-2 pb-1 md:pb-2 hover:rounded-sm">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </details>
            </div>


            <div>
                <ul className="flex gap-x-3 md:gap-x-10 mt-3 md:mt-10 mx-3 md:mx-20 text-white font-serif font-medium md:font-semibold">
                        <li>
                        <a href="/"><button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-lime-950"> +86 852 346 000</button> </a>
                        </li>
                        <li>
                        <a href="/"><button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-none border border-white hover:bg-gray-100 hover:text-lime-950">Alternative</button></a>
                        </li>
                    </ul>                    
              
            </div>
           

        
            </nav>
    )
}
export default Nav;