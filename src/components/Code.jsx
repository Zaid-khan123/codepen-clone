import React, { useContext } from 'react'
import Editor from './Editor'
import {Box, styled} from '@mui/material';
import { DataContext } from '../Context/DataProvider';
const Container = styled(Box)
`
display: flex;
background-color:#060606;
height:50vh;

`

function Code() {

  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
    <Editor 
    
    heading ="HTML"
    icon = "/"
    color = "#FF3C41"
    value ={html}
    onChange = {setHtml}
    
    />
    <Editor 
    
    heading ="css"
    icon = "*"
    color = "#0eBEFF"
    value ={css}
    onChange = {setCss}
    />
    <Editor 
    heading ="javascript"
    icon = "()"
    color = "yellow"
    value ={js}
    onChange = {setJs}
    
    />
    </Container>
  )
}

export default Code
