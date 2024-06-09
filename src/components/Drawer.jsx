import React, { useState } from 'react';

export const Drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className='mt-16'>
                <h2 className='mb-5 font-bold'>Bottom Drawer with react tailwind and flowbite components</h2>
                <div className="text-center">
                    <button
                        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        type="button"
                        onClick={toggleDrawer}
                    >
                        Show bottom drawer
                    </button>
                </div>

                <div
                    className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-gray-200 dark:bg-gray-800 rounded-t-3xl ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}
                    tabIndex="-1"
                    aria-labelledby="drawer-bottom-label"
                    style={{transform: isDrawerOpen ? 'translateY(0)' : 'translateY(100%)'}}
                >
                    <button type="button" onClick={toggleDrawer}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        x
                    </button>

                    <div className='p-4'>
                        <h3 className='font-bold my-4'>What is Lorem Ipsum?</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
