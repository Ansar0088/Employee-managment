'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Pencil, X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import LeaveHistoryTable from './leave-history-table';
import SalarlyHistoryTable from './salarly-history-table';
import EditEmployeeModal from './EditEmployeeModal';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('Contract History');

    const contracts = [
        {
            name: "1 Year UI/UX Contract",
            duration: "2 Years",
            period: "02/2023 - 01/2024",
            status: "Active",
        },
        {
            name: "1 Year UI/UX Contract",
            duration: "2 Years",
            period: "02/2023 - 01/2024",
            status: "Expired",
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tabs = ['Contract History', 'Salary History', 'Leave History', 'Message'];

    return (
        <div className="bg-black  text-white min-h-screen flex items-center justify-center p-4">
            <div className="bg-black border-2 border-gray-800 rounded-lg w-full relative">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-800">
                    <div className='h-1 w-14 bg-[#D3FF1F] absolute top-0'></div>

                    <p className="text-xl font-medium">Employee Details</p>
                    <button className="text-gray-400">
                        <X />
                    </button>
                </div>

                {/* Employee Basic Info */}
                <div className="p-4 border-b border-gray-800 flex flex-col sm:flex-row items-center sm:items-center justify-between bg-black text-white   w-full sm:w-auto">
                    {/* Profile Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                        <Image src="/employee.svg" alt="profile" width={40} height={40} className="mx-auto sm:mx-0" />
                        <div>
                            <div className="font-medium text-base">Janny Adastier</div>
                            <div className="text-xs text-gray-400">UI/UX Designer</div>
                        </div>
                        <div className="bg-[#D3FF1F33] text-xs text-[#D3FF1F] px-2 py-0.5 rounded-full">
                            Active
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full sm:w-auto text-center sm:text-left mt-4 sm:mt-0">
                        <div>
                            <span className="text-gray-400 text-sm font-bold">Position</span> <br />
                            <span>UI/UX Designer</span>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm font-bold">Start of cooperation</span> <br />
                            <span>Since July, 2022</span>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm font-bold">Working status</span> <br />
                            <div className="bg-[#FFA51F33] text-xs text-[#FFA51F] px-2 py-0.5 rounded-full inline-block">
                                On Leave
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto mt-4 sm:mt-0">
        <button 
          className="bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1 w-full sm:w-auto"
          onClick={() => setIsModalOpen(true)}
        >
          <Pencil className='w-3' /> Edit
        </button>
        <button className="bg-[#D3FF1F] text-black px-3 py-1.5 rounded-md text-sm font-medium w-full sm:w-auto">
          Send Email
        </button>
      </div>

      {/* Modal */}
      <EditEmployeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
                </div>
                {/* Tabs */}
                <div className="border- border-gray-800 ml-3 mt-4">
                    <div className="flex overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm whitespace-nowrap mb-3 cursor-pointer ${activeTab === tab
                                    ? ' bg-[#FFFFFF1A] rounded-md text-white text-sm'
                                    : 'text-gray-400'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}

                    </div>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Column - Tab Content */}
                    <div className="p-4 lg:w-full lg:border-r lg:border-gray-800">
                        {activeTab === 'Contract History' && (
                            <div className="space-y-4">
                                {contracts.map((contract, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-800 rounded-lg bg-black"
                                    >
                                        {/* Table Header */}
                                        <div className="grid grid-cols-4 text-gray-400 text-xs font-medium pb-2  py-4 border-b bg-[#0D0D0D] rounded-tl-xl rounded-tr-xl border-gray-700">
                                            <span className="pl-2">Contract Name</span>
                                            <span className="text-center">Contract Duration</span>
                                            <span className="text-center">Status</span>
                                            <span className="text-right pr-2">Action</span>
                                        </div>

                                        {/* Contract Details */}
                                        <div className="grid grid-cols-4 items-center py-3 text-white text-sm">
                                            {/* Contract Name */}
                                            <div className="pl-2 text-base font-normal">{contract.name}</div>

                                            {/* Contract Duration */}
                                            <div className="text-center">
                                                <Progress value={80} className="bg-red-500 h-2 w-full mx-auto rounded" />
                                                <div className="flex justify-between items-center mt-2">
                                                    <p className="text-[#FFFFFFCC] text-sm">{contract.duration}</p>
                                                    <p className="text-[#FFFFFFCC] text-xs">{contract.period}</p>
                                                </div>
                                            </div>

                                            {/* Status Badge */}
                                            <div className="text-center">
                                                {contract.status === "Active" ? (
                                                    <Badge className="bg-[#D3FF1F33] text-[#D3FF1F] px-2 py-0.5 rounded-md text-xs">
                                                        Active
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-[#FF4B4B33] text-[#FF4B4B] px-2 py-0.5 rounded-md text-xs">
                                                        Expired
                                                    </Badge>
                                                )}
                                            </div>

                                            {/* Action Button */}
                                            <div className="text-right pr-2">
                                                <Button className="bg-[#1F1F1F] text-gray-300 px-4 py-1 rounded-md text-xs">
                                                    Download
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'Salary History' && (
                            <div>
                                <SalarlyHistoryTable />
                            </div>
                        )}

                        {activeTab === 'Leave History' && (
                            <div>
                                <LeaveHistoryTable />
                            </div>
                        )}

                        {activeTab === 'Message' && (
                            <div className="text-center py-8 text-gray-400">Messages will appear here</div>
                        )}
                    </div>

                    {/* Right Column - Personal Information */}
                    <div className=" p-6 max-w-md">
                        {/* Personal Information Section */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-4">Personal Information</h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Email Address</div>
                                    <div>MyEmailInfo@gmail.com</div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Street Address</div>
                                    <div className="flex items-center gap-2">
                                        HOME_OFFICE <span className=""><Copy className='w-4' /></span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Phone Number</div>
                                    <div>+971 0953 552 55</div>
                                </div>
                            </div>
                        </div>

                        {/* Employee Status Section */}
                        <div className="border-t border-gray-800 pt-4">
                            <h3 className="font-medium mb-4">Employee Status</h3>

                            <div>
                                <div className="flex flex-col gap-2 my-4">
                                    {/* Status Toggle */}
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-gray-400 text-sm">Status:</span>
                                        <Switch className='bg-black' />
                                    </div>

                                    {/* Note Input Box */}
                                    <div className="p-2 border border-[#D3FF1F33] bg-[#7B99001A] rounded-md ">
                                        <span className="text-[#D3FF1F] text-xs">Write reason or write note to Employee</span>
                                        <input
                                            type="text"
                                            placeholder="Note"
                                            className="w-full mt-1 bg-black text-gray-300 text-sm p-2 rounded-md focus:outline-none "
                                        />
                                    </div>
                                </div>

                                <button className="bg-[#D3FF1F] text-black w-full py-2 cursor-pointer rounded-2xl font-medium">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomePage
