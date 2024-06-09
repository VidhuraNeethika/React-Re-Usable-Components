import * as React from 'react';
import ReactAccordionUi from "./components/ReactAccordionUi.jsx";
import TabUi from "./components/TabUi.jsx";
import ProgressBarUi from "./components/ProgressBarUi.jsx";
import CardCarouselUi from "./components/CardCarouselUi.jsx";
import {GalleryWithFilters} from "./components/GalleryWithFilters.jsx";
import {PageTransition} from "./components/PageTransition.jsx";
import {StairTransition} from "./components/StairTransition.jsx";
import { Drawer} from "./components/Drawer.jsx";

function App() {

    return (
        <>
            <StairTransition/>
            <PageTransition>
                <div className='bg-gray-100'>
                    <div className='max-w-[1024px] mx-auto p-12 md:p-0 overflow-hidden'>
                        <h1 className='my-16 font-bold text-center text-3xl'>Reusable Components with React and Tailwind CSS</h1>
                        <ReactAccordionUi/>
                        <TabUi/>
                        <ProgressBarUi title="Flowbite" percentage={100}/>
                        <CardCarouselUi/>
                        <GalleryWithFilters/>
                        <Drawer/>
                    </div>
                </div>
            </PageTransition>
        </>
    )
}

export default App
