import { PencilSimple } from "@phosphor-icons/react/dist/ssr";

export default function Inicio(){
    return(
        <div className="flex lg:h-screen p-3 lg:mr-10 rounded-xl max-lg:m-4 max-lg:mb-14 overflow-hidden">
            <div className="max-w-[800px] m-auto text-zinc-50">
                <div className="lg:text-3xl text-xl text-start border-b-4 border-[#D8FA00]/70 py-5">
                    <h1>Transformando ideias em <strong className="text-[#D8FA00]">interfaces intuitivas</strong><br /> e experiências envolventes</h1>
                </div>
                <div className="py-10 text-md">
                    <p>Oi! Sou <strong className="text-[#D8FA00]">Renê Gomes</strong>, e este portfólio reúne projetos que refletem minha expertise em tecnologias diversas e minha abordagem inovadora no design e desenvolvimento.</p>
                </div>
                <div className="text-xl">
                    <strong>Destaque recente</strong>
                    <div className="relative my-3 max-w-98 z-0">
                        <img className=" rounded-lg border-5 w-full max-h-60 border-[#D8FA00] object-cover" src="https://github.com/rennegomes.png" alt="" />
                        <div className="absolute bottom-0 bg-zinc-950 w-full rounded-b-md p-2 text-sm">
                            <strong className="text-lg">Projeto X</strong>
                            <p>Descrição Projeto X</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between text-xl text-zinc-900 bg-[#D8FA00] my-3 w-full rounded-lg mt-10 p-6">
                    <div>
                        <div className="flex gap-2 items-center">
                            <strong className="font-black">Projetos</strong>
                            <div className="flex items-center justify-center rounded-lg w-7 h-7 text-zinc-50 bg-zinc-950">
                                <PencilSimple size={20} />
                            </div>
                        </div>
                        <p className="text-[1rem]">Clique aqui e conheça meus projetos</p>
                    </div>
                    <div className="flex justify-center bg-zinc-50 w-50 rounded-lg mt-8">
                        <h1 className="text-sm my-3.5 font-bold">Conheça meus projetos</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}