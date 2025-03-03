"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { House, PencilSimple, Stack, User, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Menu() {

    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState<string>(pathname);

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    const linkClasses = (path: string) =>
        `px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer ${
            activeLink === path ? "bg-white text-zinc-900" : "text-zinc-400 hover:bg-white hover:text-zinc-900"
        }`;

    return(
        <div>
            <div className="max-lg:hidden">
                <div className="flex fixed gap-10 justify-center items-center bg-zinc-950 w-full h-16 top-0 border-b border-[#D8FA00] font-bold z-50">
                    <Link href="/" className={linkClasses("/")}>Inicio</Link>
                    <Link href="/projetos" className={linkClasses("/projetos")}>Projetos</Link>
                    <Link href="/stack" className={linkClasses("/stack")}>Stack's</Link>
                    <Link href="/sobreMim" className={linkClasses("/sobreMim")}>Sobre mim</Link>
                    <Link href="/contato" className={linkClasses("/contato")}>Contato</Link>
                </div>
            </div>
            <div className="lg:hidden ">
                <div className="flex justify-between items-center text-zinc-50 fixed bottom-0 bg-zinc-900 h-16 w-full p-2 border-t border-[#D8FA00] z-50">
                    <Link href="/" className={linkClasses("/")} title="Home">
                        <House size={20}/>
                    </Link>
                    <Link href="/projetos" className={linkClasses("/projetos")} title="Projetos">
                        <PencilSimple size={20}/>
                    </Link>
                    <Link href="/stack" className={linkClasses("/stack")} title="Stack">
                        <Stack size={20}/>
                    </Link>
                    <Link href="/sobreMim" className={linkClasses("/sobreMim")} title="Sobre mim">
                        <User size={20}/>
                    </Link>
                    <Link href="/contato" className={linkClasses("/contato")} title="Contato">
                        <PaperPlaneTilt size={20}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}