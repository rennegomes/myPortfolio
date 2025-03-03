import Inicio from "./pages/inicio";
import Menu from "./components/menu";
import Perfil from "./components/perfil";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Menu />
      </div>
      <div className="gap-8 lg:grid lg:grid-cols-[350px_1fr] lg:items-start">
        <div className="">
          <Perfil />
        </div>
        <div className="bg-zinc-900">
          <Inicio />
        </div>
      </div>
    </div>
  );
}
