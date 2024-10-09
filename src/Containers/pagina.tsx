import { Container } from "./style"

function Pg() {
    return (
        <>
            <Container>
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
                    <button>Tenho minha casa própria</button>
                    <button>Moro de aluguel</button>
                    <button>Moro na casa dos meus pais</button>
                </div>

            </Container>

            <Container>
                <div className="Titulo">
                    <h2>Pergunta 2</h2>
                </div>
                <h1>Você possui alguma dívida no momento?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button>Sim, financiamento da casa</button>
                    <button>Sim, financiamento do carro / moto</button>
                    <button>Sim, Cartão de credito (parcelas)</button>

                </div>
            </Container>

            <Container>
                <div className="Titulo">
                    <h2>Pergunta 3</h2>
                </div>
                <h1>Qual a sua fonte de renda atual?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button>Sou CLT</button>
                    <button>Sou empresário</button>
                    <button>Sou autônomo</button>
                    <button className="endButton">Sou Desempregado</button>
                </div>
            </Container>

            <Container>
                <div className="Titulo">
                    <h2>Pergunta 4</h2>
                </div>
                <h1>O que deseja conquistar com seus investimentos?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button>Comprar algo daqui 1 ano (trocar de carro, viagem)</button>
                    <button>Comprar algo entre 1 a 3 anos (dar entrada num imóvel, festa de casamento)</button>
                    <button>Guarda por bastante tempo (aposentadoria e reservas)</button>
                </div>
            </Container>

            <Container>
                <div className="Titulo">
                    <h2>Pergunta 5</h2>
                </div>
                <h1>O que você pensa sobre investimentos?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button>Exelente oportunidade de ganhar mais dinheiro</button>
                    <button>Comprar algo entre 1 a 3 anos (dar entrada num imóvel, festa de casamento)</button>
                    <button>Guarda por bastante tempo (aposentadoria e reservas)</button>
                </div>

            </Container>

            <Container>
                <div className="Titulo">
                    <h2>Pergunta final</h2>
                </div>

                <h1>Com base no seu perfil de investidor...</h1>

                <p>
                    Encontramos ações uqe custam menos de R$100 e podem começar a multiplicar seu dinheiro já no primeiro mês.
                </p>

                <div className="ContainerButton">
                    <button>Quero saber mais</button>

                </div>
            </Container>
        </>
    )
}

export default Pg
