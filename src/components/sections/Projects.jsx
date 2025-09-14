import React from 'react'
import SectionTemplate from '../SectionTemplate'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const projects = [
  {
    title: "Jeu de Hex et Bandits Machots",
    description: "Développer le jeu de Hex avec un joueur robot intelligent qui se base sur les algorithmes MCTS et RAVE pour optimiser la prise de décisions. ",
    github: "https://github.com/MiguelJordan/jeu-de-hex-et-bandits-machots",
    
  },
  {
    title: "Analyseur de livre dont vous êtes le héros",
    description: "Extraction et modélisation de données issues d’un livre interactif sous forme de graphe. Application du pattern MVC et travail d'analyse collective",
    github: "https://github.com/MiguelJordan/Analyseur-de-livre-dont-vous-etes-le-hero",
    
  },

   {
    title: "Le monde des Blocs",
    description: "Pilotage d’un projet complexe d’IA avec planification, coordination d’équipe et respect des délais.",
    github: "https://github.com/MiguelJordan/le-monde-des-blocs",
    
  },

   {
    title: "Jeu de Taquin",
    description: "Développement d’un jeu de Taquin en Java en suivant le modèle MVC. Travail collaboratif à 4.",
    github: "https://github.com/MiguelJordan/jeu-de-taquin",
    
  },

  {
    title: "Jeu de stratégie aux tours par tours",
    description: "Développer un jeu de stratégie qui se joue entre 2 et n joueurs. Projet réalisé en groupe de 4 en Java. Utilisation des patterns MVC, Factory, Strategy, Proxy et Decorator.",
    github: "https://github.com/MiguelJordan/Jeu-de-strategie-au-tour-par-tour",
    
  },
  
]

export default function Projects() {
  return (
    <SectionTemplate
      id='projects'
      title="Mes projets"
      icon={<FolderOpenIcon fontSize="inherit" />}
      gradient="linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6a3093 100%)"
    >
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: 3,
                p: 3,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px 0 rgba(31, 38, 135, 0.28)' }
              }}
            >
              <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body1" color="grey.200" gutterBottom>
                {project.description}
              </Typography>
              <Stack direction="row" spacing={2} mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: 'none', fontWeight: 600 }}
                >
                  Code
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<LaunchIcon />}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: 'none', fontWeight: 600 }}
                >
                  Demo
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionTemplate>
  )
}