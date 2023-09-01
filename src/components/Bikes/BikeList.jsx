

import Image from 'next/image';
import Gixer from '@/app/assets/Gixer.png';
import Horizontal from '@/app/assets/horizontal.svg';

const bikeItems = [
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  {
    id: 'ID12865',
    name: 'Suzuki Gixer',
    price: '50$',
    type: 'Motor Cycle',
    status: 'Booked',
    engine: 'Engine 001',
    clutch: 'Half Clutch',
  },
  // Add more items here
];

export default function BikeList() {
    return (
      <>
        {bikeItems.map((bike, index) => (
          <div key={index} className="mt-4 w-[1296px] h-[72px] bg-pureWhite rounded">
            <div className="flex">
              <div className="ml-5 mt-6">
                <Image src={Gixer} />
              </div>
              <div className="ml-8 bg-lightBlue mt-6">
                <p className="text-lg text-addBlue">{bike.id}</p>
              </div>
              <div className="ml-10 mt-6">{bike.name}</div>
              <div className="ml-[178px] mt-6">{bike.price}</div>
              <div className="ml-[118px] mt-6">{bike.type}</div>
              <div className="ml-[78px] mt-6">{bike.status}</div>
              <div className="ml-[118px] mt-6">{bike.engine}</div>
              <div className="ml-[78px] mt-6">{bike.clutch}</div>
              <div className="ml-10 mt-6">
                <Image src={Horizontal} className='cursor-pointer'/>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }