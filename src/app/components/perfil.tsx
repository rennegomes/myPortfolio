import { Pencil, User, Stack, LinkedinLogo, GithubLogo, File, Share } from "@phosphor-icons/react/dist/ssr";

export default function Perfil(){
    return(
        <div className="bg-zinc-900 rounded-lg text-zinc-300 max-lg:m-4 lg:w-[300px] lg:fixed lg:inset-5">
            <div className="flex flex-col items-center gap-5 p-5">
                <img className="max-w-20 rounded-full" src="https://github.com/rennegomes.png" alt="Foto de perfil" />
                <div className="flex flex-col items-center">
                    <strong className="text-xl text-white">Renê Gomes</strong>
                    <p className="text-zinc-400">Desenvolvedor Front-end</p>
                </div>
            </div>
            {/* <div className="flex flex-row items-center gap-4 p-5">
                <img className="max-w-18 rounded-full" src="https://github.com/rennegomes.png" alt="Foto de perfil" />
                <div className="flex flex-col items-start">
                    <h1 className="text-xl">Renê Gomes</h1>
                    <p className="text-zinc-400">Dev. Front-end</p>
                </div>
            </div> */}
            <div className=" max-lg:hidden">
                <div className="flex flex-col gap-2 mx-4 py-2 border-t border-zinc-700">
                    <div className="flex flex-row gap-2 items-center rounded-lg p-2 cursor-pointer text-sm border border-transparent transition-colors duration-200 hover:bg-zinc-950 hover:text-white hover:border-[0.25px] hover:border-zinc-600">
                        <Pencil size={20} />
                        <p>Projetos</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center rounded-lg p-2 cursor-pointer text-sm border border-transparent transition-colors duration-200 hover:bg-zinc-950 hover:text-white hover:border-[0.25px] hover:border-zinc-600">
                        <Stack size={20} />
                        <p>Stack's</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center rounded-lg p-2 cursor-pointer text-sm border border-transparent transition-colors duration-200 hover:bg-zinc-950 hover:text-white hover:border-[0.25px] hover:border-zinc-600">
                        <User size={20} />
                        <p>Sobre mim</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 mx-4 py-3 border-t border-zinc-700">
                    <strong>Contatos</strong>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center rounded-lg p-2 cursor-pointer text-sm border border-transparent transition-colors duration-200 hover:bg-zinc-950 hover:text-white hover:border-[0.25px] hover:border-zinc-600">
                            <LinkedinLogo size={20} />
                            <p>LinkedIn</p>
                            <div className="flex flex-1/3 justify-end">
                                <Share size={12} className="" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center rounded-lg p-2 cursor-pointer text-sm border border-transparent transition-colors duration-200 hover:bg-zinc-950 hover:text-white hover:border-[0.25px] hover:border-zinc-600">
                            <GithubLogo size={20} />
                            <p>GitHub</p>
                            <div className="flex flex-1/3 justify-end">
                                <Share size={12} className="" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center rounded-lg p-2 cursor-pointer text-sm border border-transparent transition-colors duration-200 hover:bg-zinc-950 hover:text-white hover:border-[0.25px] hover:border-zinc-600">
                            <File size={20} />
                            <p>Currículo</p>
                            <div className="flex flex-1/3 justify-end">
                                <Share size={12} className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}