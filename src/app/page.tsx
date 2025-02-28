import Perfil from "./components/perfil";

export default function Home() {
  return (
    <div className="">
      <div className="gap-8 lg:grid lg:grid-cols-[300px_1fr] lg:items-start">
        <div className="">
          <Perfil />
        </div>
        <div className="">
        </div>
      </div>
    </div>
  );
}
