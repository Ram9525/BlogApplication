import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/authSlice'
import {useDispatch, useSelector} from 'react-redux'
import { setLoading } from '../../Store/loadingSlice'
import { LogOut } from 'lucide-react'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const loading= useSelector(state=>state.loader.loading)
    const logoutHandler=()=>{
        dispatch(setLoading(true))
        authService.logout().then(()=>{
            dispatch(logout())
            dispatch(setLoading(false))
        })
        
    }
  return (
    <button onClick={logoutHandler}
    className='flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-medium rounded-lg transition-all duration-200 hover:bg-red-600 hover:shadow-lg transform hover:scale-105 cursor-pointer'>
        <LogOut size={18} />
        Logout
    </button>
  )
}

export default LogoutBtn