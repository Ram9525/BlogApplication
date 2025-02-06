import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/authSlice'
import {useDispatch, useSelector} from 'react-redux'
import { setLoading } from '../../Store/loadingSlice'

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
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer'>
            Logout
    </button>
  )
}

export default LogoutBtn