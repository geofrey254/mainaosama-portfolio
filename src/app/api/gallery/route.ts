import config from '@/payload.config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

export async function GET() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: photos } = await payload.find({
    collection: 'gallery',
    depth: 2,
    limit: 100,
  })

  return NextResponse.json(photos)
}
