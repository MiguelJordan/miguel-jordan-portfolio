/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { LayoutContext } from '../contexts/LayoutContext'
import { Link } from 'react-router-dom'

export default function MobileMenu() {

  const {menuOpen, toggleMenu} = useContext(LayoutContext)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Compétences', href: '/skills' },
    { label: 'Education & Experiences', href: '/education&experiences' },
    { label: 'Projets', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    
  ]

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: menuOpen ? '100vh' : 0,
        bgcolor: 'rgba(10,10,10,0.85)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <IconButton
        onClick={() => toggleMenu()}
        sx={{
          position: 'absolute',
          top: 24,
          right: 24,
          color: 'white',
          fontSize: 32,
        }}
        aria-label="Close Menu"
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
      <Stack spacing={3} alignItems="center">
        {navLinks.map((link, idx) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={() => toggleMenu()}
            sx={{
              fontSize: '2rem',
              fontWeight: 600,
              color: 'white',
              background: menuOpen
                ? 'linear-gradient(90deg, #42a5f5, #7e57c2)'
                : 'none',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen
                ? 'translateY(0)'
                : 'translateY(-40px)',
              transition: 'all 0.3s',
              textTransform: 'none',
              boxShadow: menuOpen ? 3 : 0,
              px: 4,
              py: 1,
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  )
}
