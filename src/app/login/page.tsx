import { getServerAuthSession } from "~/server/auth"
import LoginButton from "../_components/login/loginButton"
import { permanentRedirect } from "next/navigation"

export default async function LoginPage() {
    const session = await getServerAuthSession()

    if (session) {
        permanentRedirect("/profile")
        return null
    }

    return (
        <main>
            <LoginButton />
        </main>
    )
}