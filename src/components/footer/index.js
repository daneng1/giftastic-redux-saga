import React from 'react';

export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <>
        <div>
            <p>© {date}, Dan Engel</p>
        </div>
        </>
    )
}