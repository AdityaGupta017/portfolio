import * as React from 'react';
import { Box, Container } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';
import { timeline as timelineData } from '../config/portfolioData';

export default function CustomizedTimeline() {
  return (
    <Box
      id="experience"
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
          Education & Experience
        </Typography>
        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align={index % 2 === 0 ? 'right' : 'left'}
                variant="body2"
                color="text.secondary"
              >
                {item.period}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color={item.type === 'education' ? 'secondary' : 'primary'}
                  variant={item.type === 'work' && index === 2 ? 'outlined' : 'filled'}
                  sx={{ p: 1.5 }}
                >
                  <Tooltip title={item.type === 'education' ? 'Education' : 'Work Experience'}>
                    {item.type === 'education' ? <SchoolIcon /> : <WorkIcon />}
                  </Tooltip>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                {item.organization && <Typography>{item.organization}</Typography>}
                {item.description && (
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
