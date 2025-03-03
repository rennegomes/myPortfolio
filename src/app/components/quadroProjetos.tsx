interface QuadroProjetosProps{
    imagem: string,
    titulo: string,
    descricao: string
}

export default function QuadroProjetos(props: QuadroProjetosProps){
    return(
        <div className="relative my-3 max-w-98 max-h-70 z-0 cursor-pointer">
            <img className="rounded-lg border-5 w-98 h-70 border-[#D8FA00] object-cover" src={props.imagem} alt="" />
            <div className="absolute bottom-0 bg-zinc-950 w-full rounded-b-md p-2 text-sm">
                <strong className="text-lg">{props.titulo}</strong>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}