import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [status]);

    if (status === "loading") return <p>Yükleniyor...</p>;

    return (
        <div>
            <h1>Hoşgeldin, {session?.user?.name}!</h1>
            <button onClick={() => signOut()}>Çıkış Yap</button>
        </div>
    );
}
