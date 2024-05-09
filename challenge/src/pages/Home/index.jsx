import logo from '../../assets/imgs/logo.png'
import { Container } from './styles' 
import { useEffect, useState } from 'react'
import { data } from '../../data/fazenda.json'
import { RankItem } from '../../components/RankItem'

export function Home() {
    const [contestants, setContestants] = useState([{}]);

    console.log(contestants)

    useEffect(() => {
        setContestants(data);
    }, [])

    return (
        <Container>
            <div className="header">
                <img src={logo} alt="Logo A Fazenda" className="header__logo" />
                <div className="header__title">
                    <h2>RANKING</h2>
                </div>
            </div>
            <div className="ranking"> 
                {
                    contestants && (contestants.map(contestant => (
                        <RankItem info={contestant}/>
                    )))
                }
            </div>
        </Container>
    )
}