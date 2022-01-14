import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText, Widget, Item } from './LeftSide.style'
const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
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
    </Container>
  )
}
export default LeftSide
