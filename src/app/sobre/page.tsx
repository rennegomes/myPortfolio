import GuiaPaginas from "../components/guiaPaginas";
import Listagem from "../components/listagem";

export default function Sobre(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Sobre mim</strong>
                <p className="text-zinc-400 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis, ad laboriosam ab incidunt nemo sunt eos iure velit tempora commodi quasi porro nostrum quia maxime. Veritatis dolore rerum officiis!</p>

                <div className="bg-zinc-950 p-5 mt-5 rounded-xl">
                    <div className="bg-[#D8FA00] p-2 rounded-lg text-xl">
                        <strong className="text-zinc-800">Tecnólogo em Análise e Desenvolvimento de Sistemas</strong>
                    </div>
                    <p className="font-bold mt-1">Centro Universitário Senac PE</p>
                    <p className="text-sm text-zinc-400">Ago de 2022 - Dez de 2024</p>
                    <p className="text-xs text-zinc-400 mt-2">O Tecnólogo em Análise e Desenvolvimento de Sistemas é um curso superior que abrange áreas como
                        programação, bancos de dados, engenharia de software, segurança da informação e inteligência artificial. O profissional formado pode
                        atuar como desenvolvedor, analista de sistemas, arquiteto de software, entre outras funções, em diversos setores da tecnologia.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                    <div className="bg-zinc-950 p-5 mt-5 rounded-lg">
                        <h1 className="font-semibold my-2">Habilidades</h1>
                        <p className="text-sm text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptates, deserunt eaque maiores porro eligendi doloribus animi possimus consectetur quisquam, aliquam mollitia tempora commodi ab ex, alias ad accusamus aliquid.</p>
                    </div>
                    <div className="bg-zinc-950 p-5 mt-5 rounded-lg">
                        <h1 className="font-semibold my-2">Habilidades</h1>
                        <p className="text-sm text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptates, deserunt eaque maiores porro eligendi doloribus animi possimus consectetur quisquam, aliquam mollitia tempora commodi ab ex, alias ad accusamus aliquid.</p>
                    </div>
                </div>

                <GuiaPaginas titulo="Contato" icone="PaperPlaneTilt" subTitulo="Clique aqui para enterar em contato comigo" fraseDoBotao="Entrar em contato" rota="/contato"/>
            </div>
        </div>
    )
}