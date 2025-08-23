import React from "react";

const ResetPassword = () => {
  return (
    <>
      <section className="gi-login padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
            بازنشانی رمز عبور<span></span>
            </h2>
            <p>لطفاً رمز عبور خود را یکتا تنظیم کنید.</p>
          </div>
          <div className="gi-login-content">
            <div className="gi-login-box">
              <div className="gi-login-wrapper">
                <div className="gi-login-container">
                  <div className="gi-login-form">
                    <form action="#" method="post">
                      <span className="gi-login-wrap">
                        <label>رمز عبور*</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="رمز عبور خود را وارد کنید"
                          required
                        />
                      </span>
                      <span className="gi-login-wrap">
                      <label>تأیید رمز عبور*</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="رمز عبور خود را دوباره وارد کنید"
                          className="mb-24"
                          required
                        />
                      </span>
                      <span className="gi-login-wrap gi-login-btn gi-reset-btn mt-0">
                        <button className="gi-btn-1 btn" type="submit">
                          ارسال
                        </button>
                      </span>
                    </form>
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
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
