import { useEffect } from "react";
import gsap from "gsap";

export default function Parallax({pic1, pic2, pic3}) {
    useEffect(()=>{
        gsap.to('.one', {
            y: -150, 
            duration: 3, 
            scrollTrigger: {
              trigger: '.images', 
              start: 'top 90%', 
              end: 'bottom top', 
              scrub: 2, 
              markers: false, 
            }
          });
      
          gsap.to('.two', {
            y: -80, // Move image upwards on scroll (slower than the first image)
            duration: 3,
            scrollTrigger: {
              trigger: '.images',
              start: 'top 80%',
              end: 'bottom top',
              scrub: 2,
              markers: false,
            }
          });
      
          gsap.to('.third', {
            y: -150, // Move image upwards at a different speed
            duration: 3,
            scrollTrigger: {
              trigger: '.images',
              start: 'top 70%',
              end: 'bottom top',
              scrub: 2,
              markers: false,
            }
          });
    }, [])
    return (
        <>
            <div className="bg-white w-full min-h-screen flex">
                <div className="images relative w-full -ml-24">
                    <img 
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=webp" 
                        alt="" 
                        className="one z-0 absolute w-[50vw] h-[250px] object-contain mt-72 -mx-16"
                    />
                    <img 
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=webp" 
                        alt="" 
                        className="two z-10 absolute w-[80vw] h-[600px] object-contain"
                    />
                    <img 
                        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/permissions.png?id=89a89ccc-4eb8-4dd9-8cb3-4897f80c7f36&output_type=webp" 
                        alt="" 
                        className="third z-20 absolute w-[50vw] h-[300px] object-contain mt-24 ml-[450px]"
                    />
                </div>

                <div className="-ml-[30vw]">
                    <div className="font-poppins font-bold text-3xl border-2 p-5 flex justify-between rounded-md">
                        <h1>Register Your Startup</h1>
                        <h1>💡</h1>
                    </div>
                    <div className="font-poppins font-medium w-[28vw] border-2 mt-10 p-5 rounded-lg">
                        <h1><span className="font-semibold text-lg">1.</span> Turn Ideas into Reality.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">2.</span>  Access Funding.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">3.</span>  Benefit from Incubation Support.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">4.</span>  Collaborate with Innovators.</h1>
                        <br />
                        <h1><span className="font-semibold text-lg">5.</span>  Get Mentorship & Guidance.</h1>
                    </div>
                    <span className="mt-5 ml-96 flex border-2 w-[5vw] justify-center p-2 font-poppins rounded-lg">
                        <h1>See...</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                    </span>
                </div>

            </div>
        </>
    );
}
