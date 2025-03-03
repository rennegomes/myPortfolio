import { House, PencilSimple, Stack, User, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Menu() {

    return(
        <div>
            <div className="max-lg:hidden">
                <div className="flex fixed gap-10 justify-center items-center bg-zinc-950 w-full h-16 top-0 border-b text-zinc-400 border-[#D8FA00] font-bold z-50">
                    <Link href="/" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900'>Inicio</Link>
                    <Link href="/projetos" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900'>Projetos</Link>
                    <Link href="/stack" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900'>Stack's</Link>
                    <Link href="/sobreMim" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900'>Sobre mim</Link>
                    <Link href="/contato" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900'>Contato</Link>
                </div>
            </div>
            <div className="lg:hidden ">
                <div className="flex justify-between items-center text-zinc-50 fixed bottom-0 bg-zinc-900 h-16 w-full p-2 border-t border-[#D8FA00] z-50">
                    <Link href="/" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900' title="Home">
                        <House size={20}/>
                    </Link>
                    <Link href="/projetos" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900' title="Projetos">
                        <PencilSimple size={20}/>
                    </Link>
                    <Link href="/stack" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900' title="Stack">
                        <Stack size={20}/>
                    </Link>
                    <Link href="/sobreMim" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900' title="Sobre mim">
                        <User size={20}/>
                    </Link>
                    <Link href="/contato" className='px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900' title="Contato">
                        <PaperPlaneTilt size={20}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}