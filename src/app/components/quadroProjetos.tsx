import Link from "next/link"

interface QuadroProjetosProps{
    imagem: string;
    titulo: string;
    descricao: string;
    link: string;
}

export default function QuadroProjetos(props: QuadroProjetosProps){
    return(
        <div className="relative my-3 max-w-98 max-h-70 z-0 cursor-pointer">
            <Link href={props.link}>
                <div className="border-5 border-[#D8FA00] rounded-lg">
                    <img className="bg-zinc-950 rounded-lg w-98 h-64 opacity-50 object-fill transition-colors duration-200 hover:opacity-100" src={props.imagem} alt="" />
                </div>
                <div className="absolute bottom-0 bg-zinc-950 w-full rounded-b-md p-2 text-sm">
                    <strong className="text-lg">{props.titulo}</strong>
                    <p className="line-clamp-2">{props.descricao}</p>
                </div>
            </Link>
        </div>
    )
}