import gsap from "gsap";
import { useEffect } from "react";
import { ThreeDCardDemo } from "./3dcardForHero";
import ShootingStars from "./Shootingstars";
export default function Hero() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.heading', {
            opacity: 1,
            duration: 1,
            stagger:0.1
        })
        .to('.subheading', {
            opacity:1,
            duration:1
        })
        .to('.CTA', {
            opacity:1,
            duration:2,
            stagger:0.9
        })
        .to('.postEdit1', { 
            opacity: 1,
            duration: 0.3,
            stagger: 0.3,  
            y: 0,  
            ease: "power2.out"
        }, 3)
        .to('.postEdit2', { 
            opacity: 1,
            duration: 0.3,
            stagger: 0.3,  
            y: 0,  
            ease: "power2.out"
        }, 3);
        

       

        
    }, []);



    return (
        <>  
            <div className="w-[100] sm:grid sm:grid-cols-2 z-10">
                <ShootingStars/>
                <div>
                    <h1 className="heading font-medium justify-center items-center text-6xl sm:text-5xl md:text-6xl text-white font-poppins opacity-0 ml-[8vw]">
                        Heading in 6-8 words dobor <br /> dummy text ohh yeah
                    </h1>
                    <h3 className="subheading text-[#b3b2b3] mt-16 font-poppins text-2xl sm:text-lg md:text-2xl opacity-0  ml-[8vw]">
                        Subheading in 10-12 words jso fih jof <br /> sjfi fi lorem dobor ca nsasf
                    </h3>
                    <div className="CTA flex font-poppins mt-16 text-xl sm:text-xs md:text-xl opacity-0 ml-[8vw]">
                        <div className="border-2 rounded-md py-4 px-8 mr-5 bg-[#e4e4e4] cursor-pointer">CTA 1</div>
                        <div className="flex rounded-md py-4 px-8 mx-5 bg-[#28292d] border-[#3d3d3d] text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#828890] cursor-pointer hover:bg-[#28292d]">
                            <h1>CTA 2</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#828890">
                                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="">
                        <div className="postEdit1 opacity-0 flex rounded-sm bg-[#111617] w-fit p-3 text-white font-poppins mt-28 ml-[8vw] ">
                            <div className="h-5 w-5 rounded-full bg-[#16A34A] "></div>
                            <h1 className="pl-5 font-poppins font-bold">Dreamers' club @ WCE</h1>
                        </div>
                        <div className="postEdit2 opacity-0 social links flex ml-[8vw] mt-5 cursor-pointer">
                            <i className="ri-instagram-line icon-white text-white  mr-5 h-15 w-15 text-2xl"></i>
                            <i className="ri-linkedin-box-fill icon-white text-white mx-5 h-15 w-15 text-2xl"></i>
                            <i className="ri-mail-line icon-white text-white mx-5 h-15 w-15 text-2xl"></i>
                            <i className="ri-map-pin-line icon-white text-white mx-5 h-15 w-15 text-2xl"></i>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full">
                    <ThreeDCardDemo/>
                </div>
                
            </div>
            
        </>
    );
}