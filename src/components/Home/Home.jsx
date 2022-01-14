import { Container, Content, Section, Layout, } from './Home.style';
import { LeftSide, Main, RightSide } from '../../components'
const Home = ({ }) => {
  return (
    <Container>
      {/* <Section>
        <h5><a>Hiring in a hurry? - </a></h5>
        <p>Find talented pros in record time with Upwork and keep business moving.</p>
      </Section> */}
      <Content>
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Content >
    </Container >
  )
}

export default Home
