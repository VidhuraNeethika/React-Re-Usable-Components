import * as React from 'react';
import ReactAccordionUi from "./components/ReactAccordionUi.jsx";
import TabUi from "./components/TabUi.jsx";
import ProgressBarUi from "./components/ProgressBarUi.jsx";
import CardCarouselUi from "./components/CardCarouselUi.jsx";
import {GalleryWithFilters} from "./components/GalleryWithFilters.jsx";
import {PageTransition} from "./components/PageTransition.jsx";
import {StairTransition} from "./components/StairTransition.jsx";
import { Drawer} from "./components/Drawer.jsx";
import {BottomDrawer} from "./components/BottomDrawer.jsx";
import AnimatedCursor from "react-animated-cursor";

function App() {

    return (
        <>
            <StairTransition/>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'black'
                }}
                outerStyle={{
                    border: '2px solid black'
                }}
            />
            <PageTransition>
                <div className='bg-gray-100'>
                    <div className='max-w-[1024px] mx-auto p-12 md:p-0 overflow-hidden'>
                        <h1 className='my-16 font-bold text-center text-3xl'>Reusable Components with React and Tailwind CSS</h1>
                        <ReactAccordionUi/>
                        <TabUi/>
                        <ProgressBarUi title="Graphic Design" percentage={80}/>
                        <CardCarouselUi/>
                        <GalleryWithFilters/>
                        <Drawer/>
                        <BottomDrawer/>
                    </div>
                </div>
            </PageTransition>
        </>
    )
}

export default App
