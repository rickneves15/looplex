import { NextRequest, NextResponse } from 'next/server'
import { zfd } from 'zod-form-data'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

const schema = zfd.formData({
  avatar: zfd.text(z.string().url()),
  name: zfd.text(),
  email: zfd.text(),
  birth: zfd.text(),
})

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get('page')) || 1
  const limit = Number(request.nextUrl.searchParams.get('limit')) || 10

  const skip = (page - 1) * limit

  const users = await prisma.user.findMany({
    skip,
    take: limit,
  })

  const totalUsers = await prisma.user.count()

  const nextPage = skip + limit < totalUsers ? page + 1 : null
  const prevPage = page > 1 ? page - 1 : null

  return NextResponse.json({
    data: users,
    total: totalUsers,
    currentPage: page,
    nextPage,
    prevPage,
  })
}
export async function POST(request: Request) {
  const { avatar, name, email, birth } = schema.parse(await request.json())

  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (userExist) {
    return NextResponse.json(
      { message: 'Email already registered' },
      { status: 409 },
    )
  }

  const newUser = await prisma.user.create({
    data: {
      avatar,
      name,
      email,
      birth: new Date(birth),
    },
  })

  return NextResponse.json(newUser, { status: 201 })
}
