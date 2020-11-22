import React from 'react'
import Styled from'styled-components/macro'


const Component=Styled.div`
display:flex;
marging:3rem 0;
padding:3rem 0;

`
const Input=Styled.input`
padding:0.75rem 2rem;
border:1px solid #cbd5e0; 
border-radius:0.375rem;
line-height:1.25;
 `
const Button=Styled.button`
padding:0.75rem 2rem;
border-radius:0.375rem;
background-color:#68d391;
color:#fff;
border :1px solid #68d391;
margin-left:1rem;
line-height:1.25;
&:hover{
    cursor:pointer;
    border :1px solid #9ae6b4;
    background-color:#9ae6b4;
}

`


const Form=()=>(
<Component>
<form>
<Input type='email' placeholder='Your email address'></Input>

<Button>Send me the App</Button>

</form>

</Component>


)
export default Form