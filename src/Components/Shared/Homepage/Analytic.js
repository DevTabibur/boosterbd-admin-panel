
import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Analytic = () => {

    const data = [
        {
            name: 'Mo',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Tu',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'We',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Th',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Fr',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Sa',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Su',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const [show, setShow] = useState(false)
    return (
        <div className="w-full h-[400px] shadow-m overflow-hidden p-3">
            <div className='flex justify-between items-center mb-5'>
                <h1 className="lg:text-[24px] md:text-[24px] text-[20px] font-medium">Analytic</h1>

                <div className="relative inline-block text-left">
                    <div>
                        <button onClick={() => { show ? setShow(false) : setShow(true) }} type="button" className="inline-flex border border-[#8756EF] text-[#8756EF] rounded-md lg:px-4 px-2 text-[12px] md:px-4 md:py-2 lg:py-2 py-1 m-2 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Last Week
                            {/* Heroicon name: mini/chevron-down */}
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {
                        show &&
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">

                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Last Month</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Last year</a>

                            </div>
                        </div>
                    }
                </div>
            </div>

            <ResponsiveContainer width="100%" height="76%">
                <LineChart width={200} height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
                    <Tooltip />
                    <XAxis dataKey="name" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Analytic;

