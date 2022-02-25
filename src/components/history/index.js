import React from "react";
// import styled from "styled-components";

const HistoryContainer = styled.div`
    position: absolute;
    z-index: 1;
    background-color: rgba(255, 255, 255, .8);
    margin: 0px 0px 0px 130px;
    width: 61%;
`

const Label = styled.label`
    font-size: 18px;
    font-family: Arial;
    color: grey;
    margin: 1em 1.75em .25em ;
`

const List = styled.ul`
    text-decoration: none;
    list-style: none;
`

const Item = styled.li`
    font-size: 24px;
    font-family: Arial;
    cursor: pointer;
    color: black;

    &&:click {
        color: black;
    }

    &&:hover {
        color: blue;
    }
`

export default function History({ searches, loading, error, setInput, handleClick }) {

    return (
        <>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>{error}</h2>}
        {searches.length > 0 &&
            <div>
                <label>Previous Searches
                    <ul>
                        {searches.map((item) => {
                            return (
                                <li onClick={(e) => handleClick(e)} onMouseEnter={() => setInput(item.data)} value={item.data} key={item.id}>{item.data}</li>
                        )})}
                    </ul>
                </label>
            </div>
        }
        </>
    )
}