
import { Container } from "./style"
import invest from '../../../public/Invest.jpeg'
import Init from "../PaginaInit/Init";
import { useNextStore } from "../../Store/next";
function Pg() {
    function NextQuest() {
        setTimeout(() => {
            setQuest(quest + 1)
        }, 260)
    }
    const { quest, setQuest } = useNextStore();

    const pagina1 = () => {
        if (quest === 0) {
            return (
                <Init />
            );
        }


        if (quest === 1) {
            return (
                <Container style={{ display: 'flex' }}>
                    <div className="Titulo">
                        <h2>Pergunta 1</h2>
                    </div>
                    <div>
                        <h1>Qual sua situação atual?</h1>

                    </div>

                    <p>
                        Sabendo disso Conseguimos te indicar os melhores investimentos
                    </p>

                    <div className="ContainerButton">
                        <button onClick={NextQuest}>Tenho minha casa própria</button>
                        <button onClick={NextQuest}>Moro de aluguel</button>
                        <button onClick={NextQuest}>Moro na casa dos meus pais</button>
                    </div>
                </Container>
            );
        }
        if (quest === 2) {
            return (
                <Container>
                    <div className="Titulo">
                        <h2>Pergunta 2</h2>
                    </div>
                    <h1>Você possui alguma dívida no momento?</h1>

                    <p>
                        Sabendo disso Conseguimos te indicar os melhores investimentos
                    </p>

                    <div className="ContainerButton">
                        <button onClick={NextQuest}>Sim, financiamento da casa</button>
                        <button onClick={NextQuest}>Sim, financiamento do carro / moto</button>
                        <button onClick={NextQuest}>Sim, Cartão de credito (parcelas)</button>

                    </div>
                </Container>
            )
        }
        if (quest === 3) {
            return (
                <Container>
                    <div className="Titulo">
                        <h2>Pergunta 3</h2>
                    </div>
                    <h1>Qual a sua fonte de renda atual?</h1>

                    <p>
                        Sabendo disso Conseguimos te indicar os melhores investimentos
                    </p>

                    <div className="ContainerButton">
                        <button onClick={NextQuest}>Sou CLT</button>
                        <button onClick={NextQuest}>Sou empresário</button>
                        <button onClick={NextQuest}>Sou autônomo</button>
                        <button className="endButton" onClick={NextQuest}>Sou Desempregado</button>
                    </div>
                </Container>
            )
        }
        if (quest === 4) {
            return (
                <Container>
                    <div className="Titulo">
                        <h2>Pergunta 4</h2>
                    </div>
                    <h1>O que deseja conquistar com seus investimentos?</h1>

                    <p>
                        Sabendo disso Conseguimos te indicar os melhores investimentos
                    </p>

                    <div className="ContainerButton">
                        <button onClick={NextQuest}>Comprar algo daqui 1 ano (trocar de carro, viagem)</button>
                        <button onClick={NextQuest}>Comprar algo entre 1 a 3 anos (dar entrada num imóvel, festa de casamento)</button>
                        <button onClick={NextQuest}>Guarda por bastante tempo (aposentadoria e reservas)</button>
                    </div>
                </Container>
            )
        }
        if (quest === 5) {
            return (
                <Container>
                    <div className="Titulo">
                        <h2>Pergunta 5</h2>
                    </div>
                    <h1>O que você pensa sobre investimentos?</h1>

                    <p>
                        Sabendo disso Conseguimos te indicar os melhores investimentos
                    </p>

                    <div className="ContainerButton">
                        <button onClick={NextQuest}>Excelente oportunidade de ganhar mais dinheiro</button>
                        <button onClick={NextQuest}>Não gosto de arriscar. Prefiro algo certeiro</button>
                        <button onClick={NextQuest}>Não sei nada mas quero começar para mudar minha realidade financeira</button>
                    </div>
                </Container>
            )
        }
        if (quest === 6) {
            return (
                <Container>

            
                    <div className="Titulo">
                        <h2>Pergunta final</h2>
                    </div>

                    <h1>Com base no seu perfil de investidor...</h1>
                    <section className="investDiv">
                    <img src={invest}/>
                </section>
                    <p>
                        Encontramos ações que custam menos de R$100 e podem começar a multiplicar seu dinheiro já no primeiro mês.
                    </p>

                    <div className="ContainerButton">
                        <button>
                            <a href="https://pagina-de-vendas-bulr.vercel.app">Quero saber mais</a>
                            </button>
                    </div>
                </Container>
            )
        }
        return null;
    }

    return (
        <>
            {pagina1()}
        </>
    )
}

export default Pg
