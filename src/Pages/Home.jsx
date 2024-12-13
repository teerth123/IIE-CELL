import { useEffect } from "react";
import CardCarousel from "../components/CardCarousel";
import MainHeroSection from "../components/MainHeroSection";
import Parallax from "../components/Parallax";
import Parallax2 from "../components/Parallax2";
import Footer from "../components/Footer";

export default function Home(){
    
    return(
        <>
            <MainHeroSection/>
            <div className="w-100% lg:flex bg-white font-handlee mt-[5vw]  pl-8 pr-8 justify-center pb-32">
                <div>
                    <div className="headling font-poppins sm:text-3xl text-xl font-bold pb-5 mt-32">Vision & Mission of IIE Cell at Walchand College of Engineering, Sangli</div>
                    <div className="draft text-[22px] xl:max-w-[50vw] ">
                        <h1 className="mb-5">
                        <span className="pl-10">The</span> <span className="bg-[#fffaa6]">IIE Cell</span> (Incubation, Innovation, and Entrepreneurship Cell) at Walchand College of Engineering, Sangli, is dedicated to fostering a culture of <span className="bg-[#fffaa6]">innovation, entrepreneurship</span> and <span className="bg-[#fffaa6]">startup development</span> among engineering students. Our mission is to empower aspiring entrepreneurs by providing them with the tools, knowledge, and resources to transform their ideas into successful ventures. Through a collaborative environment, we encourage students to think creatively, take risks, and solve real-world problems through <span className="bg-[#fffaa6]">innovative solutions.</span>
                        </h1>
                        <h1 className="mb-5">
                        <span className="pl-10">Our</span> vision is to become a <span className="bg-[#fffaa6]">hub of entrepreneurship</span> within the college, nurturing the next generation of <span className="bg-[#fffaa6]">business leaders</span> and <span className="bg-[#fffaa6]">innovators</span>. We aim to bridge the gap between academic learning and practical business applications by offering <span className="bg-[#fffaa6]">mentorship, workshops, and networking opportunities</span> with industry experts and successful entrepreneurs.
                        </h1>
                        <h1 className="mb-5">
                        <span className="pl-10">The</span> IIE Cell strives to create an ecosystem that promotes <span className="bg-[#fffaa6]">startup culture,</span> supporting students in launching their own businesses and contributing to the growth of the <span className="bg-[#fffaa6]">entrepreneurial landscape</span> in India.
                        </h1>
                    </div>
                </div>
                <img src="https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&q=80&w=1280" alt="" className="w-[50vw] h-[800px] object-contain pb-20"/>
            </div>

            {/* //parallx effect */}
            <Parallax/>
            <Parallax2/>
            <div className="bg-white border-2 py-5   ">
                <div className="flex items-center justify-center">
                    <h1 className="font-poppins text-3xl font-semibold pb-10 pl-10 pr-3 ">🌟 <span className="underline">Success Stories</span> - </h1>
                    <h1 className="font-handlee text-[22px] mb-8"> Inspiring entrepreneurial success stories motivating <span className="bg-[#fffaa6]">innovation, resilience,</span> and <span className="bg-[#fffaa6]">growth.</span></h1>
                </div>
                <div className="bg-white grid sm:grid-cols-2 lg:grid-cols-4">
                    <CardCarousel className="one" pic="https://i.pinimg.com/736x/c6/a7/18/c6a7180205d987dead83037dda2ba9c1.jpg" category="500+ Startups" head="Empowering startups across diverse sectors."/>
                    <CardCarousel className="two" pic="https://i.pinimg.com/736x/ec/47/d0/ec47d0e812901087b9e566dcde0f5d3c.jpg" category="200+ Events" head="Hosting workshops, seminars, and competitions."/>
                    <CardCarousel className="three" pic="https://i.pinimg.com/736x/e4/07/e7/e407e755e604c253887d8bf7ce1f9c3c.jpg" category="40+ Patents" head="Facilitating innovative ideas and protection."/>
                    <CardCarousel className="four" pic="https://i.pinimg.com/736x/4f/f0/f8/4ff0f86cc85183affd451cff7e852f30.jpg" category="10+ Incubators" head="Providing support to early-stage startups."/>

                </div>
            </div>
            <Footer/>
            
        </>
    )
}