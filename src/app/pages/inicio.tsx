import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import GuiaPaginas from "../components/guiaPaginas";

export default function Inicio(){
    return(
        <div className="flex lg:m-20 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto text-zinc-50">
                <div className="lg:text-3xl text-xl text-start border-b-4 border-[#D8FA00]/70 py-5">
                    <h1>Transformando ideias em <strong className="text-[#D8FA00]">interfaces intuitivas</strong><br /> e experiências envolventes</h1>
                </div>
                <div className="py-10 text-md">
                    <p>Oi! Sou <strong className="text-[#D8FA00]">Renê Gomes</strong>, e este portfólio reúne projetos que refletem minha expertise em tecnologias diversas e minha abordagem inovadora no design e desenvolvimento.</p>
                </div>
                <div className="text-xl">
                    <strong>Destaque recente</strong>
                    <div className="relative my-3 max-w-98 z-0 cursor-pointer">
                        <img className=" rounded-lg border-5 w-full max-h-60 border-[#D8FA00] object-cover" src="https://github.com/rennegomes.png" alt="" />
                        <div className="absolute bottom-0 bg-zinc-950 w-full rounded-b-md p-2 text-sm">
                            <strong className="text-lg">Projeto X</strong>
                            <p>Descrição Projeto X</p>
                        </div>
                    </div>
                </div>

                <GuiaPaginas titulo="Projetos" icone="PencilSimple" subTitulo="Clique aqui e conheça meus projetos" fraseDoBotao="Conheça meus projetos"/>
                
            </div>
        </div>
    )
}