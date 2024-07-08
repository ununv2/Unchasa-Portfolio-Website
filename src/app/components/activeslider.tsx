import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import './styles.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";
import { Pagination } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

import image_slider_1 from '@public/web1.png'
import image_slider_2 from '@public/web2.png'
import image_slider_3 from '@public/web3.png'
import image_slider_4 from '@public/web4.png'
import image_slider_5 from '@public/web5.png'

export default function Activeslider() {
  return (
    <div className=''>
        <div className='w-full h-full flex items-center justify-center'>
        <Swiper
            effect={ 'coverflow' }
            coverflowEffect={
                {
                    rotate: 30,
                    stretch: 80,
                    depth: 350,
                    modifier: 1,
                    slideShadows:true,
                }
            }
            grabCursor={ true }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={3}
      
            
            pagination={ { el: '.swiper-pagination', clickable: true } }
            modules={[EffectCoverflow, Pagination, FreeMode]}
            className='swiper-container'
            >
                {/* 1 */}
                <SwiperSlide className="relative">
                    <Image className="cursor-pointer rounded-xl" src={image_slider_2} alt="image_slider" />
                    
                    {/* Shadow Gradient */}
                    <div className="absolute rounded-lg bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-7 left-7 text-white">
                        <div className="font-bold text-lg">Youtube Channel</div>
                        <div className="text-sm">Gaming youtube channel with more than 30,000 subscribers</div>
                    </div>

                    {/* Arrow Icon */}
                    <a href="https://www.youtube.com/channel/UC_UDG9Kau_HJL9dd0QItJVg" target="_blank" rel="noopener noreferrer">
                        <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                        <GoArrowUpRight className="text-black text-3xl hover:text-[2.2rem] transition-all"/>
                        </div>
                    </a>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide className="relative">
                    <Image className="cursor-pointer rounded-xl" src={image_slider_1} alt="image_slider" />
                    
                    {/* Shadow Gradient */}
                    <div className="absolute rounded-lg bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-7 left-7 text-white">
                        <div className="font-bold text-lg">Vtuber Website</div>
                        <div className="text-sm">Website for Vtube Character & Minecraft Projects. Made by Unun, PPekkunGDev</div>
                    </div>

                    {/* Arrow Icon */}
                    <a href="https://unchasa.in.th" target="_blank" rel="noopener noreferrer">
                        <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                        <GoArrowUpRight className="text-black text-3xl hover:text-[2.2rem] transition-all"/>
                        </div>
                    </a>
                </SwiperSlide>
    
                {/* 3 */}
                <SwiperSlide className="relative">
                    <Image className="cursor-pointer rounded-xl" src={image_slider_3} alt="image_slider" />
                    
                    {/* Shadow Gradient */}
                    <div className="absolute rounded-lg bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-7 left-7 text-white">
                        <div className="font-bold text-lg">Github</div>
                        <div className="text-sm">Access Github profile for more projects in the future :)</div>
                    </div>

                    {/* Arrow Icon */}
                    <a href="https://github.com/ununv2" target="_blank" rel="noopener noreferrer">
                        <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                        <GoArrowUpRight className="text-black text-3xl hover:text-[2.2rem] transition-all"/>
                        </div>
                    </a>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide className="relative">
                    <Image className="cursor-pointer rounded-xl" src={image_slider_4} alt="image_slider" />
                    
                    {/* Shadow Gradient */}
                    <div className="absolute rounded-lg bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-7 left-7 text-white">
                        <div className="font-bold text-lg">Minecraft Server</div>
                        <div className="text-sm">In Progress</div>
                    </div>

                    {/* Arrow Icon */}
                    
                </SwiperSlide>
                {/* 5 */}
                <SwiperSlide className="relative">
                    <Image className="cursor-pointer rounded-xl" src={image_slider_5} alt="image_slider" />
                    
                    {/* Shadow Gradient */}
                    <div className="absolute rounded-lg bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-7 left-7 text-white">
                        <div className="font-bold text-lg">Minecraft Roleplay Project</div>
                        <div className="text-sm">FiawKunGSMP & FriendsCraftSMP</div>
                    </div>

                    {/* Arrow Icon */}
                    <a href="https://www.youtube.com/@ununyy12/playlists" target="_blank" rel="noopener noreferrer">
                        <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                        <GoArrowUpRight className="text-black text-3xl hover:text-[2.2rem] transition-all"/>
                        </div>
                    </a>
                </SwiperSlide>
            
            </Swiper>
            
        </div>
    </div>
  )
}
