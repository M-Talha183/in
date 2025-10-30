// import React, { useContext } from 'react'
// import { SIDE_MENU_DATA } from '../../utils/data'
// import { UserContext } from '../../contaxt/UserContact'
// import { useNavigate } from 'react-router-dom'
// function SideMenu({activeMenu}) {
//     const {user,clearUser} = useContext(UserContext)
//     const navigate = useNavigate()

//     const handleClick = (route) =>{
//         if (route === "logout"){
//             handleLogout()
//             return
//         }
//         navigate(route)
//     };
//     const handleLogout = ()=>{
//         localStorage.clear();
//         clearUser()
//         navigate("/login")
//     }

//   return (
//     <div className=''>
//         <div className=''>
//             {
//                 user ?.profileImageUrl ?(
//                     <img src={user?.profileImageUrl || ""} 
//                     alt="profile image "
//                     className=''
//                      /> ) :(<></>)
                
//             }
//             <h5>
//                 {user?.fullName || ""}
//             </h5>
//         </div>
//           {SIDE_MENU_DATA.map((item,index)=>(
//     <button
//     key={`menu_${index}`}
//     className={`w-full flex items-center gap-4 text-[15px] ${
//         activeMenu == item.label ? "text-white bg-primary"

//     }py-3 px-6 rounded-lg`}
//     onClick={()=> handleClick(item.path)}>
//     <item.icon className=''/>{item.label}

//     </button>
//   ))}

//     </div>

//   )

// }

// export default SideMenu



import { useContext } from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import { UserContext } from '../../contaxt/UserContact'
import { useNavigate } from 'react-router-dom'
import CharAvatar from '../../components/Cards/CharAvatar'

function SideMenu({ activeMenu }) {
  const { user, clearUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout()
      return
    }
    navigate(route)
  }

  const handleLogout = () => {
    localStorage.clear()
    clearUser()
    navigate('/login')
  }

  return (
    <div className='w-64 bg-white h-[calc(100vh-61px)] border-r border-gray-200 p-5 sticky top-[61px] z-20 flex flex-col justify-between'>
      {/* --- Profile Section --- */}
      <div>
        <div className='flex flex-col items-center justify-center gap-3 mb-8'>
          {user?.profileImageUrl ? (
            <img
              src={user?.profileImageUrl || ''}
              alt='profile'
              className='w-20 h-20 rounded-full border-2 border-violet-500 shadow-md object-cover'
            />
          ) : (
            <CharAvatar
              fullName={user?.fullName}
              width='w-20'
              height='h-20'
              style='text-xl'
            />
          )}
          <h5 className='text-gray-900 font-semibold text-base'>
            {user?.fullName || 'User'}
          </h5>
          <p className='text-gray-500 text-sm'>{user?.email || ''}</p>
        </div>

        {/* --- Menu Buttons --- */}
        <div className='flex flex-col gap-2'>
          {SIDE_MENU_DATA.map((item, index) => (
            <button
              key={`menu_${index}`}
              onClick={() => handleClick(item.path)}
              className={`flex items-center gap-3 w-full px-5 py-3 text-[15px] rounded-lg transition-all duration-200
                ${
                  activeMenu === item.label
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-violet-100 hover:text-violet-700'
                }`}
            >
              <item.icon className='text-xl' />
              <span className='font-medium'>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Logout Button --- */}
      <button
        onClick={handleLogout}
        className='mt-5 flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 transition-all py-2 rounded-lg font-medium border border-red-200'
      >
        Logout
      </button>
    </div>
  )
}

export default SideMenu
