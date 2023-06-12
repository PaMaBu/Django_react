import { Button } from '@mui/material'
import React from 'react'

export function Launch_button(sx={}, ...props) {
  return (
    <Button variant='contained' sx={{borderRadius:4}} {...props}>
      Launch dApp
    </Button>
  )
}

