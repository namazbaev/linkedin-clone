import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid (rgba(0, 0, 0, 0.08));
  top: 0;
  left: 0;
  padding: 0 24px;
  position: fixed;
  width: 100vw;
  z-index: 100;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 5px auto;
  min-height: 100%;
  max-width: 1128px;
`
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`
const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
`
const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 1.5px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      display: flex;
      justify-content: center;
      align-items: center;

    }
  }
`
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`
const Try = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    min-height: 42px;
    max-width: 100px;
    text-align: center;
    text-decoration: none;
    span {
      color: #5d3b09;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover {
    text-decoration: underline;
  }

`

export { Container, Content, Logo, Search, SearchIcon, Nav, NavListWrap, NavList, User, Work, Try, SignOut }