export default function Listagem(){
    return(
        <div className="bg-zinc-950 p-5 my-5 rounded-lg">
            <div className="flex flex-col gap-5">
                <strong className="text-lg">Habilidades Front-End</strong>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-start">

                    <div className="bg-zinc-800 p-5 rounded-lg hover:bg-[#D8FA00] hover:text-zinc-900 transition-colors duration-200">
                        <div className="flex items-center gap-5">
                            <img className="max-w-10 max-h-10 rounded-lg" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="" />
                            <div>
                                <strong>Next.js</strong>
                                <p className="text-xs font-light">Framework React com maior poder de performance</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}