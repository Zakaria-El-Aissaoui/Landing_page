import React from 'react'
import Styled from 'styled-components/macro'
import Form from './Form'
import Addition from './Addition'

const Component= Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:1rem;
  min-height:50vh;
`;
const Wrapper=Styled.div`
width:100%;
max-width:800px;
display:flex;
flex-direction:column;
align-items:center;

`;
const Slogan=Styled.div`
font-family:'Raleway',sans-serif;
margin:0;
font-size:3rem;
max-width:25rem;
text-align:center;
margin-bottom:2rem;
font-weight:600;

`

const Text=Styled.h1`
margin:0;
font-size:1.25rem;


`






const Hero=()=>(
    <Component>
        <Wrapper>
        <Slogan>
            Make your tasks unique</Slogan>
            <Text>
                Superhero To-Do List helps you solve the problems
            </Text>
            <Text>Simple and easy</Text>
            <Form/>
            <Addition/>

        </Wrapper>
        </Component>
)

export default Hero