import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Formik, Form, Field } from 'formik'
import { Button, CircularProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import SendIcon from '@material-ui/icons/Send'

interface Values {
  email: string;
  password: string;
}

const formStyle = {
  backgroundColor: 'rgb(245, 245, 245,0.8)',
  borderRadius: '1vh',
  padding: '1vh',
}

const textInputStyle = {
  margin: '0.5vh',
}

export default function Order() {
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {}
        if (!values.email) {
          errors.email = 'Enter your email'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false)
          alert(JSON.stringify(values, null, 2))
        }, 1000)
      }}>
      {({ submitForm, isSubmitting }) => (
        <Grid container justify='center'>
          <Form style={formStyle}>
            <Grid item xs={12}>
              <Field
                variant='outlined'
                style={textInputStyle}
                component={TextField}
                name='firstname'
                type='firstname'
                label='First Name'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant='outlined'
                style={textInputStyle}
                component={TextField}
                name='lastname'
                type='lastname'
                label='Last Name'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant='outlined'
                style={textInputStyle}
                component={TextField}
                name='email'
                type='email'
                label='Email'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant='outlined'
                style={textInputStyle}
                component={TextField}
                type='password'
                label='Password'
                name='password'
              />
            </Grid>
            <Grid item xs={12}>
              {isSubmitting && <CircularProgress color='secondary' />}
            </Grid>
            <Grid item xs={12}>
              <Button
                size='large'
                variant='contained'
                color='secondary'
                disabled={isSubmitting}
                onClick={submitForm}
                endIcon={<SendIcon />}>
                Submit
              </Button>
            </Grid>
          </Form>
        </Grid>
      )}
    </Formik>
  )
}
