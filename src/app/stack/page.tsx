import GuiaPaginas from "../components/guiaPaginas";

export default function Stack(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Stack's</strong>
                <p className="text-zinc-400">Lista das minhas habilidades:</p>
                
                <GuiaPaginas titulo="Stack's" icone="Stack" subTitulo="Clique aqui e conheça minhas stack's" fraseDoBotao="Conheça minha stack's" rota="/stack"/>
            </div>
        </div>
    )
}