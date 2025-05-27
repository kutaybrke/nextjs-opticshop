"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (res?.error) {
                alert("Giriş başarısız: " + res.error);
            } else {
                alert("Giriş başarılı");
                router.push("/");
            }
        } catch (error) {
            alert("Beklenmedik bir hata oluştu");
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-5">
                {/* Logo */}
                <div className="flex flex-col items-center space-y-1">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                    <h1 className="text-xl font-semibold text-gray-800">Kutay Optik</h1>
                </div>

                {/* E-posta */}
                <div className="space-y-1">
                    <label className="text-sm text-gray-600" htmlFor="email">
                        E-posta
                    </label>
                    <Input id="email" type="email" placeholder="mail@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>

                {/* Şifre */}
                <div className="space-y-1">
                    <label className="text-sm text-gray-600" htmlFor="password">
                        Şifre
                    </label>
                    <Input id="password" type="password" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>

                {/* Şifremi Unuttum */}
                <div className="text-right">
                    <button className="text-sm text-blue-500 hover:underline">
                        Şifremi unuttum?
                    </button>
                </div>

                {/* Giriş Yap Butonu */}
                <div>
                    <Button className="w-full" type="submit">Giriş Yap</Button>
                </div>

                {/* Kayıt Ol Linki */}
                <div className="text-center text-sm text-gray-600">
                    Kayıtlı bir hesabınız yok mu?{" "}
                    <Link href='/register' className="text-blue-500 hover:underline">
                        Kayıt Ol
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage
