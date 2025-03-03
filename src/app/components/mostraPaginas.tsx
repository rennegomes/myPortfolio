import Inicio from "../pages/inicio";
import Projetos from "../pages/projetos";

export default function MostraPaginas(){
    return(
        <div>
            <div>
                <Inicio />
            </div>
            <div>
                <Projetos />
            </div>
        </div>
    )
}