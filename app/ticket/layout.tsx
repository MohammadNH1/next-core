import React from 'react'

const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div>
        <h1>Ticket layout</h1>
      {children}
    </div>
  )
}

export default layout
