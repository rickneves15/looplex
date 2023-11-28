import { S3Client } from '@aws-sdk/client-s3'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { Upload } from '@aws-sdk/lib-storage'

import process from 'process'

// @ts-ignore
const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
})

const getExtension = (str: string) => str.slice(str.lastIndexOf('.'))

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('avatar') as File
    // const file = data[1] as File

    if (!file) {
      return NextResponse.json({ message: 'Invalid file' }, { status: 400 })
    }

    const buffer = await file.arrayBuffer()

    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: `${uuidv4()}${getExtension(file.name)}`,
      Body: Buffer.from(buffer),
      ContentType: file.type,
    }

    const upload = new Upload({
      client: s3,
      params,
    })

    upload.on('httpUploadProgress', (progress) => {
      console.log(progress)
    })

    const response = await upload.done()

    return NextResponse.json({ location: response.Location }, { status: 201 })
  } catch (error) {
    console.log(error)
  }
}
