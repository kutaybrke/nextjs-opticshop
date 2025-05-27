import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userName, email, password, confirmPassword } = body;

        if (!userName || !email || !password || !confirmPassword) {
            return NextResponse.json({ error: 'Tüm alanlar zorunlu' }, { status: 400 });
        }
        if (password !== confirmPassword) {
            return NextResponse.json({ error: 'Şifreler eşleşmiyor' }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: 'Email zaten kayıtlı' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username: userName,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json(
            { message: 'Kayıt başarılı', user: { id: user.id, email: user.email } },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: 'Bir hata oluştu' }, { status: 500 });
    }
}
