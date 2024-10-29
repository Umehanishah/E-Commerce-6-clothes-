import Link from "next/link";
import {Menu} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Header() {
  return (
    <main>
        
        {/* headline */}
            <section>
                <div className="bg-black text-white text-center
                font-thin font-sans text-xs sm:text-sm md:text-sm xl:text:base
                pt-1 pb-1 sm:pt-1 sm:pb-1 md:pt-2 md:pb-2 xl:pt-2 xl:pb-2">
                    <p>Sign up and get 20% off to your first order: 
                    <Link href="/sign.up"> Sign Up Here</Link>
                    </p>
                </div>
            </section>
        
        {/* Navigation bar */}
            <section>
                <div className="flex justify-between max-w-screen-2xl mx-auto
                                px-5 sm:px-5 md:px-10 xl:px-10
                                pt-2 sm:pt-3 md:pt-5 xl:pt-5
                                pt-b sm:pb-3 md:pb-5 xl:pb-5">
                        <div className="text-xl sm:text-xl md:text-3xl lg:text-4xl
                                        font-semibold sm:font-bold md:font-extrabold xl:font-extrabold
                                        font-sans">
                            <h2><Link href="/">SHOP.CO</Link></h2>
                        </div>

                {/* nav */}

                <ul className="hidden lg:block">
                <li className="space-x-10 text:sm lg:text-base xl:text-xl 
                            font-light pt-2">
                    <Link href="/shop" className="hover:bg-gray-100 hover:p-5">Shop</Link>
                    <Link href="/sale" className="hover:bg-gray-100 hover:p-5">On Sale</Link>
                    <Link href="/arrivals" className="hover:bg-gray-100 hover:p-5">New Arrivals</Link>
                    <Link href="/brands" className="hover:bg-gray-100 hover:p-5">Brands</Link>
                </li>
           </ul>

           {/* Search box */}
           <div>
                <form className="hidden lg:block max-w-md mx-auto">   
                <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search..." required />
                    </div>
                    </form>
                    </div>
                
                {/* icons */}

                    <div className="lg:flex hidden  gap-5 md:gap-8 lg:gap-10 pl-5 sm:pl-5 md:pl-10 xl:pl-10">
                    <svg xmlns="/cart" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <svg xmlns="/login" viewBox="0 0 448 512" className="file: mt-4 h-6 w-6">
                    <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                    </svg>
                     </div>

           <Sheet>
            <SheetTrigger className="lg:hidden">
            <Menu/>
            </SheetTrigger>
            <SheetContent>
            <div className="pt-10">
                <form className="max-w-md mx-auto">   
                <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search..." required />
                    </div>
                    </form>
                    </div>

                    <div className="flex gap-5 md:gap-8 lg:gap-10">
                    <svg xmlns="/cart" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <svg xmlns="/login" viewBox="0 0 448 512" className="file: mt-4 h-6 w-6">
                    <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                    </svg>
                     </div>


                        <ul className="pt-10">
                            <li className="flex flex-col space-x-5 text-base
                                    hover:bg-gray-100 hover:pt-3 hover:pb-3 hover:px-3">            
                                <Link href="/shop">Shop</Link></li>
                            <li className="text-base pt-5
                                    hover:bg-gray-100 hover:pt-3 hover:pb-3 hover:px-3">
                                <Link href="/sale">On Sale</Link></li>
                            <li className="text-base pt-5
                                    hover:bg-gray-100 hover:pt-3 hover:pb-3 hover:px-3">
                                <Link href="/arrivals">New Arrival</Link></li>
                            <li className="text-base pt-5
                                    hover:bg-gray-100 hover:pt-3 hover:pb-3 hover:px-3">
                                <Link href="/brands">Brands</Link>
                            </li>
                    </ul>

                    
                
            </SheetContent>
            </Sheet>
                
            
            
                </div>
            </section>

    </main>
  );

}