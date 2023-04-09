import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function TimeLine(props) {
    const listElements = props.listElements;
    return (
        <VerticalTimeline>
            {listElements.map(element =>(
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={element.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
                    <p>
                        {element.description}
                    </p>
                    <h3> Skills: </h3>
                    <p> {element.skills} </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}
