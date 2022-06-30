import React from 'react'
import { BookCard } from './BookCard'
import styled from 'styled-components'

export const BookLists = ({ books }) => {
    return (
        <>
            {books.length > 0 && books.map((e) => {
                return (
                    <BookCardWrapper key={e.id} >
                        <BookCard bookData={e} />
                    </BookCardWrapper>

                )
            })}
        </>
    )
}


const BookCardWrapper = styled.div`
border:1px solid blue;
width:310px;
padding:5px;
`