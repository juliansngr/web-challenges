import styled from "styled-components";

export default function BoxWithStyledComponents(props) {
  const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: green;
    margin: 2rem;
    background-color: ${props.isBlack && "black"};
    &:hover {
      background-color: red;
    }
  `;

  return (
    <>
      <StyledBox props={props} />
    </>
  );
}
