import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"


const NavMenu = () => {
    return (
        <Menubar className="hidden lg:flex items-center justify-center" >
            <MenubarMenu >
                <div className="flex space-x-3 text-white  ">
                    <Link href={{ pathname: '/category', query: { category: 'Kadın' } }}>
                        <MenubarTrigger className=" bg-black text-2xl">KADIN</MenubarTrigger>
                    </Link>
                    <Link href={{ pathname: '/category', query: { category: 'Erkek' } }}>
                        <MenubarTrigger className="bg-black text-2xl">ERKEK</MenubarTrigger>
                    </Link>
                    <Link href={{ pathname: '/category', query: { category: 'Çocuk' } }}>
                        <MenubarTrigger className="bg-black text-2xl">ÇOCUK</MenubarTrigger>
                    </Link>
                    <Link href={{ pathname: '/category', query: { category: 'Çok Satanlar' } }}>
                        <MenubarTrigger className="bg-black text-2xl"> ÇOK SATANLAR</MenubarTrigger>
                    </Link>

                </div>
            </MenubarMenu>
        </Menubar>

    )
}

export default NavMenu