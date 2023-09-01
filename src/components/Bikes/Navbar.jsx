
import Sidebar from '@/components/Sidebar'
import Search from '@/app/assets/search.svg'
// import List from '@/app/assets/list.svg'
// import Grid from '@/app/assets/grid.svg'
import Filter from '@/app/assets/filter.svg'

import Image from 'next/image'
import BikeList from './BikeList'
export default function Navbar()
{
    return(
        <>
         <div className="flex">
        <Sidebar/>
        <div className="flex flex-col  px-4 w-full mt-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-row">
              <div className="pt-6 pl-6 pr-4 text-lg">
                Bikes
              </div>
             
              
             <div>
             <div className="flex">
             
             <Image src={Search} className='relative left-[30px] mt-4'/>
             
              <input
        type="text"
        className="pt-6 pr-4 w-[365px] h-[43px] border-[1px] border-searchColor mt-5 bg-bgColor"
      
   
      />
         
      </div>
 </div>
            </div>
           
            <div className="flex items-center pt-6 pr-6">


            <div className="w-[68px] h-[31px] border-[1px] border-addBlue p-3.5 mr-4 cursor-pointer">
       
    
              </div>

            <div className="w-[94px] h-[43px] border-[1px] border-searchColor p-3.5 mr-4 cursor-pointer">
            <div className="flex">
                     <Image src={Filter} className="mr-2 mb-4 cursor-pointer"/>
                     <span className="mr-4 mb-4 text-Grey cursor-pointer">Filter</span>
                </div>
              </div>
              <button className="bg-addBlue text-white rounded-md px-6 py-3 cursor-pointer">
                Add New Bike
              </button>
            
            </div>

    </div>
    <div className='w-[1296px] h-[44px] bg-bgWhite border-[1px] border-borderColor rounded mt-9'>

      <div className='flex mt-2'>
<div className='ml-[92px] text-Grey'>
Bike ID
</div>

<div className='ml-[57px] text-Grey'>
Bike Name
</div>

<div className='ml-[180px] text-Grey'>
Price/Day
</div>

<div className='ml-[89px] text-Grey'>
Bike type
</div>

<div className='ml-[91px] text-Grey'>
Availability
</div>

<div className='ml-[83px] text-Grey'>
Engine capacity
</div>

<div className='ml-[54px] text-Grey'>
Clutch type
</div>

      </div>
    </div>

<BikeList/>

        </div>
        

</div>


        </>
    )
}