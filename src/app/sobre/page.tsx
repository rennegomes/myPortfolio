import GuiaPaginas from "../components/guiaPaginas";
import Listagem from "../components/listagem";

export default function Sobre(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Sobre mim</strong>
                <p className="text-zinc-400 mt-5">Sou um desenvolvedor front-end apaixonado por criar soluções inovadoras e otimizadas para a web. Tenho experiência em desenvolvimento de interfaces intuitivas,
                    integração de APIs e criação de plataformas. Trabalho com tecnologias como Vue.js, React, JavaScript, Node.js e SQL, sempre focado em entregar código limpo e eficiente.</p>

                <div className="bg-zinc-950 p-5 mt-5 rounded-xl">
                    <div className="bg-[#D8FA00] p-2 rounded-lg text-xl">
                        <strong className="text-zinc-800">Tecnólogo em Análise e Desenvolvimento de Sistemas</strong>
                    </div>
                    <p className="font-bold mt-1">Centro Universitário Senac PE</p>
                    <p className="text-sm text-zinc-400">Ago de 2022 - Dez de 2024</p>
                    <p className="text-sm text-zinc-400 mt-2">O Tecnólogo em Análise e Desenvolvimento de Sistemas é um curso superior que abrange áreas como
                        programação, bancos de dados, engenharia de software, segurança da informação e inteligência artificial. O profissional formado pode
                        atuar como desenvolvedor, analista de sistemas, arquiteto de software, entre outras funções, em diversos setores da tecnologia.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:gap-1">
                    
                    <div className="bg-zinc-950 p-5 mt-5 rounded-lg">
                        <h1 className="font-black text-xl my-2">Experiências</h1>
                        <p className="text-sm text-zinc-400">
                            <strong className="text-base">SENAI - Observatorio da Industria<br/>
                            Fullstack Developer - Estágio, Recife | Abril de 2024 - Dezembro de 2024</strong><br/><br/>
                            Atuei como desenvolvedor full stack em projetos de web aplicações e APIs, utilizando tecnologias como <strong>Vue.js, Quasar, Vite, SQL e Docker</strong>. Desenvolvi componentes reutilizáveis em <strong>JavaScript (Vue.js) e integrei APIs</strong> para comunicação entre serviços.
                            Fui responsável pela <strong>criação de interfaces intuitivas (UX) e prototipagem no Figma</strong>, priorizando a <strong>usabilidade e a experiência do usuário</strong>. Participei do <strong>desenvolvimento e manutenção de plataformas web full-stack</strong>, aplicando controle de versão com <strong>Git</strong> e gerenciando rotas com <strong>Vue Router</strong>.
                            Realizei a integração de sistemas com aplicativos da <strong>plataforma Azure (PowerBI Embedded)</strong> e trabalhei com metodologias ágeis como <strong>Kanban e SCRUM</strong>, utilizando o <strong>Jira</strong> para acompanhamento e gestão de tarefas.
                        </p>
                        <br/>
                        <p className="text-sm text-zinc-400">
                            <strong className="text-base">Liferay<br/>
                            Jovem Aprendiz - Auxiliar de Marketing, Recife | Outubro de 2019 - Março de 2021</strong><br/><br/>
                            Atuei no suporte à equipe de marketing, auxiliando na criação de <strong>artes visuais</strong> para campanhas digitais e na <strong>execução de tarefas operacionais, garantindo agilidade e eficiência nos processos</strong>.
                            Fui responsável pela criação e manutenção de documentos e planilhas no <strong>Microsoft Word e Excel</strong>, além de atualizar informações no <strong>sistema de gestão</strong>, assegurando a <strong>precisão e a organização dos dados</strong>.
                            Utilizei as ferramentas <strong>Jira e Trello</strong> para gestão e acompanhamento de tarefas, otimizando o fluxo de trabalho e a comunicação entre as equipes.
                        </p>
                    </div>

                    <div className="bg-zinc-950 p-5 mt-5 rounded-lg">
                        <h1 className="font-black text-xl my-2">Habilidades</h1>
                        <p className="text-sm text-zinc-400">Tenho experiência no desenvolvimento de interfaces responsivas e intuitivas utilizando <strong>Vue.js</strong> (com Quasar e Vite) e <strong>React</strong>, criando componentes reutilizáveis e aplicando <strong>Tailwind CSS</strong> para estilização eficiente.
                            Minha atuação inclui a integração de APIs REST, consumindo e testando endpoints com <strong>Axios</strong> e <strong>Postman</strong>, além da implementação de autenticação e comunicação entre serviços com <strong>Node.js</strong>.
                            Possuo conhecimento em <strong>PostgreSQL</strong>, realizando consultas otimizadas, modelagem de dados e organização de informações para análise e monitoramento. Tenho experiência em controle de versionamento com <strong>Git</strong> e <strong>GitHub</strong>, garantindo a colaboração eficiente em equipes.
                            No desenvolvimento web, utilizo <strong>JavaScript</strong> e <strong>TypeScript</strong> para criar aplicações escaláveis, incluindo projetos em <strong>Next.js</strong>, explorando recursos como SSR (Server-Side Rendering) e SSG (Static Site Generation) para otimização de desempenho.
                            Além disso, integrei sistemas com a plataforma Azure (<strong>PowerBI Embedded</strong>), gerenciei tarefas com <strong>Jira</strong> e <strong>Trello</strong>, e desenvolvi soluções orientadas à experiência do usuário (UX), utilizando <strong>Figma</strong> para prototipagem e validação de interfaces.
                            Sou um profissional <strong>proativo, organizado e colaborativo</strong>, com foco em aprimorar continuamente minhas habilidades e acompanhar as inovações tecnológicas para entregar soluções eficientes e inovadoras</p>
                    </div>
                </div>

                <GuiaPaginas titulo="Contato" icone="PaperPlaneTilt" subTitulo="Clique aqui para enterar em contato comigo" fraseDoBotao="Entrar em contato" rota="/contato"/>
            </div>
        </div>
    )
}