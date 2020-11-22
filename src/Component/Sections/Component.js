import Styled from 'styled-components/macro'


export const Component=Styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:2rem;
min-height:25vh;
background-color:${ (props)=>(props.bg ? '#f9fafb' : '#fff')};

`
export const Wrapper= Styled.div`
width:100%;
max-width:800px;
display : flex;
flex-direction:${(props)=>(props.row ? 'row' : 'column')};
align-items:center;

`
export const Subheader=Styled.h4`
margin : 0 0 1rem 0;
font-weight:400;
font-size:0.9rem;
color:#a0aec0;
`
export const Header = Styled.h3`
margin: 0 0 2rem 0;
font-family:'Raleway',sans-serif;
`
export const PlaceholderImage=Styled.div`
border: 1px solid #cbd5e0;
width: 400px;
height:200px;
border-radius: 0.75rem;
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
background-color:#ffff;

`
export const Text=Styled.p`
margin : 2rem 0 0 0;
color:#a0aec0;
text-align:center;
`

export const Item=Styled.div`
display:flex;
flex-direction:column;
align-items:${props=>props.center ? 'center':'flex-start'};
margin-right:${props=>props.mr ? '2rem' : 0};
margin-left:${props=> props.ml ? '2rem': 0};
`