// import Link from "next/link"

// ui component
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// services
import { login, loginSchema, type loginValues } from "@/services/auth/auth.service"

// react
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"

import secureLocalStorage from "react-secure-storage";
import { SESSION_KEY } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

export default function AdminLoginPage() {
  const form = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "admin"
    }
  })

  const {isPending, mutateAsync} = useMutation({
    mutationFn: (data: loginValues) => login(data)
  })

  const navigate = useNavigate();

  const onSubmit = async (val: loginValues) => {
    try {
      const response = await mutateAsync(val)
      secureLocalStorage.setItem(SESSION_KEY, response.data)
      navigate("/admin")

    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>

            <div className="grid gap-4">

              {/* Input Email */}
              <div className="grid gap-2">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* End Input Email */}

              {/* Input Password */}
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* End Input Password */}

              <Button isLoading={isPending} type="submit" className="w-full cursor-pointer">
                Login
              </Button>

            </div>
            <div className="mt-4 text-center text-sm">
              {/* <Link href="#" className="underline">
            Sign up
          </Link> */}
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}
