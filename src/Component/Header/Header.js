import React from 'react'
import Styled from 'styled-components/macro'


const Component=Styled.div`
display:flex;
justify-content:center;
padding:1rem;
`
const Button =Styled.button`
background-color:transparent;
border:0;
padding:0.5rem 1.25rem;
border-radius:0.375rem;
font-size:0.85rem;
transition: background-color 0.25s ease-in;

&:hover{
    cursor:pointer;
    background-color: #EDF2F7;
}
`


const Header=()=>(

<Component>
    <Button>Features</Button>
    <Button>Pricing</Button>
    <Button>Blog</Button>



    
</Component>)

export default Header
