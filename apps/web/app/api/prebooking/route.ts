import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '../../../lib/firebaseAdmin';
export async function POST(req: NextRequest){
  const payload = await req.json();
  const ref = await adminDb.collection('prebookings').add({...payload, status:'pending', createdAt:new Date().toISOString()});
  return NextResponse.json({id: ref.id});
}
