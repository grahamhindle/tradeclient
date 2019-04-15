import React from 'react'
import gql from 'graphql-tag';
import {Text} from 'react-native'
import { graphql } from 'react-apollo'

const queries = {
  liveTrades : gql `
  {
    trades{
      id
      description
    }
  }
`,
  getTradesByUser: gql `
    {
      tradesByUser(
        email:"grahamhindle@mac.com")
        {
        id
        description
      }
    }
`
  }



export const TradeQuery= graphql(queries.liveTrades)(props => {
  const {error, trades} = props.data
  
  if ( error){
    return <Text>{error}</Text>
  }
  if ( trades ) {
    return <Text>{trades[0].id}</Text>
  }
  return <Text>Loading...</Text>
})

export const TradesByUser=graphql(queries.getTradesByUser)(props => {
  const {error, trades} = props.data
  if ( error){
    return <Text>{error}</Text>
  }
  if ( trades ) {
    return <Text>{trades[0].description}</Text>
  }
  return <Text>Loading...</Text>
})