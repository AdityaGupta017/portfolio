import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';

import EngineeringIcon from '@mui/icons-material/Engineering';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';


export default function CustomizedTimeline() {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
          <Typography variant="h6" component="span">
            2024-present
          </Typography>
          <Typography>Freelance Web Dev and Cloud Consultant</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <Tooltip title="Masters in Computer Science" >
              <SchoolIcon />
            </Tooltip>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
          <Typography variant="h6" component="span">
            2022-2024
          </Typography>
          <Typography>Stevens Institute of Technology, NYC, US</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <Tooltip title = "Systems Engineer">
            <EngineeringIcon/>

            </Tooltip>
            </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'white' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
          <Typography variant="h6" component="span">
            2018-2022
          </Typography>
          <Typography>CRZ Consultants, New Delhi, India</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'white' }} />
          <TimelineDot color="secondary">
            <Tooltip title="Bachelors in Information Technology">
            <SchoolIcon />

            </Tooltip>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '0', px: 2 }}>
          <Typography variant="h6" component="span">
            2014-2018
          </Typography>
          <Typography>University of Mumbai, India</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
