import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import HistoryCard from './history-card';

export default function HistoryList({histories, errors}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' />
        <Message.Content>
           <Message.Header>Just few seconds</Message.Header>
           We are fetching content for you.
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return histories.map(history => {
      return (
        <HistoryCard key={history.id} history={history} />
      )
    })
  }

  const historyList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { histories.length === 0 && !errors.global && loadingMessage }
      { errors.global && timeoutMessage }
      { histories.length > 0 && historyList }
    </div>
  )
}
