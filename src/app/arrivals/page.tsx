import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Arrivals() {
  return (
    <main>
      
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
                        <Image src="/p-3.jfif" alt="clothes" width={200} height={500}/>
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
                        <Image src="/p-3.jfif" alt="clothes" width={200} height={500}/>
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
                        <Image src="/p-3.jfif" alt="clothes" width={200} height={500}/>
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
