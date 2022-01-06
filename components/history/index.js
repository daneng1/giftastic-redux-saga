import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const HistoryContainer = styled.div`
    position: absolute;
    z-index: 1;
    background-color: pink;
    margin-left: 130px;
    width: 55%;
`
const List = styled.ul`
    text-decoration: none;
    list-style: none;
`

const Item = styled.li`
    font-size: 24px;
    font-family: Arial;
    cursor: pointer;

    &&:click {
        color: red;
    }
`

export default function History({ searches, loading, error, setInput, handleSubmit }) {
    // const history = useSelector((state) => state.search.search);
    // const loading = useSelector((state) => state.search.loading);
    // const error = useSelector((state) => state.search.error);

    return (
        <>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>{error}</h2>}
        {searches.length > 0 &&
            <HistoryContainer>
                <List>
                    {searches.map((item) => {
                        return (
                            <Item value={item.data} key={item.id}>{item.data}</Item>
                    )})}
                </List>
            </HistoryContainer>
        }
        </>
    )
}