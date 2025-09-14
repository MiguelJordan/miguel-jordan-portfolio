import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function SectionTemplate({
  id = "",
  title,
  icon,
  children,
  gradient = "linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #203a43 100%)"
}) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        background: gradient,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          fontWeight={800}
          sx={{
            mb: 6,
            background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            dropShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          {icon && <Box sx={{ fontSize: 40 }}>{icon}</Box>} {title}
        </Typography>
        <Paper
          elevation={6}
          sx={{
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            backdropFilter: 'blur(8px)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  )
}