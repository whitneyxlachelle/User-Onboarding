import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';

import * as Yup from 'yup';
//import axios from 'axios';

const UserForm = ({ values, errors, touched }) => {
    const [user, setUser] = useState([]);

    return (
        <div className="user-form">
            <h1>User Form</h1>

            <Form>
                <Field type="text" name="username" placeholder="Username" value={values.username} />
                {touched.username && errors.username && ( <p className="errors">{errors.username}</p>)}
                
                <Field type="text" name="email" placeholder="Email" value={values.email} />
                {touched.email && errors.email && ( <p className="errors">{errors.email}</p>)}

                <Field type="text" name="password" placeholder="Password" value={values.password} />
                {touched.password && errors.password && ( <p className="errors">{errors.password}</p>)}

                <label className="checkbox">
                    Terms of Service
            <Field type="checkbox" name="terms" />
                    <span className="checkmark" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}


// the higher order component 
const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password, terms }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username required"),
        email: Yup.string().required("Email required"),
        password: Yup.string()
            .min(8)
            .required("Password needed"),
        terms: Yup.bool()
    }),

})
    (UserForm);

export default FormikUserForm;