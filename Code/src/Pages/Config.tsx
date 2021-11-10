import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Header = styled(Paper)`
  text-align: center;
  font-size: 5rem;
  background-color: lightgray;
`

const OutputHeader = styled(Paper)`
  font-size: 1.5rem;
  background-color: lightblue;
`

const OutputButton = styled(Button)`
  background-color: lightseagreen;
`
const ActiveOutputButton = styled(Button)`
  background-color: lightgreen;
`

const Dashboard = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Header>Cloud 9 Matrix Control</Header>
      </Grid>
    </Grid>
  )
}

export default Dashboard
