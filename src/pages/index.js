// import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from 'next/link';



export default function Home() {
  return (
    <main
      className=''
    >
     

      <section className=" bg-cover bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply hidden md:block  " style={{ backgroundImage: "url('/images/pf.png')" }}>


      <div className="">
        <div className="flex">
          <img src="/images/logo.png" className="mx-5 py-5 w-[120px] h-[100px] md:ml-[5%]" />
          <img src="/images/star1.png" className="h-[50px] ml-[32%] md:mt-[2%]" />
        </div>

        <div className="">
          <img src="/images/line1.png" className=" w-[160px] h-[90px] md:ml-[82%] mt-[4%] " />
        </div>

        <div className="flex md:ml-[10%] mt-[10%]">
          <img src="/images/line2.png" className=" w-[120px] h-[90px] mt-[10]" />
          <img src="/images/star2.png" className="h-[70px] md:ml-[70%] mt-[10]" />
        </div>

        <div className="md:ml-[69%]">
          <img src="/images/line3.png" className="w-[120px] h-[90px] mt-[45%]" />
        </div>
      </div>
        
             
       
          <Link href="/sign_up" >
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0  pb-[20%] md:pb-[1%] ">
                  <div  className="inline-flex justify-center items-center  py-5 w-[200px] md:w-[450px] border-2 border-black md:text-[32px] text-[14px] font-medium text-center text-dark rounded-none bg-[#e7ee06] t-[30%]  "  style={{ fontFamily: 'PressStart2P' }} >
                      Press start
                      
                  </div>
                  
              </div>
          </Link>
      </section>



      {/* smaller screens */}
      <section className=" bg-contain bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply md:hidden  pt-[80%] " style={{ backgroundImage: "url('/images/pfs.png')" }}>


      <div className=" pb-[100%]">
        <div className="flex ">
          <img src="/images/logo.png" className=" w-[70px] h-[40px] ml-[10%] mt-[-5%]" />
          <img src="/images/star1.png" className="h-[30px] ml-[17%] md:mt-[2%] mt-[-5%] " />
        </div>

        {/* <div className="mt-[%]">
          <img src="/images/line1.png" className=" w-[160px] h-[90px] md:ml-[82%] " />
        </div> */}

        {/* <div className="flex ml-[10%] ">
          <img src="/images/line2.png" className=" w-[70px] h-[20px] mt-[0%]" />
          <img src="/images/star2.png" className="h-[30px] ml-[60%] mt-[0%]" />
        </div> */}

        <div className="ml-[80%] ">
          <img src="/images/line3.png" className="w-[40px] h-[40px] mt-[100%]" />
        </div>
       </div>
        
             
       
          <Link href='/sign_up'>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0   md:pb-[1%]  ">
              <div className="inline-flex justify-center items-center py-3 md:py-5 w-[200px] md:w-[450px] border-2 border-black md:text-[32px] text-[14px] font-medium text-center text-dark rounded-none bg-[#e7ee06] mt-[-80%] ml-[25%]" style={{ fontFamily: 'PressStart2P' }}>
                      Press start
                  </div>
                  
              </div>
          </Link>
      </section>


    </main>
  );
}
