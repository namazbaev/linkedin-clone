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
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
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
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.535);
`
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`
export { Container, FollowCard, Title, FeedList, Avatar, Recommendation, BannerCard }
