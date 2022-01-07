import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 43vh;
  position: relative;
//   flex-direction: column;
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

const InfoWrapper = styled.div`
    // height: 20vh;
    position: absolute;
    margin: 0 auto;
    background-color: rgba(255,255,255,.75)
`

const Title = styled.p`
    font-size: 28px;
`

export default function Gif({ gif }) {
  const [viewModal, setViewModal] = useState(false);
  const height = +gif.images.original.height;
  const width = +gif.images.original.width;

  return (
    <Card>
      <label>
        {/* {gif.title} */}
        {viewModal && 
            <InfoWrapper>
                <Title>{gif.title}</Title>
            </InfoWrapper>

        }
            <a target="_blank" href={gif.url}>
        <Image
        onMouseEnter={() => setViewModal(true)}
        onMouseLeave={() => setViewModal(false)}
          orientation={width >= height ? "horizontal" : "vertical"}
          src={gif.images.original.url}
          alt={gif.title}
        />
            </a>
      </label>
    </Card>
  );
}
