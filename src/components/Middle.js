import React from "react"
import { useStyles } from "../styles/useStyles"
import { Writer } from "./Body/Writer"
import { Added } from './Body/Added'

export function Middle(){
  
  const classes = useStyles()

  return(
    <div className={ classes.middle } >

      <Writer />
      <Added />

    </div>
  )
}