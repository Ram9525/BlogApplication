import React, {useId} from 'react'

const Input = ({ref,label,type='text',classname='',...props}) => {
    const id=useId()

  return (
    <div className='w-full'>
      {label&&<label className='inline-block mb-1 pl-1 text-gray-300' htmlFor={id}>{label}</label>}
      <input 
        type={type} 
        className={`px-3 py-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-500 outline-none focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 duration-200 border border-gray-600 w-full ${classname}`} 
        ref={ref} 
        {...props} 
        id={id} 
      />
    </div>
  )
}

export default Input