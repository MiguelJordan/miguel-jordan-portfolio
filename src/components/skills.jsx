import React from 'react';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CodeIcon from '@mui/icons-material/Code'


export default function Skills({title,children}) {
    return <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 3,
              background: 'rgba(0, 188, 212, 0.07)',
              border: '1px solid rgba(0,188,212,0.15)',
              boxShadow: '0 4px 16px 0 rgba(0,188,212,0.10)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px 0 rgba(0,188,212,0.18)' }
            }}
          >
            <Typography variant="h6" fontWeight={700} color="primary" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CodeIcon /> {title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {children}
            </Box>

            </Paper>

        </Grid>
}