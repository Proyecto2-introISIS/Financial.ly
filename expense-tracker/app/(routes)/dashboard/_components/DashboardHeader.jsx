import React from 'react'
import {UserButton} from "@clerk/nextjs"

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between ">
        <div>
            Barra de busqueda
        </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader
