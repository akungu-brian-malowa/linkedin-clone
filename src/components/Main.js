import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/imges/event-icon.svg" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/imges/video-icon.svg" />
            <span>video</span>
          </button>
          <button>
            <img src="/imges/event-icon.svg" />
            <span>Events</span>
          </button>
          <button>
            <img src="/imges/article-icon.svg" />
            <span>Write articale</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Titile</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-image.jpeg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.svg" alt="" />
                <img src="/images/clapp.svg" alt="" />
                <span>69</span>
              </button>
            </li>
            <li>
              <a>
                <span>2 comments</span>
              </a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.svg" alt="" />
              <span>comments </span>
            </button>
            <button>
              <img src="/images/share.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%, 0 0 0 rgba(0 0 0 /20%));
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;

  div {
    button {
      outline: none;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
      min-height: 48px;
      align-items: center;
      font-weight: 600;
      display: flex;
      border: none;
      background-color: transparent;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: center;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  overflow: visible;
  margin: 0 0 8px;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: wrap;
  padding: 12px 16px 0;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      width: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin: 8px;
  width: 100px;
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  text-align: center;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
        background-color: transparent;
      }
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    text-align: center;
    padding: 8px;
    color: #0a66c2;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }

    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export default Main;
