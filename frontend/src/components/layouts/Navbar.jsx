// import React, { useState } from 'react'

// import { HiOutLineMenu } from 'react-icons/hi';
// // import { HiOutlineX } from 'react-icons/hi';
// import { HiOutlineX } from 'react-icons/hi';
// // import SideMenu from "./SideMenu"
// import SideMenu from './SideMenu'
// function Navbar() {
//     const [openSideMenu, setOpenSideMenu] = useState(false)

//   return (
//     <div className='flex gap-5 bg-white border border-b-gray-200 backdrop:blur-2xl px-7 sticky top-0 z-30'>
//       <button className=' black lg:hidden text-black '
//       onClick={()=>{
//         setOpenSideMenu(!openSideMenu)
//       }}>
//         {
//             openSideMenu ? (
//                 <HiOutlineX className="text-2xl"/>
//             ) : (
//                 <HiOutLineMenu className = "text-2xl" />
//             )
//         }
      

//       </button>
//       <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
//       {
//         openSideMenu && (
//             <div className='top-[61px] -ml-4 bg-white'>
//                 <SideMenu active={activeMenu}/>
//             </div>
//         )
//       }
//     </div>
//   )
// }

// export default Navbar
// import React, { useState } from 'react'

// import { HiOutlineMenu } from 'react-icons/hi';
// // import { HiOutlineX } from 'react-icons/hi';
// import { HiOutlineX } from 'react-icons/hi';
// // import SideMenu from "./SideMenu"
// import SideMenu from './SideMenu'
// export default function Navbar() {
//     const [openSideMenu, setOpenSideMenu] = useState(false)

//     return (
//         <div className='flex gap-5 bg-white border border-b-gray-200 backdrop:blur-2xl px-7 sticky top-0 z-30'>
//             <button className=' black lg:hidden text-black '
//             onClick={()=>{
//                 setOpenSideMenu(!openSideMenu)
//             }}>
//                 {
//                     openSideMenu ? (
//                         <HiOutlineX className="text-2xl"/>
//                     ) : (
//                         <HiOutlineMenu className = "text-2xl" />
//                     )
//                 }
            

//             </button>
//             <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
//             {
//                 openSideMenu && (
//                     <div className='top-[61px] -ml-4 bg-white'>
//                         <SideMenu />
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import SideMenu from './SideMenu'

export default function Navbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-30 shadow-sm">
      {/* Left: Menu Icon (Mobile) */}
      <button
        className="lg:hidden text-gray-700 hover:text-black transition"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      {/* Center: Title */}
      <h2 className="text-lg font-semibold text-gray-800">Expense Tracker</h2>

      {/* Right: Placeholder for future icons or profile */}
      <div className="hidden lg:block"></div>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className="absolute top-[61px] left-0 w-64 bg-white shadow-md border-r border-gray-200">
          <SideMenu />
        </div>
      )}
    </div>
  )
}

