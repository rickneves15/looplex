'use client'

import { Button, Table } from 'antd'
import { useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PlusOutlined } from '@ant-design/icons'

import { ListUsersResponse, listUsers } from '@/services/user'

export function UserList() {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)

  const {
    data: result,
    isLoading,
    isError,
    isPreviousData,
  } = useQuery<ListUsersResponse, Error>({
    queryKey: ['users', page],
    queryFn: () => listUsers(page),
    keepPreviousData: true,
    staleTime: 5000,
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Birth',
      dataIndex: 'birth',
      key: 'birth',
    },
  ]

  useEffect(() => {
    if (!isPreviousData) {
      queryClient.prefetchQuery({
        queryKey: ['users', page + 1],
        queryFn: () => listUsers(page + 1),
      })
    }
  }, [result, isPreviousData, page, queryClient])

  if (isError) {
    return <div>Algo deu de errado</div>
  }

  if (!result || !result.data) {
    return <div>Nenhum usuário cadastrado.</div>
  }

  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-4">
      <Button
        href="/dashboard/new-user"
        className="self-center"
        icon={<PlusOutlined />}
      >
        Novo Usuário
      </Button>
      <Table
        className="w-full h-full"
        loading={isLoading}
        columns={columns}
        dataSource={result.data}
        bordered
        pagination={{
          pageSize: 10,
          total: result.totals,
          onChange: (page) => {
            setPage(page)
          },
        }}
      />
    </div>
  )
}
