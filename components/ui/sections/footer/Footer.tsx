import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
                {/* 1. Sütun */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Kurumsal</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Hakkımızda</li>
                        <li>Gizlilik Politikası</li>
                        <li>Kullanıcı Sözleşmesi</li>
                        <li>İletişim</li>
                    </ul>
                </div>

                {/* 2. Sütun */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Müşteri Hizmetleri</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Sıkça Sorulan Sorular</li>
                        <li>İade ve Değişim</li>
                        <li>Kargo ve Teslimat</li>
                        <li>Destek</li>
                    </ul>
                </div>

                {/* 3. Sütun */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Sosyal Medya</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>

            {/* Alt bilgi */}
            <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
                © 2025 Tüm Hakları Saklıdır | KUTAY OPTİK
            </div>
        </footer>
    )
}

export default Footer
