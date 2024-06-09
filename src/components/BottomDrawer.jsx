import React from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export const BottomDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <div className='mt-16'>
                <h2 className='mb-5 font-bold'>Top, Bottom, Left, Right Drawer with react</h2>
                <div className='text-center'>
                    <button className='mx-auto my-6 text-center bg-gray-800 text-white p-2 rounded-lg px-8 font-bold' onClick={toggleDrawer}>Show</button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='bottom'
                        className='rounded-t-2xl'
                        overlayColor='white'
                        overlayOpacity={0.8}
                        style={{ boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.08)'}}
                    >
                        <div className='p-5'>
                            <h3 className='my-5 font-bold'>Where does it come from?</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                    </Drawer>
                </div>
            </div>
        </>
    )
}