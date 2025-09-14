import React from 'react'
import SectionTemplate from '../SectionTemplate'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import PersonIcon from '@mui/icons-material/Person'
import Skills from '../skills'

const langages = [
  { name: "Java", icon: <CodeIcon /> },
  { name: "JavaScript", icon: <CodeIcon /> },
  { name: "C", icon: <CodeIcon /> },
  { name: "Php", icon: <CodeIcon /> },
  { name: "Python", icon: <CodeIcon /> },
  { name: "TypScript", icon: <CodeIcon /> },
  { name: "SQL", icon: <CodeIcon /> },

]

const frameWorks = [
  { name: "React", icon: <CodeIcon /> },
  { name: "Node.js", icon: <CodeIcon /> },
  { name: "Express", icon: <CodeIcon /> },
  { name: "Vuejs", icon: <CodeIcon /> },
  { name: "Angular", icon: <CodeIcon /> },
]

const baseDeDonnees = [
  { name: "MongoDB", icon: <StorageIcon /> },
  { name: "PostgreSql", icon: <StorageIcon /> },
  { name: "Mysql", icon: <StorageIcon /> },
]

export default function About() {
  return (
    <SectionTemplate
      id='about'
      title="À propos de moi"
      icon={<PersonIcon fontSize="inherit" />}
    >
      <Typography variant="body1" color="grey.200" align="center" sx={{ mb: 4 }}>
        Futur ingénieur logiciel recherchant <Box component="span" fontWeight={700} color="primary.main"> un contrat d’alternance de 24 mois </Box> ou un stage de <Box component="span" fontWeight={700} color="primary.main"> 2 mois minimum dès le 11 mai 2026 </Box> 
        pour piloter des projets informatiques en environnement de production. 
        Je souhaite contribuer au développement d’applications performantes dans un environnement agile tout en poursuivant ma montée en compétences aux côtés de professionnels. 
    </Typography>
      <Grid container spacing={4}>

        <Skills title="FrameWorks">
           {frameWorks.map((skill) => (
                <Chip
                  key={skill.name}
                  icon={skill.icon}
                  label={skill.name}
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 600, bgcolor: 'primary.light', color: 'primary.dark' }}
                />
              ))}
        </Skills>

        <Skills title="Langages de programmation">
           {langages.map((skill) => (
                <Chip
                  key={skill.name}
                  icon={skill.icon}
                  label={skill.name}
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 600, bgcolor: 'primary.light', color: 'primary.dark' }}
                />
              ))}
        </Skills>

        <Skills title="Bases de données">
          {baseDeDonnees.map((skill) => (
                <Chip
                  key={skill.name}
                  icon={skill.icon}
                  label={skill.name}
                  color="info"
                  variant="outlined"
                  sx={{ fontWeight: 600, bgcolor: 'info.light', color: 'info.dark' }}
                />
              ))}
        </Skills>

        
       
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              p: 3,
              background: 'rgba(0,188,212,0.04)',
              border: '1px solid rgba(0,188,212,0.10)',
              boxShadow: '0 2px 8px 0 rgba(0,188,212,0.08)',
            }}
          >
            <Typography variant="h6" fontWeight={700} color="primary" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SchoolIcon /> Éducation
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: 'grey.200' }}>
             
                    <li>
                      <h2 style={{fontSize : '23px'}}>   <strong>Master Ingénierie Logicielle</strong> — Université de Rennes (2025-2027) </h2>
                        <p> conception orientée objet, analyse et conception formelle, 
                            gestion de projets agile, validation et vérification logicielle, architecture full stack 
                            (Spring/Angular/React), techniques cloud et Kubernetes. </p>
                     </li>

                     <br />

                    <li>
                       <h2 style={{fontSize : '23px'}}>   <strong>Licence Informatique</strong> — Université de Caen (2023-2025) </h2>
                        <p> Génie logiciel, algorithmique, programmation Web, 
                            bases de données, systèmes d’exploitation, réseaux. </p>
                     </li>
                
             
             
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              p: 3,
              background: 'rgba(33,150,243,0.04)',
              border: '1px solid rgba(33,150,243,0.10)',
              boxShadow: '0 2px 8px 0 rgba(33,150,243,0.08)',
            }}
          >
            <Typography variant="h6" fontWeight={700} color="info.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WorkIcon /> Expérience professionnelle
            </Typography>
            <Box sx={{ color: 'grey.200' }}>
              <Typography variant="subtitle1" fontWeight={600}>Développeur logiciel</Typography>
              <Typography variant="body2">Freelance (2021-2022)</Typography>
              <Typography variant="body2">Développement et maintenance d’applications web sur mesure.</Typography>
              
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </SectionTemplate>
  )
}
