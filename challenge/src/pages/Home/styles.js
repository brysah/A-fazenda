import styled from "styled-components";

export const Container = styled.main`
  min-width: 40rem;
  width: 100%;
  margin: 0 auto;

  .header {
    position: relative;
    height: 7rem;
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
  .ranking { 
    background: #FFF;
    margin-top: 1.6rem;
    width: 100%;
    &__item {
      display: flex;
      gap: 2rem;
      align-items: center;
      &__image {
        position: relative;
        max-width: 6.6rem;
        &__counter {
          position: absolute;
          bottom: -5px;
          right: 3px;
          color: gray;
          height: 2rem;
          width: 2rem;
          background-color: #fff;
          border-radius: 50%;
          border: 1px solid gray;
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }
      }
      &__text {
        &__title {
          font-size: 1.8rem;
          color: rgb(186, 54, 56);
          line-height: 1.2;
        }
        &__description {
          font-size: 1.2rem;
          color: rgb(144, 144, 144);
          line-height: 1.2;
        }
      }
    }
  }
`;
