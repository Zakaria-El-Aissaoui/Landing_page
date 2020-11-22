import React from  'react'
import{Component,Wrapper,Subheader,Header,PlaceholderImage,Text,Item} from './Component'



const RightSection=()=>(

<Component>
         <Wrapper row>
             <Item center mr>
             <PlaceholderImage/>
             <Text>SuperHero To-Do List allows you to work with unique features not found on any other To-Do List. You'll really always be locked in ro perform your tasks</Text>
             </Item>
             <Item ml>
                 <Subheader>Incredible features</Subheader>
                 <Header>Universal app to manage your tasks</Header>


             </Item>
    
        </Wrapper>
        
        </Component>)

export default RightSection