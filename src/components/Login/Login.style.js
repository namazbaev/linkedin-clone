import styled from 'styled-components'
const Container = styled.div`
  padding: 0;

`
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`
const Join = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0,0,0,0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    color: rgba(0,0,0,0.9);
    background-color: rgba(0,0,0,0.08);
    text-decoration: none;
  }
`
const SignIn = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  color: #0a66c2;
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    color: #0a66c2;
    outline: 1.5px solid;
    text-decoration: none;
    background-color: rgba(112, 181, 249, 0.15);
  }
`
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  min-height: 700px;
  padding-top: 40px;
  padding-bottom: 138px;
  padding: 60px 0;
  position: relative;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    color: #8f5849;
    font-size: 56px;
    font-weight: 200;
    line-height: 67px;

    @media (max-width: 768px) {
      width: 100%;
      line-height: 2;
      font-size: 25px;
      text-align: center;
    }
  }
  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`
const Form = styled.div`
  margin-top: 100px;
  width: 410px;
  @media (max-width: 768px) {
      margin-top: 20px;
    }
`
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 0;
  cursor: pointer;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background-color: rgba(207, 207, 207, 0.25);
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
  }
  img {
    margin-right: 25px;
  }
`

export { Container, Nav, Join, Hero, Google, Form, SignIn, Section }