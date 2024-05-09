import { Container } from "./styles"

export function RankItem({ info }) {


    return (
        <Container>
            <div className="ranking__item">
                <div className="ranking__item__image">
                    <img src={info.picture} alt={info.name} />
                    <div className="ranking__item__image__counter">0</div>
                </div>
                <div className="ranking__item__text">
                    <h3 className="ranking__item__text__title">{info.name}</h3>
                    <p className="ranking__item__text__description">{info.description}</p>
                </div>
            </div>
            <div className="tooltip__wrapper">
                {
                    info.percentage ? (
                        <>
                            <div className="left">
                                <h3 className="tooltip__header">Gostam</h3>
                                <h3 className="tooltip__percentage">{info.percentage.positive}%</h3>
                            </div>
                            <div className="right">
                                <h3 className="tooltip__header">Não Gostam</h3>
                                <h3 className="tooltip__percentage">{info.percentage.negative}%</h3>
                            </div>
                        </>
                    ) : (<p className="tooltip__message"> Não foi possível obter os dados</p> )
                }
            </div>
        </Container>
    )
}