import logo from '../../assets/imgs/logo.png'
import { Container } from './styles'
import barbara from '../../assets/imgs/barbara.png'

export function Home() {
    return (
        <Container>
            <div className="header">
                <img src={logo} alt="Logo A Fazenda" className="header__logo" />
                <div className="header__title">
                    <h2>RANKING</h2>
                </div>
            </div>
            <div className="ranking">
                <div className="ranking__item">
                    <div className="ranking__item__image">
                        <img src={barbara} alt="barbara" />
                        <div className="ranking__item__image__counter">1</div>
                    </div>
                    <div className="ranking__item__text">
                        <h3 className="ranking__item__text__title">Barbara Evans</h3>
                        <p className="ranking__item__text__description">Modelo e filha de Monique Evans</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}