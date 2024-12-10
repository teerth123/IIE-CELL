import React from "react";

export default function Foot() {
    return (
        <div className="bg-[#000000] w-full pt-10 h-auto pb-3 rounded-t-3xl ">
            <div className="flex mt-3 justify-around ">
                <div className="mt-36">
                <div className="flex mt-3 ">
                    <h1 className="mr-1 text-[#E44C43] font-inter font-bold text-3xl">IIE</h1>
                    <h1 className="text-white font-inter font-bold text-3xl">Cell</h1>
                </div>
                <div className="flex mt-3 ">
                    <div className="text-white mb-2">
                    <i class="ri-copyright-line"></i>
                    </div>
                <h1 className="text-[#878787]">All rights reserved.</h1>
                </div>
                </div>
                
                <div className="mt-8 mb-8">
                    <h1 className="text-2xl text-white font-extrabold text-[24px] font-inter mt-3 text-left mb-3">Explore</h1>
                    <div className="text-[#878787]">
                        <h1 className="cursor-pointer text-left font-semibold my-1">Home</h1>
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Events</h1>
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Blogs</h1>
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Internship</h1>
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Startup</h1>
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Team</h1>
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Contact us</h1>
                    </div>
                </div>

                <div className="my-8">
                    <h1 className="text-2xl text-white font-extrabold text-[24px] font-inter mt-3 text-left mb-3">Compliance Info</h1>
                    <div className="text-[#878787]">
                        <h1 className="cursor-pointer text-left  font-semibold my-1">Terms & Conditions</h1>
                        <h1 className="cursor-pointer  text-left  font-semibold my-1">Rules</h1>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}
