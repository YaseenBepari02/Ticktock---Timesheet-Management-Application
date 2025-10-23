import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { mockTimesheets } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userTimesheets = mockTimesheets.filter(
    (ts) => ts.userId === session.user.id
  );
  return NextResponse.json({ timesheets: userTimesheets }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const newTimesheet = {
      id: `ts-${Date.now()}`,
      ...body,
      userId: session.user.id,
    };
    return NextResponse.json(
      { timesheet: newTimesheet, message: 'Timesheet created' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
