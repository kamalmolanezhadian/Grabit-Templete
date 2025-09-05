"use client";
import { useEffect, useRef, useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import CommentReplyingForm from "./CommentReplyingForm";
import { toPersianNum } from "@/utility/parsianNum";

const getRegistrationData = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("registrationData");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

const BlogDetailFullwidth = ({ order = "" }: any) => {
  const { Formik } = formik;
  const formikRef = useRef<any>(null);
  const schema = yup.object().shape({
    comment: yup.string().required(),
  });

  const [userData, setUserData] = useState<any | null>(null);

  const [comments, setComments] = useState<any>([
    {
      name: "فاطمه کوشکی",
      lname: "",
      email: "john@example.com",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      date: "خرداد 14, 1402",
      profilePhoto: "",
      replies: [],
    },
    {
      name: "حسین ملوانی",
      lname: "",
      email: "jenifer@example.com",
      comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      date: "اردیبهشت 14, 1402",
      profilePhoto: "",
      replies: [],
    },
  ]);

  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newReply, setNewReply] = useState({
    reply: "",
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (data.length > 0) {
      setUserData(data[data.length - 1]);
    }
  }, []);

  const onSubmit = (data: any) => {
    const date = new Date().toLocaleDateString();
    setComments((prevComments: any) => [
      ...prevComments,
      {
        ...data,
        date,
        profilePhoto: userData?.profilePhoto || "",
        name: userData?.firstName || "",
        lname: userData?.lastName || "",
        email: userData?.email || "",
        replies: [],
      },
    ]);

    // Reset form after successful submission
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  const onReplySubmit = (data: any, index: number) => {
    const date = new Date().toLocaleDateString();
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index] = {
        ...updatedComments[index],
        replies: [
          ...updatedComments[index].replies,
          {
            ...data,
            date,
            profilePhoto: userData?.profilePhoto || "",
            name: userData?.firstName || "",
            lname: userData?.lastName || "",
            email: userData?.email || "",
          },
        ],
      };
      return updatedComments;
    });

    setReplyingTo(null);
  };

  const handleReplyClick = (index: number) => {
    setReplyingTo(index);
  };

  return (
    <>
      <Col lg={12} md={12} className={`gi-blogs-rightside ${order} `}>
        {/* <!-- Blog content Start --> */}
        <div className="gi-blogs-content">
          <div className="gi-blogs-inner">
            <div className="gi-single-blog-item">
              <div className="single-blog-info">
                <figure className="blog-img">
                  <a href="#">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/blog/8.jpg"
                      }
                      alt="news imag"
                    />
                  </a>
                </figure>
                <div className="single-blog-detail">
                  <label>
                    30 خرداد 1403 , <a href="#">ارگانیک</a>
                  </label>
                  <h3>راهنمای بازاریابی: 5 گام برای موفقیت</h3>
                  <p className="gi-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                  </p>
                  <p className="gi-text-highlight">
                  متن لورم ایپسوم استاندارد که از دهه ۱۵۰۰ مورد استفاده قرار گرفته، در زیر برای علاقه‌مندان بازتولید شده است. بخش‌های ۱.۱۰.۳۲ و ۱.۱۰.۳۳ از کتاب &quot;درباره‌ی حدهای خیر و شر&quot; اثر سیسرون (de Finibus Bonorum et Malorum) درج شده‌اند
                  </p>
                  <p>
                  برخلاف تصور رایج، لورم ایپسوم به سادگی تصادفی نیست
                    متن ریشه در قطعه ای از معابر لورم ایپسوم دارد
                    ادبیات کلاسیک لاتین از 45 قبل از میلاد، که آن را به بیش از 2000 می رساند
                    ساله ریچارد مک کلینتاک، استاد لاتین در
                    کالج همپدن-سیدنی در ویرجینیا
                  </p>
                  <div className="sub-img">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_URL +
                            "/assets/img/blog/3.jpg"
                          }
                          alt="blog"
                        />
                      </div>
                      <div className="col-md-6">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_URL +
                            "/assets/img/blog/4.jpg"
                          }
                          alt="blog"
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                  برخلاف تصور رایج، لورم ایپسوم به سادگی تصادفی نیست
                    متن ریشه در قطعه ای از معابر لورم ایپسوم دارد
                    ادبیات کلاسیک لاتین از 45 قبل از میلاد، که آن را به بیش از 2000 می رساند
                    ساله ریچارد مک کلینتاک، استاد لاتین در
                    کالج همپدن-سیدنی در ویرجینیا
                  </p>
                  <p>
                  برخلاف تصور رایج، لورم ایپسوم به سادگی تصادفی نیست
                    متن ریشه در قطعه ای از معابر لورم ایپسوم دارد
                    ادبیات کلاسیک لاتین از 45 قبل از میلاد، که آن را به بیش از 2000 می رساند
                    ساله ریچارد مک کلینتاک، استاد لاتین در
                    کالج همپدن-سیدنی در ویرجینیا
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Comments Start -->  */}
          <div className="gi-blog-comments m-t-80">
            <div className="gi-blog-cmt-preview">
              <div className="gi-blog-comment-wrapper">
                <h4 className="gi-blog-dgi-title">
                 {toPersianNum(comments.length)} : نظرات 
                </h4>
                {comments.map((data: any, index: number) => (
                  <div key={index}>
                    <div className="gi-single-comment-wrapper mt-35">
                      <div className="gi-blog-user-img">
                        <img
                          src={
                            data.profilePhoto ||
                            process.env.NEXT_PUBLIC_URL +
                              "/assets/img/avatar/placeholder.jpg"
                          }
                          alt="blog image"
                        />
                      </div>
                      <div className="gi-blog-comment-content">
                        <h5>
                          {data.name} {data.lname}
                        </h5>
                        <span>{data.date} </span>
                        <p>{data.comment} </p>

                        {replyingTo === index ? (
                          <div className="gi-blog-cmt-form">
                            <div className="gi-blog-reply-wrapper mt-50">
                              <CommentReplyingForm
                                index={index}
                                onFormSubmit={onReplySubmit}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="gi-blog-details-btn">
                            <a onClick={() => handleReplyClick(index)}>پاسخ</a>
                          </div>
                        )}
                      </div>
                    </div>

                    {data.replies.map((reply: any, replyIndex: number) => (
                      <div
                        key={replyIndex}
                        className="gi-single-comment-wrapper sub-cmt"
                      >
                        <div className="gi-blog-user-img">
                          <img
                            src={
                              reply.profilePhoto ||
                              process.env.NEXT_PUBLIC_URL +
                                "/assets/img/avatar/placeholder.jpg"
                            }
                            alt="blog image"
                          />
                        </div>
                        <div className="gi-blog-comment-content">
                          <h5>
                            {reply.name} {reply.lname}
                          </h5>
                          <span>{reply.date}</span>
                          <p>{reply.reply}</p>
                          {/* <div className="gi-blog-details-btn">
                              <a >
                                Reply
                              </a>
                            </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="gi-blog-cmt-form">
              <div className="gi-blog-reply-wrapper mt-50">
                <h4 className="gi-blog-dgi-title">یک پاسخ بگذارید</h4>

                <Formik
                  innerRef={formikRef}
                  validationSchema={schema}
                  onSubmit={onSubmit}
                  initialValues={{
                    comment: "",
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form
                      noValidate
                      onSubmit={handleSubmit}
                      className={`gi-blog-form ${
                        errors.length ? "was-validated" : ""
                      }`}
                      action="#"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="gi-text-leave">
                            <Form.Group>
                              <InputGroup hasValidation>
                                <Form.Control
                                  as="textarea"
                                  name="comment"
                                  value={values.comment}
                                  onChange={handleChange}
                                  placeholder="پیام"
                                  rows={3}
                                  required
                                  isInvalid={!!errors.comment}
                                />
                                <Form.Control.Feedback
                                  style={{ marginBottom: "10px" }}
                                  type="invalid"
                                >
                                 لطفا نظر خود را وارد کنید
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                            <button type="submit" className="gi-btn-2 mt-4">
                              ارسال
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          {/* <!-- Comments End --> */}
        </div>
        {/* <!--Blog content End --> */}
      </Col>
    </>
  );
};

export default BlogDetailFullwidth;
