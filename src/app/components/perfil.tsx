"use client"
import { LinkedinLogo, GithubLogo, File, Share } from "@phosphor-icons/react/dist/ssr";



export default function Perfil(){

    return(
        <div className="bg-zinc-950 rounded-xl text-zinc-300 max-lg:m-4 lg:w-[350px] lg:fixed lg:inset-5 lg:top-0 lg:mt-20">

            <div className="flex flex-row items-center gap-4 p-5">
                <img className="max-w-24 rounded-lg border-5 border-[#D8FA00] " src="https://github.com/rennegomes.png" alt="Foto de perfil" />
                <div className="flex flex-col items-start w-full">
                    <h1 className="text-xl font-extrabold text-white">Renê Gomes</h1>
                    <div className="flex flex-col justify-center mt-1.5 w-full h-14 bg-[#D8FA00] rounded-xl text-zinc-900 p-3">
                        <p className="font-extrabold">Desenvolvedor</p>
                        <p className="font-semibold">Front-end</p>
                    </div>
                </div>
            </div>
            <div className="max-lg:hidden">
                <div className="flex flex-col gap-1 mx-4 py-3 border-t border-zinc-700">
                    <strong className="text-zinc-200">Contatos</strong>
                    <div className="flex flex-col gap-2">
                        <a href="https://www.linkedin.com/in/rene-gomes/" target="_blank">
                            <button className="flex flex-row w-full gap-2 items-center rounded-lg p-2 cursor-pointer text-sm transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900">
                                    <LinkedinLogo size={20} />
                                    <p>LinkedIn</p>
                                    <div className="flex flex-1/3 justify-end">
                                        <Share size={12} className="" />
                                    </div>
                            </button>
                        </a>
                        <a href="https://github.com/rennegomes" target="_blank">
                            <button className="flex flex-row w-full gap-2 items-center rounded-lg p-2 cursor-pointer text-sm transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900">
                                    <GithubLogo size={20} />
                                    <p>GitHub</p>
                                    <div className="flex flex-1/3 justify-end">
                                        <Share size={12} className="" />
                                    </div>
                            </button>
                        </a>
                        <a href="#" target="_blank">
                            <button className="flex flex-row w-full gap-2 items-center rounded-lg p-2 cursor-pointer text-sm transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900">
                                    <File size={20} />
                                    <p>Currículo</p>
                                    <div className="flex flex-1/3 justify-end">
                                        <Share size={12} className="" />
                                    </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}