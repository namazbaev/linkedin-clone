import { Container, Content, Logo, Search, SearchIcon, Nav, NavListWrap, NavList, User, Work } from './Header.style'
const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home-logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder='Search' />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search-icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <a>
                <img src="/images/nav-home.svg" alt="nav-home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="nav-network" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="nav-jobs" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="nav-messaging" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="nav-notifications" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="nav-user" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="nav-down" />
              </a>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="nav-user" />
                <span>Work</span>
                <img src="/images/down-icon.svg" alt="nav-down" />
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header
