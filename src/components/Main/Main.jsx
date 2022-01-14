import { useState } from 'react'
import { useSelector } from 'react-redux'
import { PostModal } from '../index'
import { Container, ShareBox, Article, SharedActor, Description, SharedImg, SocialCounts, SocialActions } from './Main.style'
const Main = () => {
  const [showModal, setShowModal] = useState('close')
  const user = useSelector(state => state.userState.user)
  const handleClick = e => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case 'open':
        setShowModal('close')
        break;
      case 'close':
        setShowModal('open')
        break;
      default:
        setShowModal('close')
    }
  }
  return (
    <Container>
      <ShareBox>
        <div>
          {user && user.photoURL ? <img src={user.photoURL} alt="nav-user" /> : <img src="/images/user.svg" alt="nav-user" />}
          <button onClick={handleClick}>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="photo-icon" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="video-icon" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="event-icon" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="article-icon" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/linkedin.png" alt="linkedin" />
              <div>
                <span>LinkedIn</span>
                <span>20,587 followers</span>
                <span>12.01.2022</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="ellipsis" />
            </button>
          </SharedActor>
          <Description>Get access to LinkedIn Learning courses, InMail credits, and new Interview Prep features.</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-img.png" alt="shared-img" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.svg" alt="like" />
                <img src="/images/like.svg" alt="like" />
                <span>75</span>
              </button>
            </li>
            <li>
              <span>1,480 comments</span>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like1.svg" alt="like" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.svg" alt="comment" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/shared-icon.svg" alt="share" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="send" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/react-icon.png" alt="react-icon" />
              <div>
                <span>React Jobs</span>
                <span>171,488 followers</span>
                <span>19h</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="ellipsis" />
            </button>
          </SharedActor>
          <Description>Automatic batching in React 18 helps avoid re-rendering #ReactJS
            ---
            Comments #JavaScript</Description>
          <SharedImg>
            <a>
              <img src="/images/react-jobs.jpg" alt="react-jobs" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.svg" alt="like" />
                <img src="/images/like.svg" alt="like" />
                <span>75</span>
              </button>
            </li>
            <li>
              <span>714 comments</span>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like1.svg" alt="like" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.svg" alt="comment" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/shared-icon.svg" alt="share" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="send" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/react-icon.png" alt="react-icon" />
              <div>
                <span>Darya Rodina</span>
                <span>GameDev, IT recruiter в компании Red Rift, Inc.</span>
                <span>10h</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="ellipsis" />
            </button>
          </SharedActor>
          <Description>Мы начинаем работу на ААА проектом, и нам оооочень нужны:
            <br />
            Unity developers (Middle/Senior/Lead) <br />
            C# Back end developers (senior/Lead)</Description>
          <SharedImg>
            <a>
              <img src="/images/post-3.jpg" alt="post-3" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.svg" alt="like" />
                <img src="/images/like.svg" alt="like" />
                <span>75</span>
              </button>
            </li>
            <li>
              <span>931 comments</span>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like1.svg" alt="like" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.svg" alt="comment" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/shared-icon.svg" alt="share" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="send" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  )
}

export default Main
