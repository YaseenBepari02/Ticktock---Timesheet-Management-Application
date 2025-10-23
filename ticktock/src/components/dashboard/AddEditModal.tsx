'use client';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import type { TimesheetFormData, Timesheet } from '@/lib/types';

interface AddEditModalProps {
  timesheet: Timesheet | null;
  onClose: () => void;
  onSave: () => void;
}

export default function AddEditModal({
  timesheet,
  onClose,
  onSave,
}: AddEditModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TimesheetFormData>();

  useEffect(() => {
    if (timesheet) {
      reset({
        projectName: timesheet.entries?.[0]?.projectName || '',
        typeOfWork: '',
        description: timesheet.entries?.[0]?.description || '',
        hours: timesheet.entries?.[0]?.hours || 0,
      });
    }
  }, [timesheet, reset]);

  const onSubmit = async (data: TimesheetFormData) => {
    console.log('Form data:', data);
    onSave();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="relative z-50 bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {timesheet?.status === 'COMPLETED' ? 'View' : 'Add New'} Entry
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Project *
            </label>
            <select
              {...register('projectName', { required: 'Project is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Project Name</option>
              <option value="Homepage Development">
                Homepage Development
              </option>
              <option value="Backend API">Backend API</option>
            </select>
            {errors.projectName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.projectName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Work *
            </label>
            <select
              {...register('typeOfWork', {
                required: 'Type of work is required',
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Bug fixes</option>
              <option value="Feature">Feature Development</option>
              <option value="Testing">Testing</option>
            </select>
            {errors.typeOfWork && (
              <p className="mt-1 text-sm text-red-600">
                {errors.typeOfWork.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task description *
            </label>
            <textarea
              {...register('description', {
                required: 'Description is required',
              })}
              placeholder="Write text here ..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours *
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                -
              </button>
              <input
                {...register('hours', {
                  required: 'Hours is required',
                  min: { value: 0, message: 'Hours must be positive' },
                })}
                type="number"
                className="w-20 px-4 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                +
              </button>
            </div>
            {errors.hours && (
              <p className="mt-1 text-sm text-red-600">
                {errors.hours.message}
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
