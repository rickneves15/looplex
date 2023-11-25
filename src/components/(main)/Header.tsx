'use client'

import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-white overflow-hidden relative ">
      <Image
        src="https://source.unsplash.com/random/1920x1080"
        alt="image description"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute top-0 left-0 w-0 h-0 border-r-[60vw] border-r-transparent border-t-[250vw] border-t-white boder-solid" />
      <div className="absolute top-1/2 w-1/2 -translate-y-1/2 p-6">
        <h1 className="p-6 text-5xl lg:text-7xl font-light">Prepare-se para gerenciar seus usuários</h1>
        <p className="p-6 max-w-[80%]">
        A looplex oferece ferramentas fáceis de usar para ajudar a garantir que todos os seus usuários
          são gerenciados com a máxima consistência, segurança e eficiência.
        </p>
      </div>
    </header>
  )
}
