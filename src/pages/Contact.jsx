import React, { useContext, useState } from 'react'

import emailjs from 'emailjs-com'

import SectionTemplate from '../components/SectionTemplate'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/Phone'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { LayoutContext } from '../contexts/LayoutContext'



export default function Contact() {

    const {isMobile} = useContext(LayoutContext)

    const [formStatus, setFormStatus] = useState(
        {name:"",email:"",message:""}
    )

    const handlesbmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, e.target, 
            import.meta.env.VITE_PUBLIC_KEY).then(res=>{
            alert('Message envoyé avec succès !')
            setFormStatus({name:"",email:"",message:""})
        }).catch(()=> { alert('Une erreur est survenue, veuillez réessayer plus tard.')})
    }

  return (
    <SectionTemplate
      id='contact'
      title="Contactez-moi"
      icon={!isMobile && <EmailIcon fontSize="inherit" />}
      gradient="linear-gradient(135deg, #6a3093 0%, #1e3c72 100%)"
    >
      <Box textAlign="center">
        <Typography
          variant="body1"
          color="grey.200"
          sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}
        >
          N’hésitez pas à me contacter pour toute collaboration, question ou opportunité professionnelle.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              href="mailto:jordanmiguel505@gmail.com"
              sx={{
                py: 2,
                fontWeight: 600,
                borderRadius: 3,
                textTransform: 'none',
                bgcolor: 'purple.600',
                color: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'purple.700' }
              }}
            >
              jordanmiguel505@gmail.com
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/miguel-jordan-kamgang-kenmoe-b22026199/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                py: 2,
                fontWeight: 600,
                borderRadius: 3,
                textTransform: 'none',
                bgcolor: 'blue.600',
                color: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'blue.700' }
              }}
            >
              LinkedIn
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="inherit"
              startIcon={<GitHubIcon />}
              href="https://github.com/MiguelJordan"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                py: 2,
                fontWeight: 600,
                borderRadius: 3,
                textTransform: 'none',
                bgcolor: 'grey.900',
                color: 'grey.100',
                boxShadow: 2,
                '&:hover': { bgcolor: 'grey.800' }
              }}
            >
              GitHub
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              color="info"
              startIcon={<PhoneIcon />}
              sx={{
                py: 2,
                fontWeight: 600,
                borderRadius: 3,
                textTransform: 'none',
                bgcolor: 'cyan.600',
                color: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'cyan.700' }
              }}
            >
              +33 7 51 16 63 65
            </Button>
          </Grid>
        </Grid>
      </Box>

      <form onSubmit={handlesbmit} className='space-y-6 my-8'>

              <div className='relative'>
                <input 
                type='text'
                id='name'
                name='name'
                value={formStatus.name}
                onChange={(e)=> setFormStatus({...formStatus, name: e.target.value})}
                required
                placeholder='Nom.....'
                className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div className='relative'>
                <input 
                type='email'
                id='email'
                name='email'
                value={formStatus.email}
                onChange={(e)=> setFormStatus({...formStatus, email: e.target.value})}
                required
                placeholder='exemple@gmail.com'
                className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <div className='relative'>
                <textarea 
                type='message'
                id='message'
                name='message'
                value={formStatus.message}
                onChange={(e)=> setFormStatus({...formStatus, message: e.target.value})}
                required
                placeholder='votre message.....'
                className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <button 
              type='submit'
              className='w-full cursor-pointer bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
              >
                Envoyer votre message
              </button>

      </form>
    </SectionTemplate>
  )
}