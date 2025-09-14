import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const BlinkingCursor = styled('span')({
  animation: 'blink 1s steps(2, start) infinite',
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 }
  }
})

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState('')
  const fullText = "Welcome to my Portfolio"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setText(fullText.substring(0, currentIndex))
      currentIndex++
      if (currentIndex > fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 1000)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        bgcolor: 'background.default',
        color: 'grey.100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="div"
        fontFamily="monospace"
        color='black'
        fontWeight={700}
        sx={{ mb: 4, letterSpacing: 2 }}
      >
        {text}
        <BlinkingCursor> | </BlinkingCursor>
      </Typography>
      <Box sx={{ width: 200 }}>
        <LinearProgress
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: 'grey.900',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'primary.main',
              boxShadow: '0 0 15px #1976d2',
            },
          }}
        />
      </Box>
    </Box>
  )
}
