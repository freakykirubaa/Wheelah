
// import Image1 from '@/app/assets/img1.svg'
// import Image2 from '@/app/assets/img2.svg'
// import Image3 from '@/app/assets/img3.svg'
// import Image4 from '@/app/assets/img4.svg'
// import Bicycle from '@/app/assets/bicycle.svg'
// import Notification from '@/app/assets/notifications.svg'
// import Person from '@/app/assets/person.svg'
// import Receipt from '@/app/assets/receipt.svg'
// import Image5 from '@/app/assets/img5.png'
// import Sunny from '@/app/assets/sunny.svg'

// import Image from 'next/image'


// export default function Sidebar()
// {
//     return(

    
// <>

// <div className="flex flex-col w-20 border-r border-borderBlue bg-sidebarColor h-[951px]">
//         <div className="px-4 pt-4 pb-5 flex-shrink-0 hover:bg-bgBlue"> 

//         <Image
//         src={Image1}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />
//         </div>



//     <div className="p-5 mt-[58px] hover:bg-bgBlue">
//     <Image
//         src={Image2}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />

//     </div>



// <div className="p-5 hover:bg-bgBlue">
// <Image
//         src={Image3}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />
// </div>


// <div className="p-5 hover:bg-bgBlue">


// <Image
//         src={Bicycle}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />
    
// </div>

// <div className="p-5 hover:bg-bgBlue">

// <Image
//       src={Person}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />
// </div>


// <div className="p-5 hover:bg-bgBlue">
// <Image
//            src={Receipt}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />
// </div>



// <div className="p-5 hover:bg-bgBlue">

// <Image
//         src={Image4}
//         className='cursor-pointer'
//         alt="Picture of the author"
//       />

// </div>


// <div className="p-5 hover:bg-bgBlue">

// <Image
//         src={Notification}
//         className='cursor-pointer'
       
//         alt="Picture of the author"
//       />

// </div>

// <div className="p-5 mt-[260px] hover:bg-bgBlue">

// <Image
//         src={Image5}
//         className='cursor-pointer'
       
//         alt="Picture of the author"
//       />

// </div>

// <div className="p-5 hover:bg-bgBlue">

// <Image
//         src={Sunny}
//         className='cursor-pointer'
       
//         alt="Picture of the author"
//       />

// </div>
// </div>

// </>

//     )}



'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from '@/app/assets/img1.svg';
import Image2 from '@/app/assets/img2.svg';
import Image3 from '@/app/assets/img3.svg';
import Image4 from '@/app/assets/img4.svg';
import Bicycle from '@/app/assets/bicycle.svg';
import Notification from '@/app/assets/notifications.svg';
import Person from '@/app/assets/person.svg';
import Receipt from '@/app/assets/receipt.svg';
import Image5 from '@/app/assets/img5.png';
import Sunny from '@/app/assets/sunny.svg';

export default function Sidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const handleSidebarMouseEnter = () => {
    setIsSidebarHovered(true);
  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarHovered(false);
  };

  return (
    <>
      <div
        className={`flex flex-col w-20 border-r border-borderBlue bg-sidebarColor transition-all duration-500 ease-in-out hover:w-[260px] ${
          isSidebarHovered ? 'w-[260px]' : 'w-20'
        }`}
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        <div className="px-4 pt-4 pb-5 flex-shrink-0 hover:bg-bgBlue flex">
          <Image src={Image1} className="cursor-pointer" alt="Image1" />
          {isSidebarHovered && (
           <div className="flex ml-4 cursor-pointer">
           <div className='text-lg'>Wheelah</div>
        </div>
          )}
        </div>

        <div className="p-5 mt-[58px] hover:bg-bgBlue flex">
          <Image src={Image2} className="cursor-pointer" alt="Image2" />
          {isSidebarHovered && (
             <div className="flex ml-4 cursor-pointer">
             <div className='text-Grey text-lg cursor-pointer'>DashBoard</div>
          </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image src={Image3} className="cursor-pointer" alt="Image3" />
          {isSidebarHovered && (
           <div className="flex ml-4 cursor-pointer">
           <div className='text-Grey text-lg cursor-pointer'>Schedule Ride</div>
        </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image src={Bicycle} className="cursor-pointer" alt="Bicycle" />
          {isSidebarHovered && (
          <div className="flex ml-4 cursor-pointer">
          <div className='text-Grey text-lg cursor-pointer'>Bikes</div>
       </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image src={Person} className="cursor-pointer" alt="Person" />
          {isSidebarHovered && (
           <div className="flex ml-4 cursor-pointer">
           <div className='text-Grey text-lg cursor-pointer'>Customers</div>
        </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image src={Receipt} className="cursor-pointer" alt="Receipt" />
          {isSidebarHovered && (
            <div className="flex ml-4 cursor-pointer">
            <div className='text-Grey text-lg cursor-pointer'>Red Notice</div>
         </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image src={Image4} className="cursor-pointer" alt="Image4" />
          {isSidebarHovered && (
              <div className="flex ml-4 cursor-pointer">
              <div className='text-Grey text-lg cursor-pointer'>Chats</div>
           </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image
            src={Notification}
            className="cursor-pointer"
            alt="Notification"
          />
          {isSidebarHovered && (
            <div className="flex ml-4 cursor-pointer">
               <div className='text-Grey text-lg cursor-pointer'>Notifications</div>
            </div>
          )}
        </div>

        <div className="p-5 mt-[260px] hover:bg-bgBlue flex">
          <Image src={Image5} className="cursor-pointer" alt="Image5" />
          {isSidebarHovered && (
          <div className="flex ml-4 cursor-pointer">
          <div className='text-lg'>Miles</div>
       </div>
          )}
        </div>

        <div className="p-5 hover:bg-bgBlue flex">
          <Image src={Sunny} className="cursor-pointer" alt="Sunny" />
          {isSidebarHovered && (
             <div className="flex ml-4 cursor-pointer">
             <div className='text-Grey text-lg cursor-pointer'>Light</div>
          </div>
          )}
        </div>
      </div>
    </>
  );
}
