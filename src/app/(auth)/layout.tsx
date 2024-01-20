import { getServerAuthSession } from "~/server/auth";
import AuthProvider from "../_components/auth/authProvider";
import LoginPage from "../login/page";
import { type ReactNode } from "react";

export default async function AuthLayout({children}: {children: ReactNode}) {
    const session = await getServerAuthSession()

    return (<>{session? <AuthProvider>{children}</AuthProvider> : <LoginPage />}</>)
}