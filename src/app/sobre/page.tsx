import GuiaPaginas from "../components/guiaPaginas";
import Listagem from "../components/listagem";

export default function Sobre(){
    return(
        <div className="flex lg:mt-20 lg:mb-5 lg:mx-5 rounded-xl max-lg:m-4 max-lg:mb-14">
            <div className="max-w-[800px] m-auto w-full text-zinc-50 py-5">

                <strong className="text-3xl">Sobre mim</strong>
                <p className="text-zinc-400 mt-5">Sou um desenvolvedor front-end júnior apaixonado por criar soluções inovadoras e otimizadas para a web. Tenho experiência em desenvolvimento de interfaces intuitivas,
                    integração de APIs e criação de plataformas. Trabalho com tecnologias como Vue.js, React, JavaScript, Node.js e SQL, sempre focado em entregar código limpo e eficiente.</p>

                <div className="bg-zinc-950 p-5 mt-5 rounded-xl">
                    <div className="bg-[#D8FA00] p-2 rounded-lg text-xl">
                        <strong className="text-zinc-800">Tecnólogo em Análise e Desenvolvimento de Sistemas</strong>
                    </div>
                    <p className="font-bold mt-1">Centro Universitário Senac PE</p>
                    <p className="text-sm text-zinc-400">Ago de 2022 - Dez de 2024</p>
                    <p className="text-xs text-zinc-400 mt-2">O Tecnólogo em Análise e Desenvolvimento de Sistemas é um curso superior que abrange áreas como
                        programação, bancos de dados, engenharia de software, segurança da informação e inteligência artificial. O profissional formado pode
                        atuar como desenvolvedor, analista de sistemas, arquiteto de software, entre outras funções, em diversos setores da tecnologia.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                    
                    <div className="bg-zinc-950 p-5 mt-5 rounded-lg">
                        <h1 className="font-semibold my-2">Experiências</h1>
                        <p className="text-sm text-zinc-400">Iniciei minha trajetória profissional como <strong>Jovem Aprendiz na Liferay</strong>, atuando na área de marketing digital. Durante esse período,
                             tive a oportunidade de trabalhar na criação de artes visuais para campanhas e na organização de documentos, desenvolvendo um olhar apurado para design e experiência do usuário. Foi nesse ambiente que conheci o mundo da programação, ao explorar ferramentas digitais e entender a importância da tecnologia na criação de interfaces interativas.  
                            Com esse novo interesse, me aprofundei no desenvolvimento front-end, unindo meu conhecimento em design com a construção de interfaces mais funcionais. Isso me levou a uma experiência
                             transformadora como <strong>estagiário fullstack no SENAI - Observatório da Indústria</strong>, onde trabalhei no desenvolvimento de <strong>componentes reutilizáveis em Vue.js</strong>, integração de APIs e
                              manutenção de plataformas web. Durante o estágio, também participei de projetos que exigiram a criação de interfaces intuitivas e otimizadas para uma melhor experiência do usuário,
                               alinhando as necessidades técnicas com as boas práticas de design.  
                            Além disso, tive a oportunidade de aplicar meus conhecimentos na criação de um <strong>aplicativo de fidelização e descontos para o Porto de Suape</strong>, onde fui responsável pela construção
                             da interface em <strong>React Native</strong> e pela configuração do back-end em <strong>Node.js</strong>, implementando funcionalidades como geolocalização, autenticação de usuários e geração de QR Codes.  
                            Minha trajetória une a criatividade adquirida no marketing com a lógica da programação, permitindo-me desenvolver soluções eficientes que entregam uma experiência de usuário de alta
                             qualidade e impactam diretamente os resultados dos projetos.</p>
                    </div>

                    <div className="bg-zinc-950 p-5 mt-5 rounded-lg">
                        <h1 className="font-semibold my-2">Habilidades</h1>
                        <p className="text-sm text-zinc-400">Tenho experiência no desenvolvimento de interfaces responsivas e intuitivas utilizando <strong>Vue.js</strong> e <strong>React</strong>, criando componentes reutilizáveis e aplicando <strong>Tailwind CSS </strong>
                             para estilização eficiente. Minha atuação inclui a integração de APIs REST, consumindo e testando endpoints com <strong>Axios</strong> e <strong>Postman</strong>, além da implementação de autenticação e comunicação entre serviços com <strong>Node.js</strong>.  
                            Possuo conhecimento em <strong>PostgreSQL</strong>, realizando consultas otimizadas e organizando dados para análise e monitoramento. No desenvolvimento web, utilizo <strong>JavaScript</strong> e <strong>TypeScript</strong> para criar aplicações escaláveis,
                             além de ferramentas como <strong>Git e GitHub</strong> para versionamento e colaboração. Também tenho experiência com <strong>Next.js</strong>, aproveitando recursos como SSR e SSG para otimização de desempenho.  
                            Sou um profissional <strong>proativo, organizado e colaborativo</strong>, sempre buscando aprimorar minhas habilidades e acompanhar as tendências do mercado para entregar soluções inovadoras e eficientes.</p>
                    </div>
                </div>

                <GuiaPaginas titulo="Contato" icone="PaperPlaneTilt" subTitulo="Clique aqui para enterar em contato comigo" fraseDoBotao="Entrar em contato" rota="/contato"/>
            </div>
        </div>
    )
}