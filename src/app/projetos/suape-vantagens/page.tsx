import projetosJSON from "@/json/projetos.json"
import { Archive, ArrowLeft, Browsers, PenNib } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function SuapeVantagens(){

    const filtraProjeto = projetosJSON.filter((item) => item.titulo === "Suape Vantagens");

    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            
                {filtraProjeto.length > 0? (
                    filtraProjeto.map((item, index) => (
                        <div key={index} className="max-w-[800px] m-auto w-full text-zinc-400 py-5">
                            <div className="flex gap-5 items-center">
                                <Link href="/projetos" className="border rounded-lg p-2 cursor-pointer transition-colors duration-200 hover:bg-[#D8FA00] hover:text-zinc-900">
                                    <ArrowLeft size={22} />
                                </Link>
                                <strong className="text-3xl text-zinc-50">{item.titulo}</strong>
                            </div>
                            <p className="my-5 text-sm">{item.descricao}</p>
                            <p>{item.data}</p>
                            <div className="bg-zinc-200 rounded-lg my-5">
                                <img src={item.imagem} className="object-cover w-full rounded-lg" />
                            </div>
                            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5 bg-zinc-950 text-zinc-50 p-5 rounded-lg">
                                <div>
                                    <strong>Deploy, Repositório e Design</strong>
                                    <p className="text-zinc-400 text-sm">Vejá o site, o design e repositório no GitHub</p>
                                </div>
                                <div className="flex gap-5 items-center justify-center">
                                    {item.linkSite ? (
                                    <a href={item.linkSite} target="_blank" className="flex gap-2 border p-2 rounded-lg text-sm transition-colors duration-200 hover:bg-[#D8FA00] hover:text-zinc-900">
                                        <Browsers size={22} />
                                        <p>Site</p>
                                    </a>
                                    ) : (
                                    <div className="flex gap-2 border p-2 rounded-lg text-sm text-gray-400 cursor-not-allowed">
                                        <Browsers size={22} />
                                        <p>Site</p>
                                    </div>
                                    )}
                                    {item.linkRepositorio ? (
                                    <a href={item.linkRepositorio} target="_blank" className="flex gap-2 border p-2 rounded-lg text-sm transition-colors duration-200 hover:bg-[#D8FA00] hover:text-zinc-900">
                                        <Archive size={22} />
                                        <p>Repositório</p>
                                    </a>
                                    ) : (
                                    <div className="flex gap-2 border p-2 rounded-lg text-sm text-gray-400 cursor-not-allowed">
                                        <Archive size={22} />
                                        <p>Repositório</p>
                                    </div>
                                    )}
                                    {item.linkDesign ? (
                                    <a
                                        href={item.linkDesign}
                                        target="_blank"
                                        className="flex gap-2 border p-2 rounded-lg text-sm transition-colors duration-200 hover:bg-[#D8FA00] hover:text-zinc-900"
                                    >
                                        <PenNib size={22} />
                                        <p>Design</p>
                                    </a>
                                    ) : (
                                    <div className="flex gap-2 border p-2 rounded-lg text-sm text-gray-400 cursor-not-allowed">
                                        <PenNib size={22} />
                                        <p>Design</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-zinc-950 text-zinc-400 p-5 rounded-lg mt-5">
                                <strong className="text-zinc-50">Tecnologias Utilizadas</strong>
                                <p className="mt-2 text-sm">Front-End: {item.frontEnd}</p>
                                <p className="text-sm">Back-End: {item.backEnd}</p>
                                <p className="text-sm">Bibliotecas: {item.bibliotecas}</p>
                                <p className="text-sm">Ferramentas: {item.ferramentas}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nem um projeto com esse nome</p>
                )
            }
                
            
        </div>
    )
}