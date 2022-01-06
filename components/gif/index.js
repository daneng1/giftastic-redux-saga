import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 43vh;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  border-radius: 5px;
  overflow: hide;
`;

const Image = styled.img`
  height: 40vh;
  align-self: center;
  border-radius: 5px;
`;

export default function Gif({ gif }) {
  const height = +gif.images.original.height;
  const width = +gif.images.original.width;

  return (
    <Card>
      <label>
        {gif.title}
        <Image
          orientation={width >= height ? "horizontal" : "vertical"}
          src={gif.images.original.url}
          alt={gif.title}
        />
      </label>
    </Card>
  );
}
