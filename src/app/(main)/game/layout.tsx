'use client'

import Navbar from '@/components/navbar'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const GameLayout = ({ children }: Props) => {
  const route = usePathname();

  return (
    <>
      <Navbar activeRoute={route} />
      {children}
    </>
  )
}

export default GameLayout