import logo from '../../assets/imgs/logo.png'
import { Container } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { data } from '../../data/fazenda.json'
import { RankItem } from '../../components/RankItem'

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


    const calculatePercentage = useCallback((positive, negative) => {
        if (typeof positive === 'string') positive = Number(positive);
        if (typeof negative === 'string') negative = Number(negative);
        const total = positive + negative;
         if (isNaN(total)) return (null)
        const resultPostive = Math.round(100 * positive / total);
        const resultNegative = Math.round(100 * negative / total);
        return ({ negative: resultNegative, positive: resultPostive })
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
                        index % 2 === 0 ? <RankItem info={contestant} key={contestant.__id} /> :
                            <RankItem info={contestant} key={contestant.__id} />
                    )))
                }
            </div>
        </Container>
    )
}