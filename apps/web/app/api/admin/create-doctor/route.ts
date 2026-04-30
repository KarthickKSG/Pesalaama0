import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '../../../../lib/firebaseAdmin';

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();
    const user = await adminAuth.createUser({ email, password, displayName: name });
    await adminDb.collection('users').doc(user.uid).set({ email, name, role: 'doctor', createdAt: new Date().toISOString() });
    return NextResponse.json({ message: 'Doctor account created', uid: user.uid });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
