import React from 'react'
import Profile from '../Sidebar/Profile'
import Devider from '../Komponen/Divider'
import NavigationButton from './NavigationButton'
import Social from './Social'


const Sidebar = () => {
  return (
    <div className=' mt-10 lg:mt-0 top-4 lg:sticky z-10  lg:block'>
        <Profile></Profile>
        <Devider></Devider>
        <NavigationButton></NavigationButton>
        <Devider></Devider>
        <Social></Social>
    </div>
  )
}

export default Sidebar