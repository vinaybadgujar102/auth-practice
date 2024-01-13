"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter()

    const onClick = () => {
        router.push("/auth/login")
    }

    if(mode === "modal") {
        return (
            <button onClick={onClick} className="curson-pointer">
                Hi
            </button>
        )
    }

    return (
        <span onClick={onClick} className="curson-pointer">
            {children}
        </span>
    )
}