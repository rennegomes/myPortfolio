import GuiaPaginas from "../components/guiaPaginas";
import QuadroProjetos from "../components/quadroProjetos";


export default function Projetos(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Projetos</strong>
                <p className="text-zinc-400">Lista dos meus projetos:</p>

                <QuadroProjetos titulo="Projeto X" descricao="Descrição Projeto X" imagem="https://github.com/rennegomes.png"/>
                
                <GuiaPaginas titulo="Stack's" icone="Stack" subTitulo="Clique aqui e conheça minhas habilidades" fraseDoBotao="Conheça minha habilidades" rota="/stack"/>
            </div>
        </div>
    )
}