// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import ReactAccordionUi from "./components/ReactAccordionUi.jsx";
import TabUi from "./components/TabUi.jsx";
import ProgressBarUi from "./components/ProgressBarUi.jsx";


function App() {

    return (
        <div>
            <ReactAccordionUi/>
            <TabUi/>
            <ProgressBarUi title="Flowbite" percentage={100} />
        </div>
    )
}

export default App
