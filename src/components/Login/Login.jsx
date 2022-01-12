import { Container, Section, SignIn, Join, Nav } from "./Login.style"


const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="logo" />
        </a>
        <div>
          <Join>
            Join now
          </Join>
          <SignIn>
            Sign in
          </SignIn>
        </div>
      </Nav>
      <Section>
        Section
      </Section>
    </Container>
  )
}
export default Login
