
import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const Satisfaction = () => {

    const data = [
        { name: 'Group A', value: 640 },
        { name: 'Group B', value: 400 },
        { name: 'Group C', value: 120 },
    ];

    const COLORS = ['#8756EF', '#49DA57', '#FECC4A', ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const [show, setShow] = useState(false)
    return (
        <div className="w-full satisfaction  mt-10 shadow-m overflow-hidden p-3">
            <div className='flex justify-between items-center mb-5'>
                <h1 className="text-[24px] font-medium">Customar Satisfaction</h1>

                <div className="relative inline-block text-left">
                    <div>
                        <button onClick={() => { show ? setShow(false) : setShow(true) }} type="button" className="inline-flex border border-[#8756EF] text-[#8756EF] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline" id="menu-button" aria-expanded="true" aria-haspopup="true">
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
            <div className='flex analytic w-full h-[300px] items-center justify-between'>
                <ResponsiveContainer width="60%" height="60%">
                    <PieChart width={200} height={200}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='pl-4 mr-10'>
                    <h2 className='flex items-center text-center text-[18.67px] w-full justify-between'>
                        <span className='mr-6 text-[#C5C5C5]'>Review</span>
                        <span className='primary font-bold '>2,304</span>
                    </h2>
                    <h2 className='flex items-center mt-2 text-center text-[18.67px] w-full justify-between'>
                        <span className='primary font-bold '>56%</span>
                        <span className='ml-6 text-[#C5C5C5]'>Excellent</span>
                    </h2>
                    <h2 className='flex items-center mt-2 text-center text-[18.67px] w-full justify-between'>
                        <span className='success font-bold '>34%</span>
                        <span className='ml-6  text-[#C5C5C5]'>Good</span>
                    </h2>
                    <h2 className='flex items-center mt-2 text-center text-[18.67px] w-full justify-between'>
                        <span className='progress font-bold '>10%</span>
                        <span className='ml-6  text-[#C5C5C5]'>Poor</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Satisfaction;

