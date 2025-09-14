import React from 'react'
import SectionTemplate from '../SectionTemplate'
import PersonIcon from '@mui/icons-material/Person'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <SectionTemplate
      id='home'
      title="Bienvenue, je suis Miguel Jordan"
      icon={<PersonIcon fontSize="inherit" />}
      gradient="linear-gradient(135deg, #1e3c72 0%, #6a3093 100%)"
    >
      <Box textAlign="center">
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            mb: 3,
            background: 'linear-gradient(90deg, #42a5f5, #7e57c2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
         Apprenti Ingénieur Logiciel 
        </Typography>
        <Typography
          variant="body1"
          color="grey.200"
          sx={{ mb: 5, maxWidth: 500, mx: 'auto' }}
        >
          Étudiant en Master Ingénierie Logicielle à l'université de Rennes, développeur expérimenté en Java, JavaScript et React, 
          passionné par l'innovation technologique et orienté vers des projets utilisateur concrets.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#projects"
            sx={{
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 3,
            }}
          >
            Voir mes projets
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="#contact"
            sx={{
              fontWeight: 600,
              textTransform: 'none',
              borderWidth: 2,
            }}
          >
            Me contacter
          </Button>
        </Stack>
      </Box>
    </SectionTemplate>
  )
}
