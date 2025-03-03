import { House, PencilSimple, Stack, User, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export default function Menu() {
    return(
        <div>
            <div className="max-lg:hidden">
                <div className="flex fixed gap-10 justify-center items-center bg-zinc-950 w-full h-16 top-0 border-b border-[#D8FA00] text-zinc-400 font-bold z-50">
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">Inicio</button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">Projetos</button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">Stack's</button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">Sobre mim</button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">Contato</button>
                </div>
            </div>
            <div className="lg:hidden ">
                <div className="flex justify-between text-zinc-50 fixed bottom-0 bg-zinc-900 h-16 w-full p-2 border-t border-[#D8FA00] z-50">
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">
                        <House size={20}/>
                    </button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">
                        <PencilSimple size={20}/>
                    </button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">
                        <Stack size={20}/>
                    </button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">
                        <User size={20}/>
                    </button>
                    <button className=" px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-white hover:text-zinc-900">
                        <PaperPlaneTilt size={20}/>
                    </button>
                </div>
            </div>
        </div>
    )
}