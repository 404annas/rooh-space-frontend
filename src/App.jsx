import React from 'react'
import { Toaster } from "sonner";
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors />

      <AppRoutes />
    </>
  )
}

export default App