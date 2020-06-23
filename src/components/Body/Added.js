import React from "react"
import { useStyles } from "../../styles/useStyles"
import { observer } from "mobx-react"
import { globalState , deleteWords } from "../globalState"

function _Added(){
  
  const classes = useStyles()

  function deleteItem( props ){
    deleteWords( props )
  }

  return(
    <div className={ classes.second } >
      { globalState.words.map( (item , index ) => (

      <div className={ classes.simpleCover } key={ index } >
        <div className={ classes.simpleCard }>
          <span className={ classes.readyTitle } > { item['title'] } </span>
          <p className={ classes.readyNote } > { item['note'] } </p>
          <button className={ classes.deleteButton } onClick={ () => deleteItem(index) } >DEL</button>
        </div>
      </div>
    
      ) ) }
    </div>
  )
}

export const Added = observer( _Added )
