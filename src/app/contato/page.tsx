import { EnvelopeSimple, GithubLogo, LinkedinLogo, Share } from "@phosphor-icons/react/dist/ssr";

export default function Contato(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

   
                <div className="lg:hidden lg:h-0 bg-zinc-950 rounded-xl text-zinc-300 mb-5">
                    <div className=" flex flex-row items-center gap-4 p-5">
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


                <strong className="text-3xl">Contatos</strong>

                <div className="mt-5 grid grid-cols-1 gap-2 font-bold">
                    <a href="https://www.linkedin.com/in/rene-gomes/" target="_blank">
                        <button className="flex flex-row w-full bg-zinc-950 gap-2 items-center rounded-lg p-2 cursor-pointer text-sm transition-colors duration-200 hover:bg-zinc-700">
                                <div className="bg-[#D8FA00] text-zinc-950 p-1 rounded-lg">
                                    <LinkedinLogo size={50}/>
                                </div>
                                <p>LinkedIn</p>
                                <div className="flex flex-1/3 justify-end">
                                    <Share size={12} className="" />
                                </div>
                        </button>
                    </a>
                    <a href="https://github.com/rennegomes" target="_blank">
                        <button className="flex flex-row w-full bg-zinc-950 gap-2 items-center rounded-lg p-2 cursor-pointer text-sm transition-colors duration-200 hover:bg-zinc-700">
                                <div className="bg-[#D8FA00] text-zinc-950 p-1 rounded-lg">
                                    <GithubLogo size={50}/>
                                </div>
                                <p>GitHub</p>
                                <div className="flex flex-1/3 justify-end">
                                    <Share size={12} className="" />
                                </div>
                        </button>
                    </a>
                    <a href="mailto:renne.lace082@gemail.com" target="_blank">
                        <button className="flex flex-row w-full bg-zinc-950 gap-2 items-center rounded-lg p-2 cursor-pointer text-sm transition-colors duration-200 hover:bg-zinc-700">
                                <div className="bg-[#D8FA00] text-zinc-950 p-1 rounded-lg">
                                    <EnvelopeSimple size={50} />
                                </div>
                                <p>E-mail</p>
                                <div className="flex flex-1/3 justify-end">
                                    <Share size={12} className="" />
                                </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}