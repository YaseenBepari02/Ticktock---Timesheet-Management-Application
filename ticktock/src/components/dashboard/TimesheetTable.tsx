'use client';

import { useState } from 'react';
import type { Timesheet } from '@/lib/types';
import AddEditModal from './AddEditModal';

interface TimesheetTableProps {
  timesheets: Timesheet[];
  onRefresh: () => void;
}

export default function TimesheetTable({
  timesheets,
  onRefresh,
}: TimesheetTableProps) {
  const [selectedTimesheet, setSelectedTimesheet] = useState<Timesheet | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'INCOMPLETE':
        return 'bg-yellow-100 text-yellow-800';
      case 'MISSING':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTimesheets = timesheets.filter((ts) => {
    if (statusFilter && ts.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Your Timesheets
        </h2>

        <div className="flex gap-4">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Date Range</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Status</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
            <option value="MISSING">Missing</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Week #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTimesheets.map((timesheet) => (
              <tr key={timesheet.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {timesheet.weekNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {timesheet.dateRange}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      timesheet.status
                    )}`}
                  >
                    {timesheet.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {timesheet.status === 'COMPLETED' ? (
                    <button
                      onClick={() => {
                        setSelectedTimesheet(timesheet);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      View
                    </button>
                  ) : timesheet.status === 'INCOMPLETE' ? (
                    <button
                      onClick={() => {
                        setSelectedTimesheet(timesheet);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedTimesheet(timesheet);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      Create
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          5 per page
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 text-sm border border-gray-300 rounded ${
                page === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {isModalOpen && (
        <AddEditModal
          timesheet={selectedTimesheet}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTimesheet(null);
          }}
          onSave={() => {
            onRefresh();
            setIsModalOpen(false);
            setSelectedTimesheet(null);
          }}
        />
      )}
    </div>
  );
}
