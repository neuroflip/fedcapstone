import * as React from 'react'

interface CallToActionProps {
  text: string,
  action: any 
}

function CallToAction({ text, action }: CallToActionProps) {
  return <button className='shadow' onClick={action}>{ text }</button>
}

export default CallToAction