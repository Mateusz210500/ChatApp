import {FormField} from 'components'
import {Form, Formik} from 'formik'
import {useHistory} from 'react-router-dom'
import {defaultValues, validationSchema} from './formikConfig'
import {useState} from 'react'

export const Login = () => {

    const login = ({email, password}, {setSubmitting}) => console.log('Logging In: ', email, password);
    const history = useHistory();
    const [serverError, setServerError] = useState('')

    return(
        <div className="auth-form">
            <h1>Login</h1>

            <Formik
                onSubmit={login}
                validationOnMount={true}
                initialValues={defaultValues}
                validationSchema={validationSchema}
            >
                {({isValid, isSubmitting}) => (
                    <Form>
                        <FormField name="email" label="Email" type="email"/>
                        <FormField name="password" label="Password" type="password"/>

                        <div className="auth-link-container">
                            Dont't have an account?{' '}
                            <span className="auth-link" onClick={() => history.push('signup')}>
                                Sign Up!
                            </span>
                        </div>

                        <button type='submit' disabled={!isValid || isSubmitting} >Login</button>
                    </Form>
                )}

            </Formik>

            {!!serverError && <div className="error">{serverError}</div>}
        </div>
    )
}        