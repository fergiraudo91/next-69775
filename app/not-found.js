'use client';
import React from 'react'
import Button from './components/Button'
import { useRouter } from 'next/navigation'


const NotFound = () => {
    const router = useRouter();
  return (
    <>
    <h1>Pagina no encontrada</h1>
    <Button onClick={() => router.back()} className='p-3'>Volver hacia atras</Button>
    </>
  )
}

export default NotFound