import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* header section */}
        <section>
          <div className="md:flex bg-gray-100">
              <div className="pt-5 sm:pt-10 md:pt-15 lg:pt-20 
                              px-5 sm:px-5 md:px-10 lg:px-10">
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl
                              font-bold sm:font-bold md:font-bold lg:font-bold">
                              FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="pt-5 sm:pt-5 md:pt-10 lg:pt-10
                            pb-5 sm:pb-5 md:pb-10 lg:pb-10 text-gray-600
                            text-xs sm:text-sm md:text-base lg:text-base
                            text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quasi vitae ratione culpa assumenda fuga recusandae mollitia tempora consequuntur voluptatibus fugit laudantium ad, eos maiores! Quod dolor perspiciatis saepe asperiores?</p>
                <Button>Shop Now</Button>
                <div className="flex gap-5">
                <p className="pt-5 sm:pt-5 md:pt-10 lg:pt-10
                            font-semibold text-center
                            text-base sm:text-base md:text-lg lg:text-xl">
                            200+ <br/>
                    <span className="text-sm sm:text-sm md:text-base lg:text-base
                            text-gray-400 font-light">
                            International Brands</span></p>
                
                            <p className="pt-5 sm:pt-5 md:pt-10 lg:pt-10
                            font-semibold text-center
                            text-base sm:text-base md:text-lg lg:text-xl">
                            2000+ <br/>
                    <span className="text-sm sm:text-sm md:text-base lg:text-base
                            text-gray-400 font-light">
                            High Quality Products</span></p>

                            <p className="pt-5 sm:pt-5 md:pt-10 lg:pt-10
                            font-semibold text-center
                            text-base sm:text-base md:text-lg lg:text-xl">
                            3000+ <br/>
                    <span className="text-sm sm:text-sm md:text-base lg:text-base
                            text-gray-400 font-light">
                            Happy Customers</span></p>
                            </div>
              </div>
              <div>
                <Image src="/img-1.png" alt="couple" width={1200} height={500}/>
              </div>
          </div>
        </section>
      

      {/* advertisment */}
          <section>
            <div className="flex justify-center md:gap-20 bg-black pt-5 pb-5 px-32">
              <Image src="/group-1.png" alt="brands" width={80} height={10} />
              <Image src="/group-2.png" alt="brands" width={80} height={10} />
              <Image src="/group-3.png" alt="brands" width={80} height={10} />
              <Image src="/group-4.png" alt="brands" width={80} height={10} />
              <Image src="/group-5.png" alt="brands" width={80} height={10} />
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

              {/* Browse */}
                <section>
                    <div className="bg-gray-100 md:pb-10">
                          <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-14
                                      px-5 sm:px-8 md:px-10 lg:px-14">
                            <h2 className="text-center font-bold
                                    sm:text-xl md:text-2xl lg:text-4xl
                                    ">BROWSE BY DRESS STYLE</h2>
                            </div>

                            <div className="md:flex gap-5 pt-10 px-20 md:pt-10 md:px-80">
                              <div>
                            <Image src="/z-1.jpg" alt="rating" width={300} height={500}/>
                            <Image src="/z-2.jpg" alt="rating" width={300} height={500} className="pt-5" />
                            </div>
                            <div>
                            <Image src="/z-3.jpg" alt="rating" width={300} height={500} className="pt-5 md:pt-0" />
                            <Image src="/z-4.jpg" alt="rating" width={300} height={500} className="pt-5" />
                            </div>
                            </div>
                    </div>
                </section>


              {/* Customers */}
                  <section>
                      <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-14
                                      px-5 sm:px-8 md:px-10 lg:px-14">
                            <h2 className="text-center font-bold
                                    sm:text-xl md:text-2xl lg:text-4xl
                                    ">OUR HAPPY CUSTOMERS</h2>
                            </div>
                          <div className="md:flex md:gap-5 px-5 pt-5 md:pt-10
                                  pb-5 sm:pb-8 md:pb-10 lg:pb-14">
                          
                          <div className="bg-gray-100 p-5 rounded-lg">
                          <Image src="/group-6.png" alt="rating" width={150} height={20} />
                          <h3 className="text-base font-bold pt-5">Sarah M.</h3>
                          <p className="text-sm font-light text-gray-500 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                             accusantium ad laudantium maxime a laboriosam doloremque repellendus!
                              Ad eligendi architecto a quod culpa. Velit quos magnam possimus beatae fugiat!</p>
                          </div>
                            <br/>
                          <div className="bg-gray-100 p-5 rounded-lg">
                          <Image src="/group-6.png" alt="rating" width={150} height={20} />
                          <h3 className="text-base font-bold pt-5">Sarah M.</h3>
                          <p className="text-sm font-light text-gray-500 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                             accusantium ad laudantium maxime a laboriosam doloremque repellendus!
                              Ad eligendi architecto a quod culpa. Velit quos magnam possimus beatae fugiat!</p>
                          </div>
                          <br/>
                          <div className="bg-gray-100 p-5 rounded-lg">
                          <Image src="/group-6.png" alt="rating" width={150} height={20} />
                          <h3 className="text-base font-bold pt-5">Sarah M.</h3>
                          <p className="text-sm font-light text-gray-500 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                             accusantium ad laudantium maxime a laboriosam doloremque repellendus!
                              Ad eligendi architecto a quod culpa. Velit quos magnam possimus beatae fugiat!</p>
                          </div>

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
