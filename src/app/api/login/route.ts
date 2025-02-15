import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === 'Hello' && password === 'World') {
    return NextResponse.json({ message: 'Login successful!', success: true });
  } else {
    return NextResponse.json({ message: 'Invalid credentials', success: false }, { status: 401 });
  }
}



