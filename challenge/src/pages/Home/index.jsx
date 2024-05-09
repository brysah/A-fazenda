import logo from '../../assets/imgs/logo.png'
import { Container } from './styles'
import { useEffect, useState } from 'react'
import { data } from '../../data/fazenda.json'
import { RankItem } from '../../components/RankItem'
import { calculatePercentage } from '../../utils/calculatePercentage'

export function Home() {
    const [contestants, setContestants] = useState();

    useEffect(() => {
        let dataSorted = data.map(contestant => ({
            ...contestant,
            percentage: calculatePercentage(contestant.positive, contestant.negative)
        }))
        dataSorted.sort((a, b) =>  b.percentage?.positive - a.percentage?.positive )
        setContestants(dataSorted);
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
                    contestants && (contestants.map((contestant, index) => ( 
                            <RankItem info={contestant} key={contestant.__id} index={index + 1}/>
                    )))
                }
            </div>
        </Container>
    )
}