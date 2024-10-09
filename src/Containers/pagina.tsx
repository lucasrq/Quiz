import { useState } from "react"
import { Container } from "./style"

function Pg() {

    const [modal ,setModal] = useState(1)

    const pagina1 = () => {
        if(modal === 1){
            return(
            <Container style={{display: 'flex'}}>
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
                    <button onClick={ModalAcrecent}>Tenho minha casa própria</button>
                    <button onClick={ModalAcrecent}>Moro de aluguel</button>
                    <button onClick={ModalAcrecent}>Moro na casa dos meus pais</button>
                </div>
            </Container>
            );
        }
        if(modal === 2){
            return(
                <Container>
                <div className="Titulo">
                    <h2>Pergunta 2</h2>
                </div>
                <h1>Você possui alguma dívida no momento?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button onClick={ModalAcrecent}>Sim, financiamento da casa</button>
                    <button onClick={ModalAcrecent}>Sim, financiamento do carro / moto</button>
                    <button onClick={ModalAcrecent}>Sim, Cartão de credito (parcelas)</button>

                </div>
            </Container>
            )
        }
        if(modal === 3){
            return(
                <Container>
                <div className="Titulo">
                    <h2>Pergunta 3</h2>
                </div>
                <h1>Qual a sua fonte de renda atual?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button onClick={ModalAcrecent}>Sou CLT</button>
                    <button onClick={ModalAcrecent}>Sou empresário</button>
                    <button onClick={ModalAcrecent}>Sou autônomo</button>
                    <button className="endButton" onClick={ModalAcrecent}>Sou Desempregado</button>
                </div>
            </Container>
            )
        }
        if(modal === 4){
            return(
                <Container>
                <div className="Titulo">
                    <h2>Pergunta 4</h2>
                </div>
                <h1>O que deseja conquistar com seus investimentos?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button onClick={ModalAcrecent}>Comprar algo daqui 1 ano (trocar de carro, viagem)</button>
                    <button onClick={ModalAcrecent}>Comprar algo entre 1 a 3 anos (dar entrada num imóvel, festa de casamento)</button>
                    <button onClick={ModalAcrecent}>Guarda por bastante tempo (aposentadoria e reservas)</button>
                </div>
            </Container>
            )
        }
        if(modal === 5){
            return(
                <Container>
                <div className="Titulo">
                    <h2>Pergunta 5</h2>
                </div>
                <h1>O que você pensa sobre investimentos?</h1>

                <p>
                    Sabendo disso Conseguimos te indicar os melhores investimentos
                </p>

                <div className="ContainerButton">
                    <button onClick={ModalAcrecent}>Exelente oportunidade de ganhar mais dinheiro</button>
                    <button onClick={ModalAcrecent}>Comprar algo entre 1 a 3 anos (dar entrada num imóvel, festa de casamento)</button>
                    <button onClick={ModalAcrecent}>Guarda por bastante tempo (aposentadoria e reservas)</button>
                </div>
            </Container>
            )
        }
        if(modal === 6){
            return(
                <Container>
                <div className="Titulo">
                    <h2>Pergunta final</h2>
                </div>

                <h1>Com base no seu perfil de investidor...</h1>

                <p>
                    Encontramos ações que custam menos de R$100 e podem começar a multiplicar seu dinheiro já no primeiro mês.
                </p>

                <div className="ContainerButton">
                    <button>Quero saber mais</button>

                </div>
            </Container>
            )
        }
        return null;
    }
    function ModalAcrecent(){
        setTimeout(() =>{
            setModal(modal + 1)
        }, 200)
    }
    return (
        <>
            {pagina1()}
        </>
    )
}

export default Pg
