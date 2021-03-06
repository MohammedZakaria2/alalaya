import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from './Card';
import { Wrapper, FormWrapper } from './style';
import { db } from './../../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Formik } from 'formik';
import { T, Flex } from '@/components/Cor';
import { Textarea, Input, FormControl } from './style';
import { useAlert } from 'react-alert';
import { Btn } from '@/components/Cor';
import { colors } from '@/components/theme/colors';

const text = {
  contactCardTitle: 'Feel free to contact me on!!',
};

const ContactView = ({ hide }) => {
  const alert = useAlert();

  const submit = async (form) => {
    try {
      await addDoc(collection(db, 'messages'), form);
      alert.success('Your message sent successfully!');
    } catch (error) {
      console.log('error:', error);
      alert.error('Something wen wrong pleas try again!');
    }
  };

  return (
    <Wrapper>
      <Row>
        <Col lg={8}>
          <FormWrapper>
            <Formik
              initialValues={{
                first: '',
                last: '',
                email: '',
                message: 'Text Here',
              }}
              validate={(values) => {
                const errors = {};
                if (!values.first) {
                  errors.first = 'Please type your first name';
                }
                if (!values.last) {
                  errors.last = 'Please type your last name';
                }
                if (!values.email) {
                  errors.email = 'Please type your email';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Please type valid email address';
                }
                if (values.message === 'Text Here') {
                  errors.message = 'Please type your message here';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  submit(values);
                  setSubmitting(false);
                  hide();
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Flex align="flex-start" justify="flex-start" dr={'column'}>
                    <FormControl>
                      <Input
                        name="first"
                        type="text"
                        placeholder="First name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first}
                        className={
                          errors.first &&
                          touched.first &&
                          errors.first &&
                          `required`
                        }
                      />
                      <span>
                        <T color={'#FFB400'} size={0.9}>
                          {errors.first && touched.first && errors.first}
                        </T>
                      </span>
                    </FormControl>

                    <FormControl>
                      <Input
                        name="last"
                        type="text"
                        placeholder="Last name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last}
                        className={
                          errors.last &&
                          touched.last &&
                          errors.last &&
                          `required`
                        }
                      />
                      <span>
                        <T color={'#FFB400'} size={0.9}>
                          {errors.last && touched.last && errors.last}
                        </T>
                      </span>
                    </FormControl>
                    <FormControl>
                      <Input
                        type="email"
                        name="email"
                        placeholder="email@me.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={
                          errors.email &&
                          touched.email &&
                          errors.email &&
                          `required`
                        }
                      />
                      <span>
                        <T color={'#FFB400'} size={0.9}>
                          {errors.email && touched.email && errors.email}
                        </T>
                      </span>
                    </FormControl>

                    <FormControl>
                      <Textarea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        name="message"
                        rows="10"
                        className={
                          errors.message &&
                          touched.message &&
                          errors.message &&
                          `required`
                        }
                      ></Textarea>
                      <span>
                        <T color={'#FFB400'} size={0.9}>
                          {errors.message && touched.message && errors.message}
                        </T>
                      </span>
                    </FormControl>

                    <Btn
                      type="submit"
                      p={'0.5rem 1rem'}
                      disabled={isSubmitting}
                    >
                      <T color={colors.white} size={0.9}>
                        Send!
                      </T>
                    </Btn>
                  </Flex>
                </form>
              )}
            </Formik>
          </FormWrapper>
        </Col>
        <Col lg={4}>
          <Card />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ContactView;

// const q = query(collection(db, 'messages'));
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, ' => ', doc.data());
// });
