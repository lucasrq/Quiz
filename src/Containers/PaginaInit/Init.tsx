import { Container } from "./style"
import SuitMan from '../../../public/Suit.png'
import { useNextStore } from "../../Store/next";

function Init(){

    const { quest, setQuest} = useNextStore();

    function NextQuest(){
        setTimeout(() =>{
            setQuest(quest + 1)
        }, 260)
    }
    return(
        <>
        <Container>
                <h1>
                    Aprenda a investir em Menos de 24 Horas e Comece a ganhar uma  
                    <u> Renda Passiva</u> TODOS os meses
                </h1>

                <h2>
                    Descubra seu Perfil de investidor com esse Teste de 2 minutos
                </h2>

                <section className="ContainerButton">
                    <button onClick={NextQuest}>Comecar Teste Gratuito</button>
                </section>
                

                <section className="SuitManDiv">
                    <img src={SuitMan}/>
                </section>
        </Container>
        </>
    )
}

export default Init