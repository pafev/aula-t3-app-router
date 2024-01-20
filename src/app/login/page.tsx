import { getServerAuthSession } from "~/server/auth";
import LoginButton from "../_components/login/loginButton";
import { permanentRedirect } from "next/navigation";

export default async function LoginPage() {
    const session = await getServerAuthSession()

    if (session) {
        permanentRedirect("/")
        return null
    }

    return (
        <main>
            <h1>Página de login</h1>
            <LoginButton />
        </main>
    )
}