import React from 'react'
import { Outlet } from 'react-router-dom'
import AppDevelopment from './AppDevelopment'
import WebDevelopment from './WebDevelopment'

const ServiceDetail = () => {
  return (
    <>
 {<AppDevelopment/>}
 [<WebDevelopment/>]
    <Outlet/>
    </>
   
  )
}

export default ServiceDetail