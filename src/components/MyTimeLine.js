import React, { Component } from 'react'
import TimeLine from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';

export default function MyTimeLine(props) {
    const listElements = props.listElements;
    return (
        <TimeLine position="alternate" className={"timeline"}>
            {listElements.map((element) => (
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    >
                    {element.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h3" component="span">
                        {element.title}
                    </Typography>
                    <Typography>{element.description}</Typography>
                </TimelineContent>
            </TimelineItem>
            ))}
        </TimeLine>
    )
}
