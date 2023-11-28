import axiosInstance from '@/lib/axios'

interface User {
  id: string
  avatar: string
  name: string
  email: string
  birth: string
}

export interface ListUsersResponse {
  data: User[]
  totals: number
  currentPage: number
  nextPage: number | null
  prevPage: number | null
}

export interface uploadAvatarResponse {
  data: {
    Location: string
  }
}

export const listUsers = async (page: number): Promise<ListUsersResponse> => {
  const response = await axiosInstance.get(`/users?page=${page}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data
}

export const createUser = async (userData: User): Promise<User> => {
  const response = await axiosInstance.post('/users', userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data
}

export const uploadAvatar = async (
  file: File,
): Promise<uploadAvatarResponse> => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await axiosInstance.post('/avatar/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}
