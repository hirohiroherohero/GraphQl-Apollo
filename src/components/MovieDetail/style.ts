import styled from '@emotion/styled';

interface Type {
  imgUrl?: string;
}

export const MovieDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 154px);
  padding: 0 100px;
  color: #e8e8e8;
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    background: url(${(props: Type) => props.imgUrl && props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.9;
    z-index: -1;
  }
  .title {
    font-size: 70px;
    font-weight: bold;
  }
  ul {
    margin: 20px 0;
    display: flex;
    li {
      font-size: 30px;
      margin-right: 10px;
    }
  }
  .direction {
    font-size: 20px;
    line-height: 1.3;
  }
`;
