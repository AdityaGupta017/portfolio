import { Box, Typography, Container, Button } from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter, Language } from '@mui/icons-material';
import { personalInfo, theme } from '../config/portfolioData';

export default function Hero() {
  const { name, title, bio, email, socialLinks } = personalInfo;

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.heroBackground,
        color: 'white',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4rem' },
            mb: 2,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1.5rem', md: '2rem' },
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.8,
          }}
        >
          {bio}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {socialLinks.github && (
            <Button
              variant="contained"
              startIcon={<GitHub />}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              }}
              href={socialLinks.github}
              target="_blank"
            >
              GitHub
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button
              variant="contained"
              startIcon={<LinkedIn />}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              }}
              href={socialLinks.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
          )}
          {socialLinks.twitter && (
            <Button
              variant="contained"
              startIcon={<Twitter />}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              }}
              href={socialLinks.twitter}
              target="_blank"
            >
              Twitter
            </Button>
          )}
          {socialLinks.portfolio && (
            <Button
              variant="contained"
              startIcon={<Language />}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              }}
              href={socialLinks.portfolio}
              target="_blank"
            >
              Website
            </Button>
          )}
          {email && (
            <Button
              variant="contained"
              startIcon={<Email />}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              }}
              href={`mailto:${email}`}
            >
              Contact
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
