import { House, PencilSimple, Stack, User, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface GuiaPaginasProps {
    titulo: string,
    icone: "House" | "PencilSimple" | "Stack" | "User" | "PaperPlaneTilt",
    subTitulo: string,
    fraseDoBotao: string,
    rota: string
}

const iconeMap = {
    House,
    PencilSimple,
    Stack,
    User,
    PaperPlaneTilt
}

export default function GuiaPaginas(props: GuiaPaginasProps){

    const Icone = iconeMap[props.icone];
    return(
        <div className="flex flex-col justify-between text-xl text-zinc-900 bg-[#D8FA00] my-3 w-full rounded-lg mt-10 p-6">
        <div>
            <div className="flex gap-2 items-center">
                <strong className="font-black">{props.titulo}</strong>
                <div className="flex items-center justify-center rounded-lg w-7 h-7 text-zinc-50 bg-zinc-950">
                    {Icone && <Icone size={20} />}
                    
                </div>
            </div>
            <p className="text-[1rem]">{props.subTitulo}</p>
        </div>
        <button className="flex justify-center bg-zinc-50 w-50 rounded-lg mt-8 cursor-pointer">
            <Link href={props.rota} className="text-sm my-3.5 font-bold">{props.fraseDoBotao}</Link>
        </button>
    </div>
    )
}