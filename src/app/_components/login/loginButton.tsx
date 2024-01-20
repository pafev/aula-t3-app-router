"use client"

import { signIn } from "next-auth/react"

export default function LoginButton() {
    return (
        <div className="flex gap-3">
            <button onClick={() => signIn("google")}>Logar pelo google</button>
            <button onClick={() => signIn("discord")}>Logar pelo discord</button>
        </div>
    )
}