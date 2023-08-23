import React from 'react'
import { Link } from 'react-router-dom'

function SuperAdmin() {
  return (
    <div>
    <div className="bg-green-800  pt-4 h-screen">
      <div className="flex  rounded-2xl mt-40 w-[60%] items-center h-[60vh]  m-auto">
        <div className="w-[50%] h-[100%] font-bold bg-green-400">Logo</div>

        <div className="w-[50%] gap-5 h-[100%] bg-white items-center flex flex-col justify-center">
            <div className='w-[85%] '>
        <h2 class="text-2xl font-bold mb-6 w-full ml-32">Login Super Admin</h2>
    <form className='  '>
        <div class="mb-4">
            <label for="username" class="block text-xl font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" class="mt-1 p-3 w-full border rounded-md"/>
        </div>
        <div class="mb-6">
            <label for="password" class="block text-xl font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" class="mt-1 p-3 w-full border rounded-md"/>
        </div>
        <div>
            <button type="submit" class="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
              <Link to="/super">
              Submit</Link>
</button>
        </div>
    </form>
    </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SuperAdmin
