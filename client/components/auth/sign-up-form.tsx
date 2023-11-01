/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState } from "react"
import { useAuthFormContext } from "@/contexts/auth-form-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import useApis from "@/hooks/use-apis"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form"
import { Icons } from "../ui/icons"
import { Input } from "../ui/input"
import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

const schema = z.object({
  username: z
    .string()
    .min(4, "Username must be between 4 and 20 characters.")
    .max(20, "Username must be between 4 and 20 characters.")
    .regex(
      new RegExp(/^[a-zA-Z0-9-._]+$/),
      "Username can not contain special characters."
    ),
  email: z.string().email("Email is invalid."),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters long.")
    .max(20, "Password must be less than 30 characters long.")
})

export default function SignUpForm() {
  const { api } = useApis()
  const { setAuthFormType } = useAuthFormContext()
  const [passwordType, setPasswordType] = useState<"password" | "text">("text")
  const { toast } = useToast()

  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    resolver: zodResolver(schema),
    mode: "all"
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    try {
      console.log({ data })
      const response = await api.post("/auth/sign-up", data)
      toast({
        title: "Account created",
        description: "Your account was created, sign in to continue.",
        variant: "default"
      })
      setAuthFormType("signIn")
    } catch (err) {
      if (err instanceof AxiosError) {
        const errors = err.response?.data
          ?.errors as typeof form.formState.errors

        if (errors?.email?.message)
          form.setError("email", {
            message: errors.email.message
          })
        if (errors?.password?.message)
          form.setError("password", {
            message: errors.password.message
          })
        if (errors?.username?.message)
          form.setError("username", {
            message: errors.username.message
          })
      }
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request",
        variant: "destructive",
        action: (
          <ToastAction altText="Try again" onClick={() => onSubmit(data)}>
            Try again
          </ToastAction>
        )
      })
    }
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <Form {...form}>
          <h1 className="font-bold text-2xl text-center">Create an account</h1>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-5"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field}></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field}></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Password"
                        {...field}
                        type={passwordType}
                      ></Input>
                      <Button
                        variant={"outline"}
                        type="button"
                        className="hover:cursor-pointer"
                        onClick={() => {
                          passwordType === "password"
                            ? setPasswordType("text")
                            : setPasswordType("password")
                        }}
                      >
                        {passwordType === "password" ? (
                          <Icons.EyeOpenIcon></Icons.EyeOpenIcon>
                        ) : (
                          <Icons.EyeClosedIcon></Icons.EyeClosedIcon>
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button type="submit" disabled={!form.formState.isValid}>
              Continue
            </Button>

            <div className="text-center text-sm">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setAuthFormType("signIn")}
                  className="hover:cursor-pointer hover:underline"
                >
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
