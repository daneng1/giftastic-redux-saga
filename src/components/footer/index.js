import React from 'react'
// import styled from 'styled-components'

const Copyright = styled.p`
    font-size: 1.5em;
    font-family: Arial;
`
const Wrapper = styled.div`
    width: 100vw;
    align-content: center;
    margin: 0 auto;
`
export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <>
        <div>
            <Copyright>© {date}, Dan Engel</Copyright>
        </div>
        </>
    )
}