import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import pic from "../assets/4910c26a520e0e6e7de618503413f350.jpg";
import d1 from "../assets/deadpool.png";

gsap.registerPlugin(ScrollTrigger);

export default function DropAnimation() {
  useEffect(() => {
    gsap.to(".drop", {
      opacity: 1,
      duration: 5,
    });

    // gsap.to('body', {
    //   backgroundColor: 'white',
    //   scrollTrigger: {
    //     trigger: '.drop', 
    //     start: 'top 80%',  
    //     end: 'bottom 30%', 
    //     scrub: 3,          
    //     // markers: true,     
    //   },
    // });

    gsap.to('.bgPic', {
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: '.bgPic',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 6,
        // markers: true,
      },
    });
    gsap.to('.frontImage', {
      scale: 1.1,
      duration: 3,
      scrollTrigger: {
        trigger: '.frontImage',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 6,
        // markers: true,
      },
    });

  }, []);

  return (
    <>
      <div className='drop opacity-0'>
        <div className="ml-[5vw] mt-52 relative">
          <div className="bgPic flex relative z-10">
            <img src={d1} alt="image 1" />
            <img src={d1} alt="image 2" />
          </div>
          <div className="frontImage absolute z-20 -top-20 left-[50%] transform -translate-x-1/2">
            <img src={pic} alt="frontImg" className="h-[600px] w-[900px]" />
          </div>
        </div>
      </div>
    </>
  );
}
