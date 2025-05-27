// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: 'Email ve şifre zorunlu' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 400 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        return NextResponse.json({ error: 'Şifre yanlış' }, { status: 400 });
    }

    // Burada JWT veya session oluşturabilirsin, şu an sadece cevap dönüyor.
    return NextResponse.json({ message: 'Giriş başarılı', user: { id: user.id, email: user.email } });
}
