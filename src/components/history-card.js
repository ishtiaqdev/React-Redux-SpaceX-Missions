import React from 'react';
import { Card } from 'semantic-ui-react'

export default function HistoryCard({history}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          Description: {(history != null ? history.title : "")}
        </Card.Header>
        <Card.Description>
          Date: {(history != null ? history.event_date_utc.replace('T', ' ').replace('Z', '') : "")}
        </Card.Description>
        <Card.Description>
          URL: <a href={(history != null ? history.links.article : "")} target='_blank' title="Click to view further information">Further Information</a>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
