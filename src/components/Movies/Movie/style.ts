import styled from '@emotion/styled';

interface Type {
  imgUrl?: string;
}

export const MovieStyle = styled.div`
  border: 3px solid;
  position: relative;
  .movie-img {
    background: url(${(props: Type) => props.imgUrl && props.imgUrl}), black;
    background-repeat: no-repeat;
    background-size: cover;
    height: 345px;
    background-position: center;
  }
  .movie-short-description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #e8e8e8;
    overflow: scroll;
    height: 100%;
    width: 90%;
    height: 90%;
    display: none;
    p {
      border-bottom: 3px solid;
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 18px;
    }
    div {
      padding-top: 5px;
      line-height: 1.3;
    }
  }
  .dim {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
  }
  &:hover {
    .movie-short-description {
      display: block;
    }
    .dim {
      display: block;
    }
  }
`;
