import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Shop() {
  return (
    <main>
      {/* header section */}
        <section>
         <div className="bg-gray-100 px-5 sm:px-10 md:px-12 lg:px-20 pt-5 pb-5">
            <Button className="mx-2 md:mx-4 
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
            Previous</Button>
            <Button className="mx-2 md:mx-4
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
                1</Button>
            <Button className="mx-2 md:mx-4
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
                2</Button>
            <Button className="mx-2 md:mx-4
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
                3</Button>
            <Button className="mx-2 md:mx-4
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
                4</Button>
            <Button className="mx-2 md:mx-4
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
                5</Button>
            <Button className="mx-2 md:mx-4
            h-5 sm:h-7 md:h-8 lg:h-10
            px-3 sm:px-5 md:px-5 lg:px-8">
                Next</Button>
            
         </div>
        </section>
      

      
          {/* New Arrivals  */}
              <section>
                  <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-14
                                 px-5 sm:px-8 md:px-10 lg:px-14">
                      <h2 className="text-center font-bold
                              sm:text-xl md:text-2xl lg:text-4xl
                              ">NEW ARRIVALS</h2>
                              <h2 className="font-bold
                              sm:text-lg md:text-lg lg:text-2xl
                              ">PARTY WEAR</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-10 pt-10">
                      <div>
                        <Image src="/p-1.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div>  
                        <Image src="/p-2.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/p-3.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/p-2.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/p-5.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>


                      <Button className="bg-transparent border-2 text-black
                            font-semibold hover:text-white">
                        View All</Button>
                  </div>
              </section>

              {/* Summer  */}
                <section>
                  <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-14
                                 px-5 sm:px-8 md:px-10 lg:px-14">
                      <h2 className="text-center font-bold
                              sm:text-xl md:text-2xl lg:text-4xl
                              ">TOP SELLING</h2>
                              <h2 className="font-bold
                              sm:text-lg md:text-lg lg:text-2xl
                              ">SUMMER COLLECTION</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-10 pt-10">
                      <div>
                        <Image src="/s-1.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div>  
                        <Image src="/s-2.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/s-3.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-4.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-5.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-6.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">  
                        <Image src="/s-7.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/s-8.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-9.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-10.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-11.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">  
                        <Image src="/s-12.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/s-13.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-14.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/s-15.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>


                      <Button className="bg-transparent border-2 text-black
                            font-semibold hover:text-white">
                        View All</Button>
                  </div>
              </section>

              {/* Winter  */}
              <section>
                  <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-14
                                 px-5 sm:px-8 md:px-10 lg:px-14">
                      <h2 className="text-center font-bold
                              sm:text-xl md:text-2xl lg:text-4xl
                              ">SEASONAL SELLING</h2>
                              <h2 className="font-bold
                              sm:text-lg md:text-lg lg:text-2xl
                              ">WINTER COLLECTION</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-10 pt-10">
                      <div>
                        <Image src="/w-1.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div>  
                        <Image src="/w-2.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/w-3.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-4.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-5.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-6.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">  
                        <Image src="/w-7.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/w-8.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-9.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-10.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-11.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">  
                        <Image src="/w-12.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div> 

                      <div className="hidden md:block"> 
                        <Image src="/w-13.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-14.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>

                      <div className="hidden md:block">
                        <Image src="/w-15.jpg" alt="clothes" width={200} height={500}/>
                        <h3>Couple Summer Special</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating" width={150} height={20} />
                      </div>


                      <Button className="bg-transparent border-2 text-black
                            font-semibold hover:text-white mb-5">
                        View All</Button>
                  </div>
              </section>

                  {/* Update */}
                  <section>
                    <div className="md:flex justify-between text-center md:text-left
                     bg-black px-5 md:px-40 pt-5 md:pt-10 pb-10 md:pb-10">
                        <div>
                        <h1 className="text-white pb-5 md:pb-0
                          font-bold text-2xl md:text-4xl">
                          STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                          <Button className="bg-white text-black hover:text-white hover:border-2">Enter your email address</Button>
                          <Button className="bg-white text-black hover:text-white hover:border-2">Subscribe to Newsletter</Button>
                        </div>
                    
                    </div>
                  </section>
    </main>
  );
}
