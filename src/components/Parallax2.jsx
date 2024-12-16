import { useEffect } from "react";
import gsap from "gsap";

export default function Parallax2() {
    // useEffect(()=>{
        
      
    //     gsap.to('.don', {
    //         y: -150, // Move image upwards on scroll (slower than the first image)
    //         duration: 3,
    //         scrollTrigger: {
    //           trigger: '.images',
    //           start: 'top 80%',
    //           end: 'bottom top',
    //           scrub: 2,
    //           markers: false,
    //         }
    //     });

    //     gsap.to('.tin', {
    //         y: -200, // Move image upwards on scroll (slower than the first image)
    //         duration: 3,
    //         scrollTrigger: {
    //           trigger: '.images',
    //           start: 'top 90%',
    //           end: 'bottom top',
    //           scrub: 2,
    //           markers: false,
    //         }
    //     });
    // }, [])
    return (
        <>
            <div className="bg-white w-full  grid sm:grid-cols-2 mb-32">
                <div className="sm:ml-32 ml- mx-5">
                    <div className="font-poppins font-bold text-3xl sm:w-[32vw] w-[90vw] flex justify-around border-2 p-5 rounded-md">
                        <h1>Initiatives of IIE cell</h1>
                        <h1>🏆</h1>
                    </div>
                    <div className="font-poppins font-medium sm:w-[32vw] w-[90vw] border-2 mt-10 p-5 rounded-lg">
                        <h1><span className="font-semibold text-lg">1.</span> Idea Generation and Innovation Labs.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">2.</span>  Startup Incubation and Seed Funding.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">3.</span>  Industry Mentorship Programs.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">4.</span>  Entrepreneurship Workshops and Bootcamps.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">5.</span>  Hackathons and Pitch Competitions.</h1>
                    </div>
                    <span className="mt-5 float-right mr-5 mb-5 sm:mr-24 flex border-2 w-[15vw] sm:w-[10vw] justify-center p-2 font-poppins rounded-lg">
                        <h1>See...</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                    </span>
                </div>

                <div className="images mb-10 -mt-20 relative w-full sm:block hidden">
                   
                    <img 
                        src="https://i.pinimg.com/736x/5d/e6/26/5de6263a0a1c8da51f9d9105859b712c.jpg" 
                        alt="" 
                        className="don z-10 absolute w-[50vw] h-[600px] -mt-5 ml-40 object-contain"
                    />
                    <img 
                        src="https://i.pinimg.com/736x/f5/a0/36/f5a036294ddce2f695d06fd5086545eb.jpg" 
                        alt="" 
                        className="tin z-20 absolute w-[50vw] h-[600px]  object-contain"
                    />
                    
                
                </div>
                    
            </div>
        </>
    );
}