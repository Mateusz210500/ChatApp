import { FormField } from 'components'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import { defaultValues, validationSchema } from './formikConfig'


export const Signup = () => {

    return(
        <div className="auth-form">
            <h1>Signup</h1>
            <Formik 
            onSubmit ={() => console.log('Submittin')}
            validateOnMount={true}
            initialValues={defaultValues}
            validationSchema={validationSchema}
            >
                {({isValid, isSubmitting}) => (
                    <Form>
                        <FormField name="userName" label="Username"/>
                    </Form>
                )}
            </Formik>
        </div>
    )

}