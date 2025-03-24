'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SalaryHistoryTable = () => {
  const data = [
    { paymentDate: "Jan 31, 2024", yearMonth: "2024/01", baseSalary: "$3500", bonus: "$100", unpaidLeaves: 2, deductions: "$140", totalAmount: "$3460" },
    { paymentDate: "Dec 31, 2023", yearMonth: "2023/12", baseSalary: "$3300", bonus: "$200", unpaidLeaves: 1, deductions: "$70", totalAmount: "$3430" },
    { paymentDate: "Jan 31, 2024", yearMonth: "2023/12", baseSalary: "$3200", bonus: "$50", unpaidLeaves: 0, deductions: "$0", totalAmount: "$3250" },
    { paymentDate: "Jan 31, 2024", yearMonth: "2023/12", baseSalary: "$3500", bonus: "$400", unpaidLeaves: 0, deductions: "$0", totalAmount: "$3900" },
    { paymentDate: "Jan 31, 2024", yearMonth: "2023/12", baseSalary: "$3500", bonus: "$200", unpaidLeaves: 0, deductions: "$0", totalAmount: "$3900" },
    { paymentDate: "Jan 31, 2024", yearMonth: "2023/12", baseSalary: "$3500", bonus: "$200", unpaidLeaves: 0, deductions: "$0", totalAmount: "$3900" },
    { paymentDate: "Jan 31, 2024", yearMonth: "2023/12", baseSalary: "$3500", bonus: "$200", unpaidLeaves: 0, deductions: "$0", totalAmount: "$3900" },
    { paymentDate: "Jan 31, 2024", yearMonth: "2023/12", baseSalary: "$3500", bonus: "$200", unpaidLeaves: 0, deductions: "$0", totalAmount: "$3900" },
  ];

  const itemsPerPage = 8;
  const totalItems = 35;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-black rounded-2xl text-white border border-[#0D0D0D] pb-4 overflow-hidden">
      <div className="overflow-x-auto">
        {/* Wrapper div for border-radius effect */}
        <div className="rounded-t-2xl overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#0D0D0D]">
              <tr className="border-b border-gray-700 text-sm">
                <th className="py-3 px-4">Payment Date</th>
                <th className="py-3 px-4">Year/Month</th>
                <th className="py-3 px-4">Base Salary</th>
                <th className="py-3 px-4">Bonus</th>
                <th className="py-3 px-4">Unpaid Leaves</th>
                <th className="py-3 px-4">Deductions</th>
                <th className="py-3 px-4">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 px-4">{row.paymentDate}</td>
                  <td className="py-3 px-4">{row.yearMonth}</td>
                  <td className="py-3 px-4">{row.baseSalary}</td>
                  <td className="py-3 px-4">{row.bonus}</td>
                  <td className="py-3 px-4">{row.unpaidLeaves}</td>
                  <td className="py-3 px-4">{row.deductions}</td>
                  <td className="py-3 px-4">{row.totalAmount}</td>
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
    <ChevronLeft className="w-5 text-white"/>
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
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    >
     <ChevronRight className="w-5 text-white"/>
    </button>
  </div>
</div>

    </div>
  );
};

export default SalaryHistoryTable;
