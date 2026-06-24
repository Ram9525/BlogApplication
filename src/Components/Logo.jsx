import React from 'react'
import { Feather } from 'lucide-react'

const Logo = ({width='50px'}) => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
      <Feather className="text-white" size={24} />
    </div>
  )
}

export default Logo