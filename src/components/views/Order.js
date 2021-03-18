import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import { Formik, Form, Field } from 'formik'
import { Button, CircularProgress } from '@material-ui/core'
import { TextField } from 'formik-material-ui'

interface Values {
  email: string;
  password: string;
}

const formStyle = {
  padding: '0.5vh',
}

const textInputStyle = {
  backgroundColor: 'whitesmoke',
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
                style={textInputStyle}
                component={TextField}
                name='firstname'
                type='firstname'
                label='First Name'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                style={textInputStyle}
                component={TextField}
                name='lastname'
                type='lastname'
                label='Last Name'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                style={textInputStyle}
                component={TextField}
                name='email'
                type='email'
                label='Email'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
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
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                onClick={submitForm}>
                Submit
              </Button>
            </Grid>
          </Form>
        </Grid>
      )}
    </Formik>
  )
}
