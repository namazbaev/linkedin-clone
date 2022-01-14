import styled from "styled-components";

const Container = styled.div`
  grid-area: rightside;
`
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
  cursor: pointer;
`
const Title = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  width: 100%;
  color: rgba(0, 0, 0, 0.7);
`
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
      text-align: left;
      a {
          p {
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.7);
          }
          div {
            p {
              margin-bottom: 5px;
              font-size: 12px;
              line-height: 20px;
              font-weight: 200;
              color: rgba(0, 0, 0, 0.5);
            }
          }
      }
      span {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
      }
    }
  }
`
const FollowButton = styled.div`
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 16px;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 32px;
  max-width: 100px;
  /* text-align: center; */
  outline: none;
  span {
    font-size: 16px;
    font-weight: 600;
  }
  img {
    width: 16px;
    height: 16px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.5);
  }
`
const Avatar = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7McBayrdplBIGpRQpthaW_g4J-jokJv9rtw&usqp=CAU");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 8px;
`
const Recommendation = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 2px 10px;
  color: #0a66c2;
  cursor: pointer;
  img {
    color: #fff;
    margin-left: 5px;
  }
  &:hover {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.10);
  }
`
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`
export { Container, FollowCard, Title, FeedList, Avatar, Recommendation, BannerCard, FollowButton }
