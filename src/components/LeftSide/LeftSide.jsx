import { useSelector } from 'react-redux'
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText, Widget, Item, CommunityCard } from './LeftSide.style'
const LeftSide = () => {
  const user = useSelector(state => state.userState.user)
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo imgUrl={user !== null ? user.photoURL : '/images/photo.svg'} />
            <Link>Welcome, {user !== null ? user.displayName : 'there!'}</Link>
          </a>
          <a>
            <AddPhotoText>
              Add a photo
            </AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="widget-icon" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="item-icon" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="plus-icon" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  )
}
export default LeftSide
