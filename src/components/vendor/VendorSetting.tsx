"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import Link from "next/link";
import { toPersianNum } from "@/utility/parsianNum";

export interface RegistrationData {
  email: string;
  phoneNumber: string;
  home_address: string;
  office_address: string;
  profilePhoto?: string;
  description: string;
  taxIdName?: string;
  ssnOrEin?: string;
  panNo?: string;
  businessType?: string;
  bankName?: string;
  bankAccountNo?: string;
}

const VendorSetting = () => {
  const [userData, setUserData] = useState<RegistrationData | null>(null);
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem("login_user") || "{}");
    if (loginUser && loginUser.uid) {
      const vendorData = JSON.parse(localStorage.getItem("vendor") || "{}");
      const userVendorData = vendorData[loginUser.uid] || null;
      setUserData(userVendorData);
    } else {
      console.error("User is not logged in or missing user ID.");
    }
  }, []);

  if (!login) {
    return (
      <div className="container">
        <p>
          لطفاً <a href="/login">وارد شوید</a> یا <a href="/register">ثبت نام کنید</a>{" "}
          برای مشاهده این صفحه
        </p>
      </div>
    );
  }

  const handleEditBtn = (e: any) => {
    e.preventDefault();
    router.push("/vendor-setting-edit");
  };

  return (
    <>
      <section className="gi-vendor-setting padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-settings-card gi-vendor-profile-card">
                <div className="gi-vendor-card-body">
                  <div className="m-b-30">
                    <div className="gi-vendor-settings">
                    <h5>درباره شرکت ما</h5>
                      <p>
                        {userData?.description ? (
                          userData?.description
                        ) : (
                          <>
                           تو هیچ توضیحی نداری من توسط{" "} اضافه خواهم کرد
                            <Link href={"/vendor-setting-edit"}>این لینک</Link>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="gi-vendor-settings-card">
                    <h5>اطلاعات حساب</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block m-b-30">
                        <h6>آدرس ایمیل </h6>
                        <ul>
                          <li>
                            <strong>ایمیل {toPersianNum(1)} : </strong>
                            {userData?.email}
                          </li>
                          {/* <li>
                            <strong>Email 2 : </strong>support2@exapmle.com
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block m-b-30">
                        <h6>شماره تماس</h6>
                        <ul>
                          <li>
                            <strong>شماره تلفن {toPersianNum(1)} : </strong>({toPersianNum(123)}){" "}
                            {}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block m-b-30">
                        <h6>آدرس</h6>
                        <ul>
                          <li>
                            <strong>دفتر : </strong>
                            {userData?.office_address}
                          </li>
                          <li>
                            <strong>خانه : </strong>{toPersianNum(123)},{userData?.home_address}{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gi-vendor-detail-block">
                        <h6>اطلاعات مالیاتی</h6>
                        <ul>
                          <li>
                          <strong>نام شناسه مالیاتی: </strong>
                            {userData?.taxIdName}
                          </li>
                          <li>
                          <strong>SSN یا EIN: </strong>
                            {userData?.ssnOrEin}
                          </li>
                          <li>
                            <strong>PAN NO: </strong>
                            {userData?.panNo}
                          </li>
                          <li>
                          <strong>نوع کسب و کار: </strong>
                            {userData?.businessType}
                          </li>
                          <li>
                          <strong>نام بانک: </strong>
                            {userData?.bankName}
                          </li>
                          <li>
                          <strong>شماره حساب بانکی: </strong>
                            {userData?.bankAccountNo}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="edit" >
                      <a
                        className="gi-btn-2"
                        data-link-action="editview"
                        title="edit view"
                        data-bs-toggle="modal"
                        data-bs-target="#gi_edit_modal"
                        onClick={handleEditBtn}
                      >
                        <i className="fi fi-rr-pencil" style={{marginLeft  : "4px"}}></i>
                        ویرایش
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorSetting;
