import Link from "next/link";
import { useState } from "react";
import { orders } from "../../dummy";

const RecentOrder = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="recent-order p-5 shadow-m mt-[44px] ">
            <div className="md:flex lg:flex justify-between items-center">
                <h1 className="lg:text-[24px] md:text-[24px] text-[20px] font-medium">Recent Orders</h1>
                <div className="flex">
                    <div className="relative inline-block text-left">
                        <div>
                            <button onClick={() => { show ? setShow(false) : setShow(true) }} type="button" className="inline-flex border border-[#8756EF] text-[#8756EF] rounded-md lg:px-4 px-2 text-[12px] md:px-4 md:py-2 lg:py-2 py-1 m-2 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Daily
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
                                    {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Monthly</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Yearly</a>

                                </div>
                            </div>
                            }
                    </div>

                    <Link href={'/manage-order'}
                        type="button"
                        className="border border-[#7845E7] bg-[#7845E7] text-white rounded-md lg:px-4 px-2 text-[12px] md:px-4 md:py-2 lg:py-2 py-1 m-2 transition duration-500 ease select-none hover:bg-[#7845E7] focus:outline-none focus:shadow-outline"
                    >
                        Show All
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto">
                <div className="w-full flex items-center justify-center  ">
                    <div className="w-full">
                        <div className="bg-white shadow-md rounded mt-2">
                            <table className="min-w-max w-full table-auto overflow-x-auto ">
                                <thead>
                                    <tr className=" text-[#959595] uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID ORDER</th>
                                        <th className="py-3 px-6 text-left">PRODUCT</th>
                                        <th className="py-3 px-6 text-center">CUSTOMER</th>
                                        <th className="py-3 px-6 text-center">DATE</th>
                                        <th className="py-3 px-6 text-center">PRICE</th>
                                        <th className="py-3 px-6 text-center">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light overflow-auto">
                                    {
                                        orders.map((pr) => {
                                            return (
                                                <tr key={pr.id} className="border-b border-gray-200 ">

                                                    <td className="py-3 px-6 text-left">
                                                        <h3 className="text-[#C5C5C5] text-[16px] font-medium">{pr.id}</h3>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <h3 className="text-[#1A1A1A] text-[16px] font-medium">{pr.product}</h3>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <h3 className="text-[#C5C5C5] text-[16px] font-medium">{pr.customar}</h3>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <h3 className="text-[#C5C5C5] text-[16px] font-medium">{pr.date}</h3>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <h3 className="text-[#1A1A1A] text-[16px] font-semibold">${pr.price}</h3>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <div className="flex items-center">

                                                            <div className={`${pr.status === "complete" && "dot-success"}
                                                            ${pr.status === "pending" && "dot-pending"}
                                                            ${pr.status === "progress" && "dot-progress"}
                                                            `}></div>
                                                            <h5 className={`${pr.status === "complete" && "success"}
                                                            ${pr.status === "pending" && "pending"}
                                                            ${pr.status === "progress" && "progress"} ml-2 text-[13.33px] capitalize`}>{pr.status}</h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecentOrder;


