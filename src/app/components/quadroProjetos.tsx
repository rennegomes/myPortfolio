interface QuadroProjetosProps{
    imagem: string,
    titulo: string,
    descricao: string
}

export default function QuadroProjetos(props: QuadroProjetosProps){
    return(
        <div className="relative my-3 max-w-98 max-h-70 z-0 cursor-pointer">
            <div className="border-5 border-[#D8FA00] rounded-lg">
                <img className="rounded-lg w-98 h-64 opacity-50  object-cover transition-colors duration-200 hover:opacity-100" src={props.imagem} alt="" />
            </div>
            <div className="absolute bottom-0 bg-zinc-950 w-full rounded-b-md p-2 text-sm">
                <strong className="text-lg">{props.titulo}</strong>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}