import React, { Children, Component } from 'react'

import TimeLine from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import './MyTimeLine.css'

export default function MyTimeLine({title, icon, children}) {
    return (
        <TimeLine position="alternate" className={"timeline"}>
            {/* Header */}
            <TimelineItem className={'timeline_fist'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' className={'timeline_header'}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {children}

            {/* Body */}
            {/* <TimelineItem>
                <CustomTimelineSeparator/>
                <TimelineContent>
                    Code
                </TimelineContent>
            </TimelineItem> */}
        </TimeLine>
    )
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator_padding'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot'}/>
        <TimelineConnector/>
    </TimelineSeparator>
)
