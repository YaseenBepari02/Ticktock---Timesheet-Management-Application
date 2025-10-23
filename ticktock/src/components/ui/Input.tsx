'use client';
import React from 'react';

export function Input({ label, error, ...props }: any) {
  return (
    <div>
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <input
        {...props}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
export default Input;
