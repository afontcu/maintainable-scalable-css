import React from 'react'
import Box from 'superbox'

export default function({ children }) {
  return (
    <Box
      p={6}
      bg="black"
      color="#a7daff"
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {children}
    </Box>
  )
}
