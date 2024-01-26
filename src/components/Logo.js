import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faFlask} from '@fortawesome/free-solid-svg-icons'
export default function logo() {
  return (<>
    <FontAwesomeIcon icon={faFlask} beat size='2xl' />
    </>)
}
