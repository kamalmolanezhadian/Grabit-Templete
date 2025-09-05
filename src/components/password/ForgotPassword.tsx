"use client";

import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as formik from "formik";
import * as yup from "yup";

const ForgotPassword = () => {
  const { Formik } = formik;
  const formikRef = useRef<any>(null);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("آدرس ایمیل نامعتبر است")
      .required("ایمیل خود را وارد کنید "),
  });
  const initialValues = {
    email: "",
  };

  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const onSubmit = (values: any) => {
    router.push("/login");
  };

  return (
    <>
      <section className="gi-login padding-tb-40">
        <Container>
          <div className="section-title-2">
            <h2 className="gi-title">
             فراموشی رمز عبور<span></span>
            </h2>
            <p>ایمیل خود را وارد کنید و رمز عبور را تنظیم کنید، ما لینک را برای شما ارسال می کنیم.</p>
          </div>
          <div className="gi-login-content">
            <div className="gi-login-box">
              <div className="gi-login-wrapper">
                <div className="gi-login-container">
                  <div className="gi-login-form">
                    <Formik
                      innerRef={formikRef}
                      validationSchema={schema}
                      onSubmit={onSubmit}
                      initialValues={initialValues}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                      }) => (
                        <>
                          <Form noValidate onSubmit={handleSubmit}>
                            <span className="gi-login-wrap">
                              <label>آدرس ایمیل*</label>
                              <Form.Group>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  placeholder="ایمیل خود را وارد کنید..."
                                  required
                                  isInvalid={!!errors.email}
                                />
                                {errors.email &&
                                  typeof errors.email === "string" && (
                                    <Form.Control.Feedback type="invalid">
                                      {errors.email}
                                    </Form.Control.Feedback>
                                  )}
                              </Form.Group>
                            </span>

                            <span className="gi-login-wrap gi-login-btn">
                              <button className="gi-btn-1 btn" type="submit">
                                فراموشی
                              </button>
                            </span>
                          </Form>
                        </>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-login-box d-n-991">
              <div className="gi-login-img">
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL + "/assets/img/common/login.png"
                  }
                  alt="login"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ForgotPassword;
