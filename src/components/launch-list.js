import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import LaunchCard from './launch-card';

export default function LaunchList({launches, isSearched, errors, onClick}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' />
        <Message.Content>
           <Message.Header>Just few seconds</Message.Header>
           We are fetching content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
        <Message icon info>
          <Icon name='warning circle' />
          <Message.Content>
             <Message.Header>No Launches Found</Message.Header>
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
    return launches.map(launch => {
      return (
        <LaunchCard key={launch._id} launch={launch} onClick={onClick}/> 
      )
    })
  }

  const launchList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { launches.length === 0 && !errors.global && !isSearched && loadingMessage }
      { errors.global && timeoutMessage }
      { launches.length > 0 && launchList }
      { launches.length === 0 && isSearched && emptyMessage }
    </div>
  )
}
