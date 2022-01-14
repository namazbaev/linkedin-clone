import styled from "styled-components";

const Container = styled.div`
  grid-area: leftside;
`
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`
const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`
const Photo = styled.div`
  box-shadow: none;
  background-image: url('/images/photo.svg');
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: #fff;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  margin: -32px auto 12px;
  border-radius: 50%;
`
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  cursor: pointer;
`
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  & > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
    color: rgba(0, 0, 0, 6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`
const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  a {
    color: #000;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: #0a66c2;
    &:hover {
      text-decoration: underline;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #0a66c2;
      padding: 12px;
      text-align: center;
      display: flex;
      justify-content: center;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`
export { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText, Widget, Item, CommunityCard }