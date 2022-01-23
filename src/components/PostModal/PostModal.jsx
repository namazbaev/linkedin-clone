import { useState } from 'react'
import { Container, Content, Header, SharedContent, UserInfo, ShareCreation, AssetButton, AttachAssets, ShareComment, PostButton, Editor, UploadImage } from './PostModal.style'
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestore } from 'firebase/firestore';
import { postArticleAPI } from '../../actions';
const PostModal = ({ showModal, handleClick }) => {
  const [videoLink, setVideoLink] = useState('')
  const [assetArea, setAssetArea] = useState('')
  const [editorText, setEditorText] = useState('')
  const [shareImage, setShareImage] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.userState.user)
  const handleChange = e => {
    const image = e.target.files[0];
    if (image === '' || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image)
  }
  const switchAssetArea = (area) => {
    setVideoLink('')
    setShareImage('')
    setAssetArea(area)
  }
  const postArticle = e => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      console.log('hello');
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      // timestamp: getFirestore().FieldValue.serverTimestamp()
    }
    dispatch(postArticleAPI(payload));
    reset(e);
  }
  const reset = (e) => {
    setVideoLink('')
    setVideoLink('')
    setAssetArea('')
    setEditorText('')
    handleClick(e)
  }
  return (
    <>
      {showModal === 'open' &&
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {user.photoURL ? <img src={user.photoURL} alt={user.photoURL} /> : <img src="/images/user.svg" alt="" />}
                <span>{user && user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea placeholder='What do you want to talk about?' autoFocus={true}
                  value={editorText} onChange={(e) => setEditorText(e.target.value)} />
                {assetArea === 'image' ?
                  <UploadImage>
                    <input type="file" accept='image/gif, image/jpeg, image/png' name='image' id='file' style={{ display: 'none' }} onChange={handleChange} />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} />}</UploadImage> :
                  assetArea === 'media' &&
                  <>
                    <input type="text" value={videoLink} placeholder='Please input a video link'
                      onChange={(e) => setVideoLink(e.target.value)} />
                    {videoLink && <ReactPlayer width='100%' url={videoLink} />}
                  </>
                }
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}>
                  <img src="/images/plus-icon.svg" alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea('media')}>
                  <img src="/images/plus-icon.svg" alt="" />
                </AssetButton>
                {/* <AssetButton>
                  <img src="/images/photo-upload.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/feed-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/google.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/plus-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/ellipsis.svg" alt="" />
                </AssetButton> */}
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/comment.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton onClick={(event) => postArticle(event)} disabled={!editorText ? true : false}>Post</PostButton>
            </ShareCreation>
          </Content>
        </Container>}
    </>
  )
}

export default PostModal
