import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import GuiaPaginas from "../components/guiaPaginas";

export default function Projetos(){
    return(
        <div className="flex lg:m-20 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50">

                <strong className="text-3xl">Projetos</strong>
                <p className="text-zinc-400">Lista dos meus projetos:</p>

                <div className="relative my-3 max-w-98 max-h-70 z-0 cursor-pointer">
                    <img className="rounded-lg border-5 w-98 h-70 border-[#D8FA00] object-cover" src="https://github.com/rennegomes.png" alt="" />
                    <div className="absolute bottom-0 bg-zinc-950 w-full rounded-b-md p-2 text-sm">
                        <strong className="text-lg">Projeto X</strong>
                        <p>Descrição Projeto X</p>
                    </div>
                </div>

                <GuiaPaginas titulo="Stack's" icone="Stack" subTitulo="Clique aqui e conheça minhas habilidades" fraseDoBotao="Conheça minha habilidades"/>
            </div>
        </div>
    )
}