import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: #fff;
  padding: 1.6rem 2.4rem; 
  width: 100%;
  .ranking__item {
    &__image {
      position: relative;
      max-width: 6.6rem;
      img {
        object-fit: cover;
        border: 3px solid red;
        border-radius: 50%;
        width: 6.6rem;
        height: 6.6rem;
      }
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
`;
