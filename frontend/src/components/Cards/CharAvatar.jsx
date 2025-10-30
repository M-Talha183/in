// import React from 'react'
// // import getInitials from "../../utils/helper"
// import { getInitials } from '../../utils/helper'   // ✅ correct import path

// function CharAvatar({fullName,wdith,height,style}) {
//   return (
//     <div className={`${wdith || 'w-12'} ${height || 'h-12 '} ${style|| ''} flex items-center justify-center rounded-full font-medium  text-gray-900 bg-gray-600`}>
//         {getInitials(fullName || "")}
      
//     </div>
//   )
// }

// export default CharAvatar
import React from 'react'
import { getInitials } from '../../utils/helper'   // ✅ correct import path

function CharAvatar({ fullName, width, height, style }) {
  return (
    <div
      className={`
        ${width || 'w-12'} 
        ${height || 'h-12'} 
        ${style || ''} 
        flex items-center justify-center 
        rounded-full font-semibold 
        text-white 
        bg-gradient-to-br from-violet-600 to-indigo-500 
        shadow-md 
        transition-transform duration-200 hover:scale-105
      `}
      title={fullName || "User"}
    >
      {getInitials(fullName || "")}
    </div>
  )
}

export default CharAvatar
