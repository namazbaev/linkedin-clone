import { Container, Section, SignIn, Join, Google, Form, Hero, Nav } from "./Login.style"


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
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="login-hero" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}
export default Login
