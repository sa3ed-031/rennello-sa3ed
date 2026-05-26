/* eslint-disable react-hooks/set-state-in-effect */
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DataExplorationIcon from "@mui/icons-material/DataExploration";
import DoneIcon from "@mui/icons-material/Done";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import LoginAnimatedPage from "../components/loginpage/LoginAnimatedPage";
import InputBox from "../components/loginpage/InputBox";
import LoginFooter from "../components/loginpage/LoginFooter";
import { useNavigate } from "react-router-dom";
import { useRegisterStep } from "../contexts/RegisterStepsContext";
import { useEffect, useState } from "react";

const neededInfo = [
  {
    step: "1",
    stepInfo: [
      {
        id: "email",
        label: "عنوان البريد الإلكتروني",
        placeholder: "john@example.com",
        type: "email",
      },
      {
        id: "phone",
        placeholder: "+963 (999) 000-0000",
      },
      {
        id: "password",
        label: "كلمة المرور",
        placeholder: "••••••••",
        type: "password",
      },
    ],
  },
  {
    step: "2",
    stepInfo: [
      {
        id: "workshopName",
        label: "اسم الورشة",
        placeholder: "المبدعين",
      },
      {
        id: "category",
        label: "تصنيف الورشة",
        placeholder: "نجارة",
      },
      {
        id: "description",
        label: "وصف الورشة",
        placeholder: "لسنا الوحيدون ولكننا الأفضل",
      },
      {
        id: "contactPhone",
        label: "رقم الهاتف (للتواصل)",
        placeholder: "+963 (999) 000-0000",
      },
    ],
  },
  {
    step: "3",
    stepInfo: [
      {
        id: "city",
        label: "موقع الورشة (المدينة)",
        placeholder: "حماه",
      },
      {
        id: "region",
        label: "موقع الورشة (المنطقة)",
        placeholder: "مصياف",
      },
      {
        id: "experienceYears",
        label: "عدد سنوات الخبرة",
        placeholder: "10",
      },
      {
        id: "idPhoto",
        label: "صورة عن الهوية (رخصة العمل)",
        placeholder: "صورة..",
        type: "file",
      },
    ],
  },
];

function Register() {
  const navigate = useNavigate();
  const { registerInfo, setRegisterInfo } = useRegisterStep();
  const [step, setStep] = useState(1);

  let canSubmit =
    step == 1
      ? registerInfo.email &&
        registerInfo.password.length >= 8 &&
        registerInfo.phone.length >= 10 &&
        (registerInfo.role == "user"
          ? registerInfo.userDetails.userCity.length >= 3 &&
            registerInfo.userDetails.fullName.length >= 8
          : true)
      : step == 2
        ? registerInfo.workshopDetails.workshopName.length >= 4 &&
          registerInfo.workshopDetails.category.length >= 3 &&
          registerInfo.workshopDetails.description.length >= 10 &&
          registerInfo.workshopDetails.contactPhone.length >= 10
        : step == 3
          ? registerInfo.workshopDetails.city.length >= 3 &&
            registerInfo.workshopDetails.region.length >= 3 &&
            registerInfo.workshopDetails.experienceYears &&
            registerInfo.workshopDetails.idPhoto
          : null;

  // useEffect(() => {
  //   const storageStep = JSON.parse(localStorage.getItem("step")) ?? 1;
  //   setStep(storageStep);
  // }, []);

  function handleChange(key, value) {
    const numsValidate = ["experienceYears", "phone", "contactPhone"];
    const workshopValidate = ["workshopName", "category", "city", "region"];

    if (
      (numsValidate.includes(key) && !Number(value) && value != 0) ||
      ((key == "contactPhone" || key == "phone") && value.length > 12) ||
      (key == "password" && value.length > 15) ||
      (key == "email" && value.length > 30) ||
      (workshopValidate.includes(key) && value.length > 10) ||
      (key == "description" && value.length > 30) ||
      (key == "experienceYears" && value.length > 2)
    ) {
      return;
    }

    step == 1
      ? setRegisterInfo({
          ...registerInfo,
          [key]: value,
        })
      : setRegisterInfo({
          ...registerInfo,
          workshopDetails: {
            ...registerInfo.workshopDetails,
            [key]: value,
          },
        });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const role = registerInfo.role == "user" ? "customer" : "owner";
    if (registerInfo.role != "user")
      if (step != 3) {
        setStep((prev) => prev + 1);
        // localStorage.setItem("step", JSON.stringify(step+1));
      } else {
        setStep(0);
        setTimeout(() => {
          navigate(`/user/${role}`);
        }, 2000);
      }
    else {
      setTimeout(() => {
        navigate(`/user/${role}`);
      }, 1500);
    }
  }

  return (
    <LoginAnimatedPage>
      <div className="register-container lg:gap-5 md:justify-center md:gap-2 md:pb-20 md:flex-row-reverse min-h-screen flex flex-col-reverse gap-6 items-center p-4 pb-10 transition-all duration-300">
        <div className="md:w-fit md:gap-4 w-full flex flex-col items-center gap-8 transition-all duration-300">
          <Stepper role={registerInfo.role} step={step} />
          <main className="w-full md:p-4 max-w-md flex flex-col items-center gap-6 p-6 rounded-xl shadow-xl bg-primary-white-font">
            <div className="md:gap-3 w-full flex flex-col gap-4">
              <div
                className={`p-2 ${step != 1 ? "hidden" : "flex"} justify-center gap-4 rounded-lg shadow-sm ring-black/10 bg-[#e5eeff]`}
              >
                <button
                  className={`p-3 w-full rounded-lg ${registerInfo.role == "user" ? "shadow-sm ring-1 text-primary ring-black/5 bg-primary-white-font" : "text-[#586377]"} transition-all duration-300 cursor-pointer`}
                  onClick={() => {
                    setRegisterInfo({
                      ...registerInfo,
                      role: "user",
                    });
                  }}
                >
                  أحتاج إلى خدمة
                </button>
                <button
                  className={`p-3 w-full rounded-lg ${registerInfo.role == "user" ? "text-[#586377]" : "shadow-sm ring-1 text-primary ring-black/5 bg-primary-white-font"} transition-all duration-300 cursor-pointer`}
                  onClick={() => {
                    setRegisterInfo({
                      ...registerInfo,
                      role: "workshopOwner",
                    });
                  }}
                >
                  أملك ورشة عمل
                </button>
              </div>

              <form
                className="md:gap-4 md:flex-row flex-wrap flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                {registerInfo.role == "user" ? (
                  <InputBox
                    key="register-fullName"
                    id="register-name"
                    label="الاسم الكامل"
                    type="text"
                    placeholder="محمود الأحمد"
                    value={registerInfo.userDetails.fullName}
                    onChange={(e) => {
                      if (e.target.value.length > 15) return;
                      setRegisterInfo({
                        ...registerInfo,
                        userDetails: {
                          ...registerInfo.userDetails,
                          fullName: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <></>
                )}

                {neededInfo.map((stepObject) => {
                  if (stepObject.step == step) {
                    return stepObject.stepInfo.map((field) => (
                      <InputBox
                        key={field.id}
                        id={`register-${field.id}`}
                        label={`${field.id == "phone" ? `رقم الهاتف ${registerInfo.role == "user" ? "" : "(للمسؤول)"}` : field.label}`}
                        type={field.type ?? "text"}
                        placeholder={field.placeholder}
                        value={
                          step == 1
                            ? registerInfo[field.id]
                            : registerInfo.workshopDetails[field.id]
                        }
                        onChange={(e) => {
                          handleChange(field.id, e.target.value);
                        }}
                      />
                    ));
                  } else return <></>;
                })}

                {registerInfo.role == "user" ? (
                  <InputBox
                    key="register-userCity"
                    id="register-userCity"
                    label="المدينة"
                    type="text"
                    placeholder="حماه، الجمهورية العربية السورية"
                    value={registerInfo.userDetails.userCity}
                    onChange={(e) => {
                      if (e.target.value.length > 10) return;
                      setRegisterInfo({
                        ...registerInfo,
                        userDetails: {
                          ...registerInfo.userDetails,
                          userCity: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <></>
                )}

                <div className="w-full flex items-stretch gap-4">
                  <button
                    className={`w-full py-4 font-semibold rounded-lg ${
                      canSubmit
                        ? "shadow-md active:opacity-70 active:scale-[.97] hover:scale-[1.02] cursor-pointer bg-primary text-primary-white-font"
                        : "bg-gray-400 text-gray-300 cursor-not-allowed"
                    } duration-300 transition-all `}
                    type="submit"
                    disabled={!canSubmit}
                  >
                    {registerInfo.role == "user" || step == 3
                      ? "انشاء الحساب"
                      : "التالي"}
                  </button>
                  <span
                    className={`w-full py-4 font-semibold text-center rounded-lg ${step != 1 ? "" : "hidden"} shadow-md cursor-pointer active:opacity-70 active:scale-[.97] hover:scale-[1.02] bg-secondary-font/10 text-primary border border-primary duration-300 transition-all `}
                    type="submit"
                    onClick={() => {
                      setStep((prev) => prev - 1);
                    }}
                  >
                    السابق
                  </span>
                </div>
              </form>

              <div className="relative md:gap-3 w-full pt-3 flex gap-4 flex-col items-center">
                <div className="w-full grow h-1 border-t border-secondary-font"></div>
                <span className="absolute top-0 px-4 font-arb-f3 bg-primary-white-font">
                  أو سجل باستخدام
                </span>
                <div className="w-full md:py-2 p-4 flex gap-4 items-center justify-center rounded-lg">
                  <SocialBtn />
                  <SocialBtn google />
                </div>
              </div>

              <p className="max-w-sm font-arb-riyad-regular text-center">
                بإنشاء حساب، فإنك توافق على
                <a
                  className="text-primary p-1 font-semibold underline underline-offset-1"
                  href="#"
                >
                  شروط الخدمة
                </a>
                و
                <a
                  className="text-primary p-1 font-semibold underline underline-offset-2"
                  href="#"
                >
                  سياسة الخصوصية
                </a>
                لرنلّو.
              </p>
            </div>
          </main>
        </div>

        <div className="lg:w-[35%] lg:gap-12 md:w-[40%] md:gap-8 w-full h-[stretch] flex flex-col justify-center gap-2 px-4 text-right">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl text-primary">رنلّو</h1>
            <h2 className="text-xl font-bold font-arb-f5 text-gray-700">
              انضم الى المجتمع
            </h2>
            <p className="text-secondary-font font-arb-riyad-regular">
              جرّب الجيل الجديد من إدارة الخدمات الاحترافية. سواء كنت تحجز أو
              تقدم الخدمة، نجعل العملية سلسة.
            </p>
          </div>

          <div className="flex flex-col md:gap-4 md:px-0 gap-2 px-8 grow-0">
            <WelcomeFeature
              head="محترفون موثوق بهم"
              body="تواصل مع خبراء معتمدين ومقدمي خدمات موثوق بهم في منطقتك."
              Icon={VerifiedUserIcon}
            />
            <WelcomeFeature
              head="حجز سريع"
              body="تضمن منصتنا المبسطة حصولك على المساعدة عندما تكون في أمس الحاجة إليها، ببضع نقرات فقط."
              Icon={ElectricBoltIcon}
            />
            <WelcomeFeature
              head="نمّي أعمالك"
              body="أدوات قوية مصممة لمساعدة المحترفين على إدارة العملاء والجداول الزمنية والمدفوعات بفعالية."
              Icon={DataExplorationIcon}
            />
          </div>
        </div>

        <LoginFooter />
      </div>
    </LoginAnimatedPage>
  );
}

function SocialBtn({ google = false }) {
  return (
    <button className="w-[stretch] p-3 font-arb-f5 flex gap-2 items-center justify-center border rounded-xl transition-all cursor-pointer active:scale-95 hover:scale-102 hover:bg-secondary/80 border-primary-black-font/40">
      <span>{google ? "جوجل" : "فيسبوك"}</span>
      <span className={`${google ? "text-gray-600" : "text-[#1877F2]"}`}>
        {google ? <GoogleIcon /> : <FacebookIcon />}
      </span>
    </button>
  );
}

function WelcomeFeature({ head, body, Icon }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 flex items-center justify-center shrink-0 rounded-lg text-primary-white-font bg-primary/90">
        {Icon && <Icon />}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-arb-f5">{head}</h3>
        <p className="text-secondary-font">{body}</p>
      </div>
    </div>
  );
}

function Stepper({ role, step }) {
  const [steps, setSteps] = useState({
    first: false,
    second: false,
    third: false,
  });

  useEffect(() => {
    step == 2
      ? setSteps({ ...steps, first: true })
      : step == 3
        ? setSteps({ ...steps, second: true })
        : step == 0
          ? setSteps({ ...steps, third: true })
          : "";
  }, [step]);

  return (
    <div
      className={`w-full ${role == "user" ? "hidden" : "flex"} items-center justify-center transition-all duration-300`}
    >
      <div className="flex gap-20 relative justify-center">
        <StepProgress
          step={steps.first}
          title="بيانات الحساب"
          Icon={AccountCircleIcon}
        />
        <StepProgress
          step={steps.second}
          title="بيانات الورشة"
          Icon={HomeRepairServiceIcon}
        />
        <StepProgress
          step={steps.third}
          title="الموقع والخبرة"
          Icon={LocationOnIcon}
        />

        <div className="w-[80%] h-2 absolute top-5 z-0 bg-secondary-font/25">
          <div
            className={`bg-primary z-0 h-full ${steps.third ? "w-full" : steps.second ? "w-[92%]" : steps.first ? "w-[43.5%]" : "w-0"} transition-all duration-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

function StepProgress({ step, title, Icon }) {
  return (
    <div className="step text-center flex flex-col gap-2 items-center justify-center z-9999 backdrop-blur-[0.5px] transition-all duration-400">
      <span
        className={`w-12 h-12 flex items-center justify-center rounded-full ${step ? "bg-primary" : "bg-secondary-font/60"} transition-all duration-500`}
      >
        {step ? (
          <DoneIcon className="text-primary-white-font" />
        ) : (
          Icon && <Icon className="text-primary-white-font" />
        )}
      </span>
      <p>{title}</p>
    </div>
  );
}

export default Register;
