import styled from "styled-components";

export const Container = styled.main`
  min-width: 40rem;
  width: 100%;
  margin: 0 auto;

  background-color: peachpuff;
  .header {
    position: relative;
    &__logo {
      position: absolute;
      left: 0;
      top: -11rem;
    }
    &__title {
      background-color: #fff;
      padding: 1.6rem 3.2rem;
      float: right;
      width: 30rem;
      h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: end;
      }
    }
  }
`;
