import { Container, Login as LoginComponent } from '../components'

function LoginPage() {
    console.log('in login page');

    return (
        <div>
            <Container>
                <LoginComponent />
            </Container>

        </div>
    )
}

export default LoginPage