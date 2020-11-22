import React from 'react'
import Styled from 'styled-components/macro'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faUser,faTerminal,faUniversity,faPenAlt,faBuilding,faRobot} from '@fortawesome/free-solid-svg-icons'

const Component=Styled.div`
color:#a0aec0`
const Text = Styled.p`
margin:0 0 1rem 0;
text-align:center;
font-weight:600;
`
const Wrapper=Styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center
`
const Item =Styled.div`
display : flex;
align-items : center;
border: 1px solid #d2d6dc;
padding: 0.5rem;
border-radius: 0.375rem;
margin-bottom:1rem;
box-shadow : 0 1px 2px 0  rgba(0,0,0,0.05);
margin-right: 1rem;

`
const Type =Styled.p`
margin:0 0 0 0.5rem;
font-size : 0.85rem;
`




const Addition =()=>(
<Component>
    <Text>Used by
    </Text>
    <Wrapper>

        <Item>
            <FontAwesomeIcon icon={faUser}/>
            <Type>Regular poeple</Type>
            
        </Item>
        <Item>
            <FontAwesomeIcon icon={faTerminal}/>
            <Type>Developers</Type>
            
        </Item>
        <Item>
            <FontAwesomeIcon icon={faUniversity}/>
            <Type>Students</Type>
            
        </Item>
        <Item>
            <FontAwesomeIcon icon={faPenAlt}/>
            <Type>Writers</Type>
            
        </Item>
        <Item>
            <FontAwesomeIcon icon={faBuilding}/>
            <Type>Enterprise</Type>
            
        </Item>
        <Item>
            <FontAwesomeIcon icon={faRobot}/>
            <Type>Robots</Type>
            
        </Item>
    </Wrapper>
    


</Component>

)



export default Addition