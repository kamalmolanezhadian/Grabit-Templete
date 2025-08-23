"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  getRegistrationData,
  setRegistrationData,
} from "../login/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleSwitch } from "@/store/reducers/cartSlice";
import VandorEdit from "./VandorEdit";
import { Form } from "react-bootstrap";

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
  profilePhoto?: string;
  description: string;
}

const ProfileEdit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isSwitchOnFromRedux = useSelector((state: RootState) => state.cart.isSwitchOn);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    state: "",
    profilePhoto: "",
    description: "",
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (data.length > 0) {
      const user = data[data.length - 1];
      setFormData(user);
    }
  }, []);

  useEffect(() => {
    setIsSwitchOn(isSwitchOnFromRedux);
  }, [isSwitchOnFromRedux]);


  const handleSwitchToggle = () => {
    dispatch(toggleSwitch());
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }


    // Update the registration data in local storage
    const updatedData = [...getRegistrationData()];
    updatedData[updatedData.length - 1] = formData;
    setRegistrationData(updatedData);

    // Redirect to the user profile page after editing
    router.push("/user-profile");
  };

  if (isSwitchOn) {
    return <VandorEdit />;
  }

  return (
    <>
      <section className="gi-register padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              ویرایش نمایه<span></span>
            </h2>
            <p>بهترین مکان برای خرید و فروش محصولات دیجیتال.</p>
          </div>
          <div className="row">
            <div className="gi-register-wrapper">
              <div className="gi-register-container">
                <div className="gi-register-form">
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "10px",
                    }}
                  >
                    {isSwitchOn ? "سوییچ به فروشنده" : "سوییچ"}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "10px",
                    }}
                    className="switch"
                  >
                    <input
                      onChange={handleSwitchToggle}
                      checked={isSwitchOn}
                      id="switch-rounded"
                      type="checkbox"
                    />
                    <label htmlFor="switch-rounded"></label>
                  </span>
                  <Form noValidate validated={validated}
                    className="gi-blog-form"
                    action="#"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <span className="gi-register-wrap gi-register-half">
                      <label>نام*</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="نام خود را وارد کنید"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                         <Form.Control.Feedback type="invalid">
                         لطفا نام را وارد کنید
                        </Form.Control.Feedback>
                      </Form.Group>
                    </span>
                    <span className="gi-register-wrap gi-register-half">
                      <label>نام خانوادگی*</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="نام خانوادگی خود را وارد کنید"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                         <Form.Control.Feedback type="invalid">
                         لطفا نام خانوادگی را وارد کنید
                        </Form.Control.Feedback>
                      </Form.Group>
                     
                    </span>
                    <span
                      style={{ marginTop: "10px" }}
                      className="gi-register-wrap gi-register-half"
                    >
                      <label>ایمیل*</label>
                      <Form.Group>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="ایمیل خود را وارد کنید ..."
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                        لطفا نام کاربری صحیح را وارد کنید
                        </Form.Control.Feedback>
                      </Form.Group>
                    </span>
                    <span
                      style={{ marginTop: "10px" }}
                      className="gi-register-wrap gi-register-half"
                    >
                      <label>تلفن همراه*</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="phoneNumber"
                          placeholder="شماره تلفن خود را وارد کنید" 
                         pattern="^(09|\+989|989)\d{9}$"
                          required
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                        لطفا شماره 11 رقمی را وارد کنید.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </span>
                    <span
                      style={{ marginTop: "10px" }}
                      className="gi-register-wrap"
                    >
                      <label>آدرس</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="address"
                          placeholder="آدرس"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                         <Form.Control.Feedback type="invalid">
                         لطفا آدرس را وارد کنید
                        </Form.Control.Feedback>
                      </Form.Group>
                    </span>
                    <span
                      style={{ marginTop: "10px" }}
                      className="gi-register-wrap"
                    >
                      <div className="gi-leave-form">
                        <Form.Group>
                          <label>درباره من</label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="پیام"
                            required
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                          این فیلد الزامی است
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </span>

                    <span
                      style={{ paddingTop: "10px", marginTop: "10px" }}
                      className="gi-register-wrap"
                    >
                      <label>عکس پروفایل</label>
                      <input
                        style={{ paddingTop: "10px" }}
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        onChange={handleFileChange}
                      />
                      {formData.profilePhoto && (
                        <img
                          src={formData.profilePhoto}
                          alt="Profile"
                          width="100"
                        />
                      )}
                    </span>
                    <span
                      style={{ justifyContent: "end", marginTop: "10px" }}
                      className="gi-register-wrap gi-register-btn"
                    >
                      <button className="gi-btn-1" type="submit">
                        ذخیره
                      </button>
                    </span>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileEdit;
