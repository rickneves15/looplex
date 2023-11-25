'use client'
import { Flex, Typography } from 'antd';
import Image from 'next/image'

const {Title, Paragraph} = Typography

export function Content() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col gap-y-4 items-center md:flex-row p-6"> 
            <div className="w-1/2">
              <div className="overflow-hidden max-w-[80%]">
                <div className="overflow-hidden h-full w-[130%] -rotate-90">
                  <Image 
                    src="https://source.unsplash.com/random/1920x1080?"
                    alt="Controle e gerencie seus usuários em um só lugar" 
                    title="Controle e gerencie seus usuários em um só lugar"
                    className="rotate-45  max-w-full"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col">
              <Title>Controle e gerencie seus usuários em um só lugar</Title>
              <Paragraph>Facilite o gerenciamento de usuários com o looplex. Seus usuários terão acesso seguro e você poderá monitorar e controlar a atividade do usuário a partir de um local centralizado.</Paragraph>
            </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-y-4 items-center p-6">
          <Title>Características</Title>
          <div className="flex flex-wrap items-center justify-center md:flex-row gap-x-2">
            <div className="flex flex-col w-full md:w-[30%] text-center">
                <img 
                  src="https://source.unsplash.com/random/1920x1080?"
                  alt="Acesso seguro" 
                  title="Acesso seguro"
                  className="shrink-0 w-full flex-1"
                  
                />
              <Title level={3} className="mt-4">Acesso seguro</Title>
              <Paragraph>Ganhe confiança sabendo que seu sistema possui controle de acesso seguro com autenticação de dois fatores e outras medidas de segurança.</Paragraph>
            </div>
            
            <div className="flex flex-col w-full md:w-[30%] text-center">
                <img 
                  src="https://source.unsplash.com/random/1920x1080?"
                  alt="Construção de perfil" 
                  title="Construção de perfil"
                  className="shrink-0 w-full flex-1"
                  
                />
              <Title level={3} className="mt-4">Construção de perfil</Title>
              <Paragraph>Permita que os usuários personalizem rapidamente seus perfis e gerenciem os detalhes de suas contas de maneira segura e fácil de usar.</Paragraph>
            </div>
            
            <div className="flex flex-col w-full md:w-[30%] text-center">
                <img 
                  src="https://source.unsplash.com/random/1920x1080?"
                  alt="Painel robusto" 
                  title="Painel robusto"
                  className="shrink-0 w-full flex-1"
                  
                />
              <Title level={3} className="mt-4">Painel robusto</Title>
              <Paragraph>Monitore a atividade do usuário em tempo real e garanta que o painel esteja sempre atualizado.</Paragraph>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
