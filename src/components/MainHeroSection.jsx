import DropAnimation from "../components/DropAnimation";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


export default function MainHeroSection(){
    
    return(
        <>
            <div className=' justify-center '>
                <Navbar/>
                <Hero/>
                <DropAnimation/>
            </div>
        </>
    )
}