import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: #000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`
const Content = styled.div`
  width: 100%;
  max-height: 90%;
  max-width: 552px;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 20px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 400;
  }
  button {
    text-align: center;
    width: 40px;
    height: 40px;
    min-width: auto;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    background: transparent;
    color: rgba(102, 102, 102, 0.15);
    &:hover {
      background-color: rgba(102, 102, 102, 0.15);
    }
    svg, img {
      pointer-events: none;
    }
  }
`
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg, img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    margin-left: 5px;
  }
`
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  img {
    width: 20px;
  }
`
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`
const PostButton = styled.button`
  min-width: 60px;
  min-height: 30px;
  border-radius: 20px;
  padding: 0 16px;
  outline: none;
  border: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? "no-drop" : "pointer"};
  color: ${({ disabled }) => disabled ? 'rgba(102, 102, 102, 0.8)' : '#fff'};
  background-color: ${({ disabled }) => disabled ? 'rgba(102, 102, 102, 0.15)' : '#0a66c2'};
  &:hover {
    background-color: ${({ disabled }) => disabled ? 'rgba(102, 102, 102, 0.15)' : '#1e3799'};
  }
`
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    font-size: 16px;
    line-height: 24px;
    resize: none;
    outline: none;
    border: none;
    color: rgba(0, 0, 0, 0.9);
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`
export { Container, Content, Header, SharedContent, UserInfo, ShareCreation, AssetButton, AttachAssets, ShareComment, PostButton, Editor, UploadImage }