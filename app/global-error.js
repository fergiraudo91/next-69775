'use client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Button from '@/app/components/Button';

const GlobalError = ({error, reset}) => {

  useEffect(() => {
    console.log(error);
  }, [error])
  

    const router = useRouter();
    const handleBack = () => {
        router.back();
    }
  return (
    <div>
        <h1>No se ha podido encontrar el producto</h1>
        <Button onClick={reset}>Volver</Button>
    </div>
  )
}

export default GlobalError;