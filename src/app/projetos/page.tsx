import GuiaPaginas from "../components/guiaPaginas";
import QuadroProjetos from "../components/quadroProjetos";
import projetosJSON from "@/json/projetos.json"


export default function Projetos(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Projetos</strong>
                <p className="text-zinc-400">Lista dos meus projetos:</p>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {projetosJSON.map((projeto, index) => (
                        <QuadroProjetos key={index} titulo={projeto.titulo} descricao={projeto.descricao} imagem={projeto.imagem} link={projeto.link} />
                    ))}
                </div>
                
                <GuiaPaginas titulo="Stack's" icone="Stack" subTitulo="Clique aqui e conheça minhas habilidades" fraseDoBotao="Conheça minha habilidades" rota="/stack"/>
            </div>
        </div>
    )
}