import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import {
  Code,
  Cloud,
  Storage,
  Web,
  Security,
  DevicesOther,
} from '@mui/icons-material';
import { skills as skillsData } from '../config/portfolioData';

// Icon mapping for different categories
const iconMap = {
  'Frontend Development': <Web sx={{ fontSize: 40 }} />,
  'Backend Development': <Code sx={{ fontSize: 40 }} />,
  'Cloud & DevOps': <Cloud sx={{ fontSize: 40 }} />,
  'Databases': <Storage sx={{ fontSize: 40 }} />,
  'Tools & Technologies': <DevicesOther sx={{ fontSize: 40 }} />,
  'Security & Best Practices': <Security sx={{ fontSize: 40 }} />,
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: '100vh',
        py: 8,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
            color: '#333',
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skillsData.map((skillCategory, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: '#667eea',
                    }}
                  >
                    {iconMap[skillCategory.category] || <Code sx={{ fontSize: 40 }} />}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      textAlign: 'center',
                      mb: 2,
                    }}
                  >
                    {skillCategory.category}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                    }}
                  >
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: '#e8eaf6',
                          '&:hover': { backgroundColor: '#c5cae9' },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
