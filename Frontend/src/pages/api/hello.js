// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server'
import connect from '../../../db'

export default async function hello() {
  try {
    await connect()
  } catch (error) {
    return new NextResponse('Internal Server Error' + error, { status: 500 })
  }
}
