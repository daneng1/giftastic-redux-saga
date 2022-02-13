import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import styled from "styled-components";
import { submitSearch } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

import History from "../history";

const FormContainer = styled.div`
    display: flex;
    // width: 200px;
    // height: 200px;
    background-color: rgb(245,240,0);
    flex-direction; column;
    margin: 0 auto;
`

const Label = styled.label`
    font-family: Arial;
    font-size: 1.5em;
    margin: .5em;
`

const Input = styled.input`
    font-family: Arial;
    font-size: 1em;
    width: 60vw;
    border: none;
    border-radius: 0px;
    margin: .5em;
    margin-right: 0px;
    padding: .4em;
`

const Button = styled.button`
  display: inline;    
  color: red;
  background-color: blue;
  font-size: 1em;
  height: 2em;
  width: 2em;
  margin: 0 auto;
  padding: 0.25em 1em;
  border: none;
//   border-radius: 5px;
  cursor: pointer;
  align-content: center;

  &:hover {
      background-color: red;
      color: black;
  }
`;

export default function Search() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [expanded, setExpanded] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitSearch(input));
        setInput('');
        setExpanded(false);
    }

    const handleClick = (e) => {
        handleSubmit(e)
    }

    const searches = useSelector(state => state.search.search);
    const loading = useSelector((state) => state.search.loading);
    const error = useSelector((state) => state.search.error);

    return (
        <FormContainer>
            <form onSubmit={(e) => handleSubmit(e)} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
                <label className="text-base">
                    Find Gifs
                </label>
                <Input  type="text" value={input} placeholder="SEARCH" onChange={e => setInput(e.target.value)}/>
                <button className="bg-blue inline mx-auto rounded-full h-10 w-10" type="submit" >
                    <FontAwesomeIcon icon={solid('magnifying-glass')}/>
                </button>
                {expanded &&
                    <History handleClick={handleClick} setInput={setInput} searches={searches} loading={loading} error={error} />
                } 
            </form>
        </FormContainer>
    )
}
