import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Welcome to the Thickening Plot API',
    status: 'The plot is thickening...',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
}
