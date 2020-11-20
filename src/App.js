import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const App = () => {

  const [form, setForm] = useState({
    password: '',
    username: '',
    displayName: ''
  })

  const handleSubmit = event => {

  }

  return (
    <Box my={2}>
      <Container maxWidth='xs'>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='Display Name'
              value={form.displayName}
              onChange={e => setForm({ ...form, displayName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='Username'
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='Password'
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant='contained' onClick={handleSubmit}>
              Submit
        </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App;
