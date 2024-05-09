import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  .ranking__item {
    display: flex;
    gap: 2rem;
    align-items: center;
    background-color: #fff;
    padding: 1.6rem 2.4rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s;
    &__image {
      position: relative;
      max-width: 6.6rem;
      img {
        object-fit: cover;
        border: 3px solid red;
        border-radius: 50%;
        width: 6.6rem;
        height: 6.6rem;
        transition: all 0.3s;
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
  .tooltip__wrapper {
    visibility: hidden; 
    width: 15.5rem;
    background-color: white;
    color: #fff;
    text-align: center;
    border-radius: 6px; 
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 103%;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 1fr 1fr;

    .left {
      border-right: 1px solid black;
      .tooltip__header {
        border-top-left-radius: 6px;
      }
    }

    .right {
      .tooltip__header {
        border-top-right-radius: 6px;
      }
    }

    .tooltip__header {
      background-color: rgb(186, 54, 56);
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      color: white;
      font-size: 1rem;
      padding: 0.5rem 0;
    }
    .tooltip__percentage{
      font-size: 2.4rem;
      font-weight: bold;
      text-align: center;
      padding: 0.5rem 0;
      color: gray;
    }

    .tooltip__message{ 
      font-size: 1.6rem;
      color: black;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent white transparent transparent;
    }
    &:has(p){
      display: block;
      padding: 1rem;
    }
  }
  

  &:hover {
    .ranking__item {
      background-color: rgb(186, 54, 56);
      &__image {
        img {
          border-color: white;
        }
      }
      &__text {
        &__title {
          color: white;
        }
        &__description {
          color: #000;
        }
      }
    }
    .tooltip__wrapper {
      visibility: visible;
    }
  }
`;
