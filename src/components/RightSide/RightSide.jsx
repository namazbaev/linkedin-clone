import { Container, FollowCard, Title, FeedList, Avatar, Recommendation, BannerCard, FollowButton } from './RightSide.style'
const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="feed-icon" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <a>
                <p>
                  Satya Nadella
                </p>
                <div>
                  <p>
                    Chairman and CEO at Microsoft
                  </p>
                </div>
              </a>
              <FollowButton>
                <img src="/images/plus-icon.png" alt="" />
                <h1>Follow</h1>
              </FollowButton>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <a>
                <p>
                  Vera Filatova
                </p>
                <div>
                  <p>
                    IT Talent sourcer
                  </p>
                </div>

              </a>
              <FollowButton>
                <img src="/images/plus-icon.png" alt="" />
                <h1>Follow</h1>
              </FollowButton>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <a>
                <p>
                  Muhammad Khalil
                </p>
                <div>
                  <p>
                    Co-Founder at Mohirdev
                  </p>
                </div>

              </a>
              <FollowButton>
                <img src="/images/plus-icon.png" alt="" />
                <h1>Follow</h1>
              </FollowButton>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="right-icon" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
      </BannerCard>
    </Container>
  )
}

export default RightSide
