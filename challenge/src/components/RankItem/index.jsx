import { Container } from "./styles"

export function RankItem({info}) {
    return (
        <Container>
            <div className="ranking__item__image">
                <img src={info.picture} alt="barbara" />
                <div className="ranking__item__image__counter">0</div>
            </div>
            <div className="ranking__item__text">
                <h3 className="ranking__item__text__title">{info.name}</h3>
                <p className="ranking__item__text__description">{info.description}</p>
            </div>
        </Container>
    )
}