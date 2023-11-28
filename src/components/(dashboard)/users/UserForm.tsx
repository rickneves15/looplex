'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import Form from '@rjsf/antd'
import { RJSFSchema, RegistryWidgetsType, UiSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import { useMutation, useQueryClient } from 'react-query'
import { redirect } from 'next/navigation'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import { FileUploadWidget } from '@/components/(dashboard)/widgets/FileUploadWidget'
import { createUser } from '@/services/user'

export function UserForm() {
  const schema: RJSFSchema = {
    type: 'object',
    properties: {
      avatar: {
        type: 'string',
        title: 'Avatar',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      email: {
        type: 'string',
        format: 'email',
        title: 'Email',
      },
      birth: {
        type: 'string',
        format: 'date',
        title: 'Data de Nascimento',
      },
    },
  }

  const uiSchema: UiSchema = {
    avatar: {
      'ui:widget': 'fileUploadWidget',
    },
    email: {
      'ui:widget': 'email',
      'ui:title': 'Email',
      'ui:options': {
        inputType: 'Email',
      },
    },
    birth: {
      'ui:widget': 'date',
      'ui:options': {
        inputType: 'date',
      },
    },
  }

  const widgets: RegistryWidgetsType = {
    fileUploadWidget: FileUploadWidget,
  }

  const queryClient = useQueryClient()
  const { mutate: newUser } = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      redirect('/dashboard/users')
    },
  })

  const onSubmit = ({ formData }: unknown, _) => newUser(formData)

  return (
    <StyleProvider>
      <div className="w-full h-full flex flex-col gap-y-4">
        <Button
          href="/dashboard/new-user"
          className="self-start"
          icon={<ArrowLeftOutlined />}
        >
          Voltar
        </Button>
        <Form
          onSubmit={onSubmit}
          schema={schema}
          uiSchema={uiSchema}
          validator={validator}
          liveValidate
          showErrorList={false}
          widgets={widgets}
        />
      </div>
    </StyleProvider>
  )
}
