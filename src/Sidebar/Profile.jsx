import React from 'react'
import ProfilePic from '../assets/potrait.jpg'
import ModeToggle from './modeToggle'


const Profile = () => {
    return (
        <div className='w-full px-4 flex items-center lg:block  '>
            <img src={ProfilePic} className='w-32 h-32 rounded-full lg:hover:scale-105 duration-700'></img>

            <div className='flex-col lg:flex gap-2 mt-4 pl-4 lg:pl-0'>
                <a href='/' passHref>
                    <h2 className='text-md lg:text-lg font-medium text-darkMode  '>
                        Putu Wiweka Prasetyananda
                    </h2>
                </a>
                <div className=' lg:flex text-sm  text-darkMode '>
                    @Wika
                </div>
               <ModeToggle/>
            </div>
        </div>
    )
}

export default Profile