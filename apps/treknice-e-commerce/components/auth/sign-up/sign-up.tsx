"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { RegisterSchema } from "@/schemas";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { registerUser } from "@/actions/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import { FormSuccess } from "@/components/auth/form-success";
import { FormError } from "@/components/auth/form-error";

function SignUp() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      username: "",
    },
  });
  const router = useRouter();
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      registerUser(values)
        .then(async (res) => {
          if (res?.error) {
            setError(res.error);
            return;
          } else {
            setSuccess("Đăng nhập thành công");
            router.push(DEFAULT_LOGIN_REDIRECT);
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Có lỗi từ phía server");
        });
    });
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/auth-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 opacity-0"
        style={{
          background: "rgba(0, 0, 0, 0.15)",
        }}
      ></div>

      {/* Floating glass orbs for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-50 animate-pulse"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow:
              "0 8px 32px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full opacity-40 animate-pulse delay-1000"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow:
              "0 8px 32px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full opacity-45 animate-pulse delay-500"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow:
              "0 8px 32px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
        ></div>
      </div>

      <Card
        className="max-w-md hover-lift shadow-2xl relative z-10 opacity-100 w-[126%] mx-0 border-transparent"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(40px) saturate(250%)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow:
            "0 32px 80px rgba(0, 0, 0, 0.3), 0 16px 64px rgba(255, 255, 255, 0.2), inset 0 3px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold font-sans text-card-foreground">
            Chào mừng đến với TrekNice
          </CardTitle>
          <CardDescription className="text-card-foreground/70 font-sans">
            Đăng kí tài khoản để được hưởng nhiều ưu đãi
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-1 md:flex-row justify-content-center items-center">
              <FieldGroup>
                <Controller
                  control={form.control}
                  name="firstname"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="firstname">Họ</FieldLabel>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Nguyễn Bảo"
                        type="text"
                        id="firstname"
                        aria-invalid={fieldState.invalid ? "true" : "false"}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <FieldGroup>
                <Controller
                  control={form.control}
                  name="lastname"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="lastname">Tên</FieldLabel>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Huy"
                        type="text"
                        id="lastname"
                        aria-invalid={fieldState.invalid ? "true" : "false"}
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </div>

            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="email"
                      className="text-sm font-medium text-card-foreground font-sans"
                    >
                      Địa chỉ Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      className="border-white/40 bg-white/10 placeholder:text-card-foreground/50 text-card-foreground py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                      required
                      autoComplete="off"
                      disabled={isPending}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="username"
                      className="text-sm font-medium text-card-foreground font-sans"
                    >
                      Tên người dùng
                    </FieldLabel>
                    <Input
                      {...field}
                      id="username"
                      type="username"
                      placeholder="Nhập tên người dùng"
                      className="border-white/40 bg-white/10 placeholder:text-card-foreground/50 text-card-foreground py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                      required
                      autoComplete="off"
                      disabled={isPending}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="password"
                      className="text-sm font-medium text-card-foreground font-sans"
                    >
                      Mật khẩu
                    </FieldLabel>
                    <PasswordInput
                      {...field}
                      id="password"
                      disabled={isPending}
                      placeholder="**********"
                      className="border-white/40 bg-white/10 placeholder:text-card-foreground/50 text-card-foreground py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                      required
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-card-foreground font-sans"
                    >
                      Xác nhận mật khẩu
                    </FieldLabel>
                    <PasswordInput
                      {...field}
                      id="confirmPassword"
                      disabled={isPending}
                      placeholder="**********"
                      className="border-white/40 bg-white/10 placeholder:text-card-foreground/50 text-card-foreground py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                      required
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full ripple-effect hover-lift font-sans font-bold py-5 transition-all duration-300"
              style={{ backgroundColor: "#0C115B", color: "white" }}
              disabled={isPending}
            >
              {isPending ? "Đang đăng ký..." : "Đăng ký"}
            </Button>
          </form>

          <div className="text-center">
            <Link
              href="/auth/sign-in"
              className="text-sm text-card-foreground/70 hover:text-card-foreground font-sans transition-colors"
            >
              Bạn đã có tài khoản?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
