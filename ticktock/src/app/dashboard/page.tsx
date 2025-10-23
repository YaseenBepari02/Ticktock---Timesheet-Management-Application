'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TimesheetTable from '@/components/dashboard/TimesheetTable';
import type { Timesheet } from '@/lib/types';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchTimesheets();
    }
  }, [status]);

  const fetchTimesheets = async () => {
    try {
      const response = await fetch('/api/timesheets');
      const data = await response.json();
      setTimesheets(data.timesheets || []);
    } catch (error) {
      console.error('Failed to fetch timesheets:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">ticktock</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {session?.user?.name}
              </span>
              <button
                onClick={() => router.push('/api/auth/signout')}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-blue-600 text-sm font-medium text-blue-600">
              Timesheets
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TimesheetTable
          timesheets={timesheets}
          onRefresh={fetchTimesheets}
        />
      </main>
    </div>
  );
}
