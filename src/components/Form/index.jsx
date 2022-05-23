import React from 'react'
import { FormStyle } from './style'

const Form = ({children, Submit }) => {
    async function handleSubmit(e){
        e.preventDefault();
       Submit()
    }

  return (
    <FormStyle action='POST' onSubmit={handleSubmit}>
      {children}
    </FormStyle>
  )
}

export default Form
