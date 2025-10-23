'use client';
import React from 'react';

export function Button({ children, loading, className='', ...props }: any) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 bg-primary text-white ${className}`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
export default Button;
