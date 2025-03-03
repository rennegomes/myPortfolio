import GuiaPaginas from "../components/guiaPaginas";
import QuadroProjetos from "../components/quadroProjetos";

export default function Inicio(){
    return(
        <div className="flex lg:m-20 rounded-xl max-lg:m-4 max-lg:mb-14">

            <div className="max-w-[800px] m-auto w-full text-zinc-50  py-5">
                <div className="bg-zinc-950 rounded-xl text-zinc-300 mb-5">
                    <div className="lg:hidden flex flex-row items-center gap-4 p-5">
                        <img className="max-w-24 rounded-lg border-5 border-[#D8FA00] " src="https://github.com/rennegomes.png" alt="Foto de perfil" />
                        <div className="flex flex-col items-start w-full">
                            <h1 className="text-xl font-extrabold text-white">Renê Gomes</h1>
                            <div className="flex flex-col justify-center mt-1.5 w-full h-14 bg-[#D8FA00] rounded-xl text-zinc-900 p-3">
                                <p className="font-extrabold">Desenvolvedor</p>
                                <p className="font-semibold">Front-end</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:text-3xl text-xl text-start border-b-4 border-[#D8FA00]/70">
                    <h1>Transformando ideias em <strong className="text-[#D8FA00]">interfaces intuitivas</strong><br /> e experiências envolventes</h1>
                </div>
                <div className="my-10 text-md">
                    <p>Oi! Sou <strong className="text-[#D8FA00]">Renê Gomes</strong>, e este portfólio reúne projetos que refletem minha expertise em tecnologias diversas e minha abordagem inovadora no design e desenvolvimento.</p>
                </div>
                <div className="text-xl">
                    <strong>Destaque recente</strong>
                    <QuadroProjetos titulo="Projeto X" descricao="Descrição Projeto X" imagem="https://github.com/rennegomes.png"/>
                </div>

                <GuiaPaginas titulo="Projetos" icone="PencilSimple" subTitulo="Clique aqui e conheça meus projetos" fraseDoBotao="Conheça meus projetos"/>
                
            </div>
        </div>
    )
}