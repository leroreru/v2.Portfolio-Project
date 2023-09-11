import React, { useEffect, useState } from 'react'
import {HomeIcon,LightBulbIcon,RectangleGroupIcon} from '@heroicons/react/24/solid'
import { useLocation, useNavigate } from 'react-router-dom'

const NavigationButton = () => {

    const naviName = [
        { logo : <HomeIcon className='icon-size'/>,naviName: 'home',link:'/' },
        { logo : <RectangleGroupIcon className='icon-size'/>,naviName: 'career',link:'/career' },
        // { logo : <LightBulbIcon className='icon-size'/>,naviName: 'project',link:'/project' },
    ]

    const [isActive,setIsActive]=useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const currentPath = location.pathname
    const pathname = currentPath.substring(1)


    useEffect(()=>{
        if(pathname === ''){
            setIsActive('home')
        }else if (pathname === 'career'){
            setIsActive('career')
        } else if ( pathname === 'project'){
            setIsActive('project')
        } else if ( pathname === 'contact') {
            setIsActive('contact')
        }

    },[location])
    
    const handleClickNav =(hRef,naviName)=>{
        setIsActive(naviName)
        navigate(hRef)
    }

    return (
        <div className='w-full '>
            {(naviName).map((data) =>
                <button onClick={()=>{handleClickNav(data.link,data.naviName)}} className={`rounded-md text-center text-black dark:text-white w-full py-2 mb-1 transition-custom hover-button-nav hover:text-white ${isActive === data.naviName ? 'button-active':''}`}>
                    <div className='flex flex-wrap items-center px-2'>
                        <div className='pr-2'>
                            {data.logo}
                        </div>
                        <div className='capitalize'>
                            {data.naviName}
                        </div>
                    </div>
                </button>

            )}
        </div>
    )
}

export default NavigationButton