import styled from "styled-components";

const Container = styled.div`
  grid-area: main;
`
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) 0 0 0 rgb(0 0 0 / 20%);
`
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  div {
    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        cursor: pointer;
        text-align: left;
        border-radius: 35px;
        padding-left: 16px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      border-radius: 10px;
      button {
      cursor: pointer;
        img {
          margin: 0 10px 0 0;
        }
        span {
          font-size: 14px;
          line-height: 17px;
          font-weight: 600;
          color: rgba(102, 102, 102, 0.7);
        }
        &:hover {
          border-radius: 5px;
          background-color: rgba(102, 102, 102, 0.10);
        }
      }
    }
  }
`
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        cursor: pointer;
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          color: rgba(0, 0, 0, 1);
          &:hover {
            text-decoration: underline;
            color: #0a66c2;
          }
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          line-height: 16px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    top: 0;
    margin-top: 8px;
    right: 12px;
    background: transparent;
    border: none;
    outline: none;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(102, 102, 102, 0.10);
    }
  }
`
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  font-weight: 400;
`
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    span {
      &:hover {
        color: #0a66c2;
        cursor: pointer;
        text-decoration: underline;
      }
    }
    button {
      outline: none;
      border: none;
      display: flex;
      background-color: #fff;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin:0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    border: none;
    outline: none;
    display: inline-flex;
    align-items: center;
    padding: 8px 24px;
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    border-radius: 5px;
    background-color: #fff;
    color: rgba(102, 102, 102, 0.8);
    &:hover {
      cursor: pointer;
      background-color: rgba(102, 102, 102, 0.10);
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`
export { Container, ShareBox, Article, SharedActor, Description, SharedImg, SocialCounts, SocialActions }