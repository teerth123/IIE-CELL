import DropAnimation from "../components/DropAnimation";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


export default function MainHeroSection(){
    
    return(
        <>
            <div className='py-44  bg-black'>
                <Navbar/>
                <Hero/>
                {/* <DropAnimation/> */}
            </div>
        </>
    )
}