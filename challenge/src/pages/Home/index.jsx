import logo from '../../assets/imgs/logo.png'
import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <div className="header">
                <img src={logo} alt="Logo A Fazenda" className="header__logo" />
                <div className="header__title">
                    <h2>RANKING</h2>
                </div>
            </div>
        </Container>
    )
}