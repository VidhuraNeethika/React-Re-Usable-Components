import * as React from "react";

export const GalleryWithFilters = () => {
    return (
        <div className="mt-16">
            <h2 className='mb-5 font-bold'>Gallery with filers using react</h2>
            <div className="flex justify-center">
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full m-2"
                    onClick={() => {
                        filterGallery('all');
                    }}>All
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full m-2"
                    onClick={() => {
                        filterGallery('nature');
                    }}>Nature
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full m-2"
                    onClick={() => {
                        filterGallery('people');
                    }}>People
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full m-2"
                    onClick={() => {
                        filterGallery('architecture');
                    }}>Architecture
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full m-2"
                    onClick={() => {
                        filterGallery('animals');
                    }}>Animals
                </button>
            </div>

            <div className="w-full  max-w-[700px] grid grid-cols-4 gap-4 p-4 mx-auto">
                <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nature"
                     className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems nature"/>
                <img src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600" alt="people"
                     className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems people"/>
                <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="architecture"
                     className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems architecture"/>
                <img src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="animals"
                     className="object-cover col-span-1 rounded-lg overflow-clip aspect-square galleryItems animals"/>
            </div>

        </div>
    )
}

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
