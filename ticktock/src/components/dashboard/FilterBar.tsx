"use client";

import React from "react";
import { StatusFilter, DateRangeFilter } from "@/lib/types";

interface FilterBarProps {
  statusFilter: StatusFilter;
  dateRangeFilter: DateRangeFilter;
  onStatusChange: (status: StatusFilter) => void;
  onDateRangeChange: (range: DateRangeFilter) => void;
}

export function FilterBar({
  statusFilter,
  dateRangeFilter,
  onStatusChange,
  onDateRangeChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <select
          value={dateRangeFilter}
          onChange={(e) => onDateRangeChange(e.target.value as DateRangeFilter)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="ALL">All Time</option>
          <option value="LAST_7_DAYS">Last 7 Days</option>
          <option value="LAST_30_DAYS">Last 30 Days</option>
          <option value="LAST_3_MONTHS">Last 3 Months</option>
        </select>
      </div>

      <div className="flex-1">
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="ALL">All Status</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
          <option value="MISSING">Missing</option>
        </select>
      </div>
    </div>
  );
}
