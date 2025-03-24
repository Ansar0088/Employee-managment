"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const LeaveHistoryTable = () => {
  const data = [
    {
      leaveType: "Medical Leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 2,
      workStatus: "Pending",
    },
    {
      leaveType: "Casual leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 0,
      workStatus: "Rejected",
    },
    {
      leaveType: "Medical Leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 1,
      workStatus: "Approved",
    },
    {
      leaveType: "Medical Leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 3,
      workStatus: "Approved",
    },
    {
      leaveType: "Medical Leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 2,
      workStatus: "Approved",
    },
    {
      leaveType: "Casual leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 2,
      workStatus: "Approved",
    },
    {
      leaveType: "Medical Leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 2,
      workStatus: "Approved",
    },
    {
      leaveType: "Casual leave",
      leaveFrom: "04/01/2024",
      leaveTo: "04/01/2024",
      numberOfLeaves: 2,
      workStatus: "Approved",
    },
  ];

  const itemsPerPage = 8;
  const totalItems = 24;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Pending: "bg-[#FFB41F33] text-[#FFB41F] rounded-6xl border border-[#FFB41F]",
      Rejected: "bg-[#FF4B4B33] text-[#FF4B4B] border border-[#FF4B4B]",
      Approved: "bg-[#D3FF1F33] text-[#D3FF1F] border border-[#D3FF1F]",
    };

    return (
      <span
        className={`px-3 py-1 text-sm font-semibold rounded-md ${colors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-black rounded-2xl text-white border border-[#0D0D0D] pb-4 overflow-hidden">
      <div className="overflow-x-auto">
        <div className="rounded-t-2xl overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#0D0D0D]">
              <tr className="border-b border-gray-700 text-sm">
                <th className="py-3 px-4">Leave Type</th>
                <th className="py-3 px-4">Leave From</th>
                <th className="py-3 px-4">Leave To</th>
                <th className="py-3 px-4">Number Of Leaves</th>
                <th className="py-3 px-4">Work Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 px-4">{row.leaveType}</td>
                  <td className="py-3 px-4">{row.leaveFrom}</td>
                  <td className="py-3 px-4">{row.leaveTo}</td>
                  <td className="py-3 px-4">{row.numberOfLeaves}</td>
                  <td className="py-3 px-4">{getStatusBadge(row.workStatus)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-4">
        <span className="text-gray-400 text-sm">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
        </span>
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            className="w-8 h-8 flex items-center justify-center bg-[#191919] rounded-md text-gray-400 hover:bg-gray-700 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <ChevronLeft className="w-5 text-white" />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, "...", totalPages].map((page, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === page
                  ? "bg-white text-black font-semibold"
                  : "text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="w-8 h-8 flex items-center justify-center bg-[#141414] rounded-md text-gray-400 hover:bg-gray-700 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <ChevronRight className="w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistoryTable;
