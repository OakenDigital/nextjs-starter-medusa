import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

const storeName = process.env.NEXT_PUBLIC_STORE_NAME;

export const metadata: Metadata = {
  title: "Sign in",
  description: `Sign in to your ${storeName} account.`,
}

export default function Login() {
  return <LoginTemplate />
}
