"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Link from "next/link";

const RegisterPage = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Şifreler eşleşmiyor")
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("/api/auth/register", {
                userName: formData.userName,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            })
            alert('Kayıt Başarılı')
            router.push('/login')
        } catch (err: any) {
            alert(err.response?.data?.error || "Kayıt sırasında hata olustu")
        } finally {
            setLoading(false);
        }

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-5"
            >
                <div className="flex flex-col items-center space-y-1">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                    <h1 className="text-xl font-semibold text-gray-800">Kutay Optik</h1>
                    <p className="text-sm text-gray-500">Hesap Oluştur</p>
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-gray-600" htmlFor="userName">
                        Kullanıcı Adı
                    </label>
                    <Input
                        id="userName"
                        type="text"
                        placeholder="kutayberke"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-gray-600" htmlFor="email">
                        E-posta
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-gray-600" htmlFor="password">
                        Şifre
                    </label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-gray-600" htmlFor="confirmPassword">
                        Şifre Tekrar
                    </label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <Button className="w-full" type="submit" disabled={loading}>
                    {loading ? "Kayıt Olunuyor..." : "Kayıt Ol"}
                </Button>

                <div className="text-center text-sm text-gray-600">
                    Zaten bir hesabınız var mı?{" "}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Giriş Yap
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
