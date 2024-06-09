import React, {useState} from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('uiux');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className='mt-16'>
            <h2 className='mb-5 font-bold'>Tabs with Tailwind</h2>
            <div className="mb-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-2 px-8 text-gray-950 dark:text-white rounded-full bg-gray-100 dark:bg-gray-800 ms-3 duration-500 ease-in-out ${activeTab === 'uiux' ? 'bg-gray-950 text-white' : ''}`}
                            id="uiux-tab"
                            onClick={() => handleTabClick('uiux')}
                            type="button" role="tab" aria-controls="uiux" aria-selected={activeTab === 'uiux'}># UIUX
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-2 px-8 text-gray-950 dark:text-white rounded-full bg-gray-100 dark:bg-gray-800 ms-3 duration-500 ease-in-out ${activeTab === 'brandIdentity' ? 'bg-gray-950 text-white' : ''}`}
                            id="brandIdentity-tab"
                            onClick={() => handleTabClick('brandIdentity')}
                            type="button" role="tab" aria-controls="brandIdentity"
                            aria-selected={activeTab === 'brandIdentity'}># Brand Identity
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-2 px-8 text-gray-950 dark:text-white rounded-full bg-gray-100 dark:bg-gray-800 ms-3 duration-500 ease-in-out ${activeTab === 'webProject' ? 'bg-gray-950 text-white' : ''}`}
                            id="webProject-tab"
                            onClick={() => handleTabClick('webProject')}
                            type="button" role="tab" aria-controls="webProject"
                            aria-selected={activeTab === 'webProject'}># Web Projects
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className={`inline-block p-2 px-8 text-gray-950 dark:text-white rounded-full bg-gray-100 dark:bg-gray-800 ms-3 duration-500 ease-in-out ${activeTab === 'mobileApps' ? 'bg-gray-950 text-white' : ''}`}
                            id="mobileApps-tab"
                            onClick={() => handleTabClick('mobileApps')}
                            type="button" role="tab" aria-controls="mobileApps"
                            aria-selected={activeTab === 'mobileApps'}># Mobile Apps
                        </button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                <div
                    className={`rounded-lg bg-gray-50 dark:bg-gray-800 transition-opacity duration-500 ${activeTab === 'uiux' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
                    id="uiux" role="tabpanel" aria-labelledby="uiux-tab">
                    <div className='p-10'>
                        1
                    </div>
                </div>
                <div
                    className={`rounded-lg bg-gray-50 dark:bg-gray-800 transition-opacity duration-500 ${activeTab === 'brandIdentity' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
                    id="brandIdentity" role="tabpanel" aria-labelledby="brandIdentity-tab">
                    <div className='p-10'>
                        2
                    </div>
                </div>
                <div
                    className={`rounded-lg bg-gray-50 dark:bg-gray-800 transition-opacity duration-500 ${activeTab === 'webProject' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
                    id="webProject" role="tabpanel" aria-labelledby="webProject-tab">
                    <div className='p-10'>
                        3
                    </div>
                </div>
                <div
                    className={`rounded-lg bg-gray-50 dark:bg-gray-800 transition-opacity duration-500 ${activeTab === 'mobileApps' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
                    id="mobileApps" role="tabpanel" aria-labelledby="mobileApps-tab">
                    <div className='p-10'>
                        4
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
