import GuiaPaginas from "../components/guiaPaginas";
import QuadroProjetos from "../components/quadroProjetos";


export default function Projetos(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Projetos</strong>
                <p className="text-zinc-400">Lista dos meus projetos:</p>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <QuadroProjetos titulo="Memorize" descricao="Landing page para uma empresa especializada na administração de redes sociais." imagem="https://memorizelandingpage.netlify.app/LogoMemorize.png" link="/projetos/memorize"/>
                    <QuadroProjetos titulo="Suape Vantagens" descricao="Aplicativo de fidelização e descontos construído como projeto acadêmico com parceria com o Porto de SUAPE." imagem="https://portilio-rene.netlify.app/src/SV.png" link="/projetos/suape-vantagens"/>
                </div>
                
                <GuiaPaginas titulo="Stack's" icone="Stack" subTitulo="Clique aqui e conheça minhas habilidades" fraseDoBotao="Conheça minha habilidades" rota="/stack"/>
            </div>
        </div>
    )
}