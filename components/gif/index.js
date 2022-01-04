import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 400px;
    height: 600px;
    background-color: rgb(245,245,245);
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    margin: 10px 10px;
    border-radius: 5px;
`
const ImageBox = styled.div`
    width: 90%;
    height: 65%;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin: 0px 20px;
`

const TextBox = styled.div`
    background-color: white;
    width: 90%;
    height: 20%;
    margin: 0px 20px;
    border-radius: 5px;
`

const Image = styled.img`
    width: ${props => props.orientation === "horizontal" ? "100%" : null };
    height: ${props => props.orientation === "vertical" ? "100%" : null };
    align-self: center;
    border-radius: 5px;
    // margin: 20px;
`

const Title = styled.p`
    font-size: 20px;
    font-family: Roboto;
    margin: 20px;
    text-align: center;
`

export default function Gif({ gif }) {

    const height = +gif.images.original.height;
    const width = +gif.images.original.width;

    return (
        <Card>
            <ImageBox>
                <Image 
                    orientation={(width >= height ? "horizontal":"vertical" )} 
                    src={gif.images.original.url} 
                    alt={gif.title}/>
            </ImageBox>
            <TextBox>
                <Title>{gif.title}</Title>
            </TextBox>
        </Card>
    )
}