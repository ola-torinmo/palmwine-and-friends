import { useState } from "react";


export default function Home() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [insta, setInsta] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Insta: ", insta);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

    return (
      <main
        className={``}
      >
        <section className="h-screen md:h-[1290px] md:bg-contain bg-contain bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply hidden md:block  " style={{ backgroundImage: "url('/images/palm.png')" }}>
        
          <img src="/images/logo.png" className="mx-4  py-4 md:mt-[-1.5%] ml-[3.5%]  w-[90px] h-[70px]"/>
 
        </section>

         {/* smaller screens */}
        <section className="h-screen md:h-[1290px] md:bg-contain bg-contain bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply md:hidden mt-[-30%] se:mt-[90%]  " style={{ backgroundImage: "url('/images/palm2.png')" }}>
        
          <div className="pt-[54%] ">
          <img src="/images/logo.png" className="  ml-[3.5%]  md:w-[90px] w-[50px] md:h-[70px] h-[30px]"/>
          </div>
 
        </section>
       
  
        <section className="md:bg-cover bg-contain bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply  " style={{ backgroundImage: "url('/images/pfs2.png')" }}>
        
        <div className="" >
          <div className="md:flex md:mt-[-1.5%] mt-[-40%]">
          {/* <img src="/images/logo.png" className="mx-5 py-5 w-[120px] h-[100px] ml-[5%] "/> */}
          <img src="/images/star1.png" className="md:h-[50px] h-[25px] md:ml-[47%] ml-[47%] md:mt-[10%] pt-[2%] "/>
          
          </div>

          {/* <div className="">
          <img src="/images/line1.png" className=" w-[160px] h-[90px] md:ml-[82%] mt-[4%]"/>
          </div> */}
          
          <div className="flex ml-[10%] md:mt-[15%] mt-[27%]">
          <img src="/images/line2.png" className=" md:w-[120px] w-[50px] md:h-[90px]"/>
          <img src="/images/star2.png" className="md:h-[70px] h-[40px] md:ml-[70%] ml-[70%]  mt-[%]"/>
          
          </div>
          
          <div className="md:ml-[70%] ml-[82%] md:mt-[25%] mt-[] ">
            <img src="/images/line3.png" className=" md:w-[120px] md:h-[90px] h-[60px] w-[60px] md:mt-[30%] mt-[40%]  "/>
          </div>
        </div>
          
           
               
         
            <div className="">

              

                <form onSubmit={handleSubmit} className=" md:mx-[25%] mx-[21%] md:mt-[-25%] mt-[-39%] ip12:mt-[-44%] ip14:mt-[-36%] se:mt-[-70%]" style={{ fontFamily: 'moderat' }}>
                  <div className="md:mb-[45px] mb-[15px]  relative">
                   
                    <input type="text"   onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                    
                      id="fullname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block md:w-[600px] w-[250px] p-2.5 pl-12 bg-transparent" placeholder="fullname" required />
                    <div class="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"> 
                      
                      <img src="/images/name.png" className="h-5 w-5"/> 
                  </div> 
                  </div>
                  <div className="md:mb-[45px] mb-[15px] relative">
                   
                    <input onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      id="email" class="shadow-sm bg-gray-50 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 pl-12 md:w-[600px] w-[250px] " placeholder="email" required />
                    <div class="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"> 
                      
                      <img src="/images/email.png" className="h-5 w-5"/> 
                  </div> 
                  </div>
                  <div className="md:mb-5 relative">
                    
                    <input onChange={(e) => setInsta(e.target.value)}
                    value={insta}
                    
                    id="insta" class="shadow-sm bg-gray-50 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 pl-12 md:w-[600px] w-[250px] " placeholder="instagram"required />
                    <div class="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"> 
                      
                      <img src="/images/insta.png" className="h-5 w-5"/> 
                  </div> 
                  </div>
                  
                  
                </form>

  
              
               
                
                <div className="flex flex-col  sm:flex-row sm:justify-center sm:space-y-0 pb-[5%]">
                    <button className="inline-flex justify-center items-center mt-[3%] md:py-5 py-3 md:w-[450px] w-[200px] border-2 border-black md:text-[32px] font-medium text-center text-dark rounded-none bg-[#e7ee06] md:mb-[0%] md:ml-[0%] mb-[1%] ml-[27%]  " type="submit"  style={{ fontFamily: 'PressStart2P' }} >
                        Sign up
                        
                    </button >
                    
                </div>

                    <div className="bg-slate-100 flex flex-col">
                      {error &&
                        error.map((e) => (
                          <div
                            className={`${
                              success ? "text-green-800" : "text-red-600"
                            } px-5 py-2`}
                          >
                            {e}
                          </div>
                        ))}
                    </div>
                </div>
        </section>
  
      </main>
    );
  }
  