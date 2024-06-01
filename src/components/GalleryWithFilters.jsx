'use client';

import reactSvg from '../../public/vite.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const GalleryWithFilters = () => {
    AOS.init();
    return (<div className="w-full">

        {/*Filter  Buttons*/}
        <div className="flex justify-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={()=>{
                    filterGallery('all');
            }} >All
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={()=>{
                    filterGallery('nature');
            }} >Nature
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={()=>{
                    filterGallery('people');
            }} >People
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={()=>{
                    filterGallery('architecture');
            }} >Architecture
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={()=>{
                    filterGallery('animals');
            }} >Animals
            </button>
        </div>

        {/*Gallery*/}
        <div className="w-full  max-w-[700px] grid grid-cols-3 gap-4 p-4" data-aos="fade-up">
                <img src={reactSvg} alt="nature" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems nature"/>
                <img src={reactSvg} alt="people" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems people nature"/>
                <img src={reactSvg} alt="architecture" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems architecture nature"/>
                <img src={reactSvg} alt="animals" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems animals architecture nature"/>
                <img src={reactSvg} alt="nature" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems people nature architecture"/>
                <img src={reactSvg} alt="people" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems people"/>
                <img src={reactSvg} alt="architecture" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems architecture people"/>
                <img src={reactSvg} alt="animals" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems animals"/>
                <img src={reactSvg} alt="nature" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems nature"/>
                <img src={reactSvg} alt="people" className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems people"/>
        </div>

    </div>)
}

// JavaScript
const filterGallery = (filter) => {
    const galleryItems = document.querySelectorAll('.galleryItems');
    galleryItems.forEach((item) => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};
