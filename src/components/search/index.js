import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { submitSearch } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

import History from "../history";


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
        <div>
            <form onSubmit={(e) => handleSubmit(e)} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
                <label className="text-base">
                    Find Gifs
                </label>
                <input  type="text" value={input} placeholder="SEARCH" onChange={e => setInput(e.target.value)}/>
                <button className="bg-blue inline mx-auto rounded-full h-10 w-10" type="submit" >
                    <FontAwesomeIcon icon={solid('magnifying-glass')}/>
                </button>
                {expanded &&
                    <History handleClick={handleClick} setInput={setInput} searches={searches} loading={loading} error={error} />
                } 
            </form>
        </div>
    )
}
