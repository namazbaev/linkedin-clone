import styled from 'styled-components'
export const Container = styled.div`
  padding: 0;

`
export const Nav = styled.div`
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
export const Join = styled.a`
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
export const SignIn = styled.a`
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
export const Section = styled.section`
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