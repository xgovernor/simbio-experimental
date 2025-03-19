import AuthLayout from '@/components/AuthLayout'
import { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
    return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}

export default layout
