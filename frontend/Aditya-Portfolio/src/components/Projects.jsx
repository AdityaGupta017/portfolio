import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { projects as projectsData } from '../config/portfolioData';

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        py: 8,
        backgroundColor: '#ffffff',
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
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: '#e3f2fd',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  {project.githubUrl && (
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      href={project.githubUrl}
                      target="_blank"
                      sx={{ color: '#667eea' }}
                    >
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      href={project.demoUrl}
                      target="_blank"
                      sx={{ color: '#667eea' }}
                    >
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
