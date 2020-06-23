import { observable , action } from "mobx"

export const globalState = observable({
  words:[]
})

export const actionWords = action( props => {
  globalState.words.push( props )
})

export const deleteWords = action( props => {
  globalState.words = globalState.words.filter( ( item , index ) => index !== props )
})