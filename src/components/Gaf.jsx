import React from 'react';
import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import logo from "../assets/navlogo.png";

const Gaf = () => {
    return (
        <div>
            {/* Navbar qismi */}
            <div className='w-full h-[85px] flex m-auto justify-between bg-white pt-[5px] items-center'>
                <img src={logo} alt="Nav Logo" className="w-[195px] h-[40px]" />
                <ul className='flex gap-[80px] '>
                    <li className='font-normal text-[16px] text-[#00402F]'>Forum</li>
                    <li className='font-normal text-[16px] text-[#00402F]'>Journal</li>
                    <li className='font-normal text-[16px] text-[#00402F]'>Therapy</li>
                    <li className='font-normal text-[16px] text-[#00402F]'>Events</li>
                </ul>
                <button className='w-[116px] h-[45px] bg-[#00402F]'  >Sign up</button>
            </div>
            {/* hero qismi */}
            <div className='mt-[80px] mx-[145px] flex gap-15 ' >
                <img src={card1} alt="Card1" className="w-[546px] h[547px]" />
                <div className=''>
                    <h1 className='font-bold text-[61px]'>Greatness is with in us.</h1>
                   
                    <ul className='flex grid gap-10'>
                        <p className='font-normal text-[15px]'>Access therapist-guided group workshops and monthly cohorts.</p>
                        <p className='font-normal text-[15px]'>Ask questions and engage in our secure, supportive forums.</p>
                        <p className='font-normal text-[15px]'>Discover the biopsychosocial approach to mind-body wellbeing.</p> 
                        <p className='font-normal text-[15px]'>One-on-one therapy with Superbloom vetted therapists.</p>
                    </ul>
                    <button className='w-[154px] h-[21px] rounded-3xl bg-white text-[#00402F] mt-[15px]'>Learn More</button>

                </div>
            </div>
            {/* hero 2 qismi */}
            <div className='mt-[80px] mx-[145px] flex gap-15 ' >
                <div className=''>
                    <p className='font-normal text-[34px]'>Our mental health resources are developed to encourage and bolster emotional wellness. Superbloom is here to support you feeling balanced in mind and body.</p>
                    <button className='w-[154px] h-[21px] rounded-3xl bg-white text-[#00402F] mt-[15px]'>Learn More</button>
                </div>
                <img src={card2} alt="Card2" className="w-[546px] h[547px]" />

            </div>
        </div>
    );
}

export default Gaf;