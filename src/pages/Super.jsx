import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Super = () => {
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
      setShowTable(!showTable);
    };
  return (
    <div>
    <Header />


    <div className="grid grid-cols-6">

    <div className=" h-full hidden md:block"><SideBar/></div>
    <div className="col-span-6 md:col-span-5 ">
    

   <div class="bg-gray-10 p-6 h-[29rem] ">
    <span className='font-semibold text-2xl'>Welcome Super Admin !!</span>
    <div class="w-full h-full mx-auto bg-white p-4 rounded-lg shadow-xl">
        <span className='font-semibold text-xl '>Admin List :</span>
        <table class="table-auto w-full">
            <thead>
            <tr>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 1</th>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 2</th>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 3</th>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 3</th>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-500 h-12 text-xl px-4 py-5">Row 1, Cell 1</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 1, Cell 2</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 1, Cell 3</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 1, Cell 4</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5"><a className="cursor-pointer" onClick={toggleTable} >view</a></td>
                </tr>
                <tr>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 2, Cell 1</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 2, Cell 2</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 2, Cell 3</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 2, Cell 4</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5"><a className="cursor-pointer" onClick={toggleTable} >view</a></td>
                </tr>
                <tr>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 3, Cell 1</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 3, Cell 2</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 3, Cell 3</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 3, Cell 4</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5"><a className="cursor-pointer" onClick={toggleTable} >view</a></td>
                </tr>
                <tr>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 2</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 3</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 4</td>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5"><a className="cursor-pointer" onClick={toggleTable} >view</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    {   showTable && (
   <div class="bg-gray-10 p-6 h-[29rem] border-gray-500 ">
    <div class="w-full h-full mx-auto bg-white p-4 rounded-lg  shadow-xl">
        <span className='font-semibold text-xl '>User List :</span>
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 1</th>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 2</th>
                    <th class="border-gray-500 border h-10 px-4 py-2">Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                    
                </tr>
                <tr>
                    <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                </tr>
                <tr>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                </tr>
                <tr>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                </tr>
                <tr>
                   <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                <td class="border text-xl border-gray-500 h-12  px-4 py-5">Row 4, Cell 1</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
)
        
}

  </div>
    </div>


    </div>
  )
}

export default Super
