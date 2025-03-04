export default function Listagem(){
    return(
        <div className="bg-zinc-700 p-5 my-5 rounded-lg">
            <div className="flex flex-col gap-5">
                <strong className="text-lg">Habilidades Front-End</strong>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-start">

                    <div className="bg-zinc-800 p-5 rounded-lg">
                        <div className="flex items-center gap-5">
                            <img className="max-w-10 max-h-10 rounded-lg" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="" />
                            <div>
                                <strong>Next.js</strong>
                                <p className="text-xs font-light">Freamework Reack com maior poder de performace</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}