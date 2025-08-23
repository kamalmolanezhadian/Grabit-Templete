"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import CommentReplyingForm from "./CommentReplyingForm";
import BlogCategories from "../blog-sidebar/blog-sidebar-area/BlogCategories";
import RecentBlog from "../blog-sidebar/blog-sidebar-area/RecentBlog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { useRouter } from "next/navigation";
import { setSearchTerm } from "@/store/reducers/filterReducer";
import { toPersianNum } from "@/utility/parsianNum";

const getRegistrationData = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("registrationData");
    return data ? JSON.parse(data) : null;
  }
  return null;
};

const BlogDetail = ({ order = "" }: any) => {
  const { Formik } = formik;
  const formikRef = useRef<any>(null);
  const schema = yup.object().shape({
    comment: yup.string().required(),
  });

  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  const { selectedCategory, searchTerm } = useSelector(
    (state: RootState) => state.filter
  );
  const [userData, setUserData] = useState<any | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState<any>(searchTerm || "");
  const [comments, setComments] = useState<any>([
    {
      name: "فاطمه کوشکی",
      lname: "",
      email: "john@example.com",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      date: "۱۴ بهمن ۱۳۹۷",
      profilePhoto: "/assets/img/user/2.jpg",
      replies: [],
    },
    {
      name: "حسین رحیمی",
      lname: "",
      email: "jenifer@example.com",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      date: "۱۴ مهر ۱۳۹۷",
      profilePhoto: "/assets/img/user/1.jpg",
      replies: [],
    },
  ]);

  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newReply, setNewReply] = useState({
    reply: "",
  });

  const postData = useMemo(
    () => ({
      searchTerm,
      selectedCategory,
    }),
    [searchTerm, selectedCategory]
  );

  useEffect(() => {
    const data = getRegistrationData();
    if (data?.length > 0) {
      setUserData(data[data.length - 1]);
    }
  }, []);

  const handleSearch = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(setSearchTerm(searchInput));
    router.push("/blog-left-sidebar");
  };

  const { data, error } = useSWR(
    ["/api/blogcontent", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  if (error) return <div>Failed to load products</div>;

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
      <Col lg={8} md={12} className={`gi-blogs-rightside ${order} `}>
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
                    ۱۴ مهر ۱۳۹۷ <a href="#">ارگانیک</a>
                  </label>
                  <h3>راهنمای بازاریابی: 5 گام برای موفقیت</h3>
                  <p className="gi-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها
                  </p>
                  <p className="gi-text-highlight">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد
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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد
                  </p>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Comments Start -->  */}

          <div className="gi-blog-comments m-t-80">
            {!login ? (
              <div className="container">
                <p>
                  لطفاً برای ارسال دیدگاه
                  <a href="/login"> وارد شوید </a>
                  یا
                  <a href="/register" > ثبت‌ نام کنید </a>.
                </p>
              </div>
            ) : (
              <>
                <div className="gi-blog-cmt-preview">
                  <div className="gi-blog-comment-wrapper">
                    <h4 className="gi-blog-dgi-title">
                    نظرات : {toPersianNum(comments.length)}
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
                                <a onClick={() => handleReplyClick(index)}>
                                  پاسخ
                                </a>
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
                                      placeholder="Message"
                                      rows={3}
                                      required
                                      isInvalid={!!errors.comment}
                                    />
                                    <Form.Control.Feedback
                                      style={{ marginBottom: "10px" }}
                                      type="invalid"
                                    >
                                لطفا نظر را وارد کنید
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
              </>
            )}
          </div>

          {/* <!-- Comments End --> */}
        </div>
        {/* <!--Blog content End --> */}
      </Col>
      <Col
        lg={4}
        md={12}
        className={`gi-blogs-sidebar gi-blogs-leftside m-t-991 ${(order = -1)}`}
      >
        <div className="gi-blog-search">
          <div className="gi-blog-search-form">
            <input
              style={{ boxShadow: "none" }}
              className="form-control"
              placeholder="Search Our Blog"
              type="text"
              value={searchInput}
              onChange={handleSearch}
            />
            <button
              onClick={handleSearchSubmit}
              className="submit"
              type="button"
            >
              <i className="gicon gi-search"></i>
            </button>
          </div>
        </div>
        <div className="gi-blog-sidebar-wrap">
          {/* <!-- Sidebar Recent Blog Block --> */}
          <div className="gi-sidebar-block gi-sidebar-recent-blog">
            <div className="gi-sb-title">
              <h3 className="gi-sidebar-title">مقالات اخیر</h3>
            </div>
            <div className="gi-blog-block-content gi-sidebar-dropdown">
              <RecentBlog />
            </div>
          </div>
          {/* <!-- Sidebar Recent Blog Block --> */}
          {/* <!-- Sidebar Category Block --> */}
          <BlogCategories selectedCategory={selectedCategory} />
          {/* <!-- Sidebar Category Block --> */}
        </div>
      </Col>
    </>
  );
};

export default BlogDetail;
