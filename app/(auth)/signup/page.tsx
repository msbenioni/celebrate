'use client'

import { AuthForm } from '@/components/auth/auth-form'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#223d3c] to-[#422717] p-4">
      <AuthForm mode="signup" />
    </div>
  )
}