import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  const FlexedDiv = styled.div`
    display: flex;
  `;

  return (
    <FlexedDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </FlexedDiv>
  );
}
