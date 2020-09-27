import React from 'react';
import { Card } from 'semantic-ui-react'

export default function LaunchCard({launch, onClick}) {
  return (
    <a title="Click to view further information in Modal" onClick={() => onClick(launch)}>
        <Card>
        <Card.Content>
            <Card.Header>
            Mission Name: {(launch != null ? launch.mission_name : "")}
            </Card.Header>
            <Card.Description>
            Payload's Nationality: {(launch != null ? launch.rocket.second_stage.payloads[0].nationality : "")}
            </Card.Description>
            <Card.Description>
            Payload's Manufacturer: {(launch != null ? launch.rocket.second_stage.payloads[0].manufacturer : "")}
            </Card.Description>
            <Card.Description>
            Payload's Type: {(launch != null ? launch.rocket.second_stage.payloads[0].payload_type : "")}
            </Card.Description>
        </Card.Content>
        </Card>
    </a>
  )
}
