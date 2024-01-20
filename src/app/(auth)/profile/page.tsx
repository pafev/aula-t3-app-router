import LogoutButton from "~/app/_components/auth/profile/logoutbutton";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function ProfilePage() {
    const session = await getServerAuthSession()

    if (!session?.user) return null
    
    const investments = await api.investments.getAll.query({userId: session?.user.id})
    console.log(investments)

    return (
        <>
            <h1>Página do usuário</h1>
            <LogoutButton />
        </>
    )
}