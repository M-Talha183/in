// import React from 'react'
// import { LuTrendingUpDown } from 'react-icons/lu'

// export default function AuthLayout({children}) {
//   return (
//     <div className='flex'>
//         <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
//           <h2 className='text-lg font-medium text-black '>Expense Tracker </h2>
//            {children}
//         </div>

//         <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
//             <div className='w-48 h-48 rounded-[40px] bg-purple-600 absolute top-7 left-8'/>
//             <div className='w-48 h-56 border[20px] border-fuchsia-600 absolute top-[30%] -right-0.5 '/>
//             <div className='w-48 h-48 rounded-[40px] bg-violet-600 absolute -bottom-7'/>

//             <div className='grid grid-cols-1 z-20'>
//                 <StatsInfoCard
//                 icon = {<LuTrendingUpDown/>}
//                 label = "Track Your Expenses"
//                 value = "430,000"
//                 color = "bg-primary"/>

//             </div>

//             <img src="Card2" 
//             className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15' alt="" />
//         </div>
//     </div>
//   )
// }

// const StatsInfoCard = ({icon,label,value,color}) => {
//   return (
//     <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md shadow-blue-400/10 mb-6 bg-white`}>
//       <div className={`w-12 h-12 flex items-center justify-center rounded-full ${color}`}>
//         {icon}
//       </div>
//       <div className='flex flex-col'>
//         <span className='text-sm text-gray-500'>{label}</span>
//         <span className='text-lg font-semibold'>{value}</span>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { LuTrendingUpDown } from 'react-icons/lu'

export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* LEFT SIDE (Form Section) */}
      <div className="flex flex-col justify-between w-full md:w-[60%] px-8 md:px-12 pt-10 pb-12 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-violet-700 tracking-wide">
            Expense Tracker
          </h2>
          <div className="hidden md:flex items-center gap-2 text-gray-500">
            <LuTrendingUpDown className="text-xl text-violet-600" />
            <span className="text-sm">Smart Finance</span>
          </div>
        </div>

        {/* Form Children */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <div className="w-full max-w-md">{children}</div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-10 md:mt-0">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE (Visual Section) */}
      <div className="hidden md:flex relative w-[40%] h-screen bg-violet-100 overflow-hidden items-center justify-center">
        {/* Background Shapes */}
        <div className="w-44 h-44 rounded-[40px] bg-purple-600 absolute top-8 left-8 opacity-80" />
        <div className="w-44 h-56 border-[10px] border-fuchsia-600 absolute top-[30%] -right-4 rounded-xl opacity-70" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-600 absolute -bottom-7 left-8 opacity-90" />

        {/* Stats Card */}
        <div className="z-20 bg-white/80 backdrop-blur-md shadow-lg p-6 rounded-2xl max-w-sm text-center">
          <StatsInfoCard
            icon={<LuTrendingUpDown className="text-xl text-white" />}
            label="Track Your Expenses"
            value="430,000 PKR"
            color="bg-violet-600"
          />
          <p className="text-sm text-gray-600 mt-4">
            Stay on top of your spending with beautiful visual insights.
          </p>
        </div>
      </div>
    </div>
  )
}

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg shadow-md bg-white">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${color} text-white`}
      >
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-lg font-semibold text-gray-800">{value}</span>
      </div>
    </div>
  )
}
