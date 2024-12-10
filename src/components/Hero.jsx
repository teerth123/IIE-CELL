import gsap from "gsap";
import { useEffect } from "react";


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
        });

       

        
    }, []);



    return (
        <>  
            <h1 className="heading font-medium justify-center items-center mt-40 text-6xl text-white font-poppins left-3/4 opacity-0 ml-[14vw]">
                Heading in 6-8 words dobor <br /> dummy text ohh yeah
            </h1>
            <h3 className="subheading text-[#b3b2b3] mt-10 font-poppins text-2xl opacity-0 ml-[14vw]">
                Subheading in 10-12 words jso fih jof <br /> sjfi fi lorem dobor ca nsasf
            </h3>
            <div className="CTA flex font-poppins mt-10 text-xl opacity-0 ml-[14vw]">
                <div className="border-2 rounded-md py-4 px-8 mr-5 bg-[#e4e4e4] cursor-pointer">CTA 1</div>
                <div className="flex rounded-md py-4 px-8 mx-5 bg-[#28292d] border-[#3d3d3d] text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#828890] cursor-pointer hover:bg-[#28292d]">
                    <h1>CTA 2</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#828890">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                </div>
            </div>


        </>
    );
}
