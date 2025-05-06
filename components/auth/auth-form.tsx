'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type AuthFormProps = {
  mode: 'login' | 'signup'
}

export function AuthForm({ mode }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // TODO: Implement authentication
      console.log(values)
      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md" style={{ backgroundColor: "#72513a", color: "#fcfcfb", borderColor: "#9f7756" }}>
      <CardHeader>
        <CardTitle style={{ color: "#fcfcfb" }}>{mode === 'login' ? 'Sign In' : 'Create Account'}</CardTitle>
        <CardDescription style={{ color: "#ede7e3" }}>
          {mode === 'login'
            ? 'Enter your email and password to sign in'
            : 'Enter your details to create an account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: "#ede7e3" }}>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} style={{ backgroundColor: "#d3bfaa30", borderColor: "#9f7756", color: "#fcfcfb" }} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: "#ede7e3" }}>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} style={{ backgroundColor: "#d3bfaa30", borderColor: "#9f7756", color: "#fcfcfb" }} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading} style={{ backgroundColor: "#9f7756", color: "#fcfcfb", borderColor: "transparent" }}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Please wait
                </div>
              ) : mode === 'login' ? (
                'Sign In'
              ) : (
                'Create Account'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {mode === 'login' ? (
          <p className="text-sm" style={{ color: "#ede7e3" }}>
            Don't have an account?{' '}
            <Button variant="link" className="p-0" onClick={() => router.push('/signup')} style={{ color: "#fcfcfb" }}>
              Sign up
            </Button>
          </p>
        ) : (
          <p className="text-sm" style={{ color: "#ede7e3" }}>
            Already have an account?{' '}
            <Button variant="link" className="p-0" onClick={() => router.push('/login')} style={{ color: "#fcfcfb" }}>
              Sign in
            </Button>
          </p>
        )}
      </CardFooter>
    </Card>
  )
}