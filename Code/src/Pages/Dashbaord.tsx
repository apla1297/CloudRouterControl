import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

type Input = {
  name: string
  number: number
}

const inputs: Input[] = [
  { name: 'DTV 1', number: 1 },
  { name: 'DTV 2', number: 2 },
  { name: 'DTV 3', number: 3 },
  { name: 'DTV 4', number: 4 },
  { name: 'DTV 5', number: 5 },
  { name: 'GFX 1', number: 6 },
]

type Output = {
  name: string
  number: number
  activeInput: number
}

const outputs: Output[] = [
  { name: 'Bar 1', number: 1, activeInput: 1 },
  { name: 'Bar 2', number: 2, activeInput: 2 },
  { name: 'Bar 3', number: 3, activeInput: 3 },
  { name: 'Bar 4', number: 4, activeInput: 4 },
  { name: 'Bar 5', number: 5, activeInput: 5 },
  { name: 'Bar 6', number: 6, activeInput: 6 },
  { name: 'Bar 7', number: 7, activeInput: 5 },
  { name: 'Bar 8', number: 8, activeInput: 4 },
  { name: 'Bar 9', number: 9, activeInput: 3 },
  { name: 'Bar 10', number: 10, activeInput: 2 },
  { name: 'Bar 11', number: 11, activeInput: 1 },
  { name: 'Bar 12', number: 12, activeInput: 2 },
  { name: 'Bar 13', number: 13, activeInput: 3 },
  { name: 'Bar 14', number: 14, activeInput: 4 },
  { name: 'Bar 15', number: 15, activeInput: 5 },
  { name: 'Bar 16', number: 16, activeInput: 6 },
]

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
      <Grid item>
        {outputs.map(output => (
          <div>
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item xs={12}>
                <OutputHeader id={output.number.toString()}>{output.name}</OutputHeader>
              </Grid>
              {inputs.map(input => (
                <Grid item>
                  {input.number === output.activeInput ? (
                    <ActiveOutputButton id={input.number.toString()}>{input.name}</ActiveOutputButton>
                  ) : (
                    <OutputButton id={input.number.toString()}>{input.name}</OutputButton>
                  )}
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Grid>
      <Grid xs={12}>
        <Link to="">
          <Button>Configure Routers</Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Dashboard
