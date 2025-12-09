import React from "react";
import appPhoneImg from "../../assets/images/app-phone.png";
import googlePlayBadge from "../../assets/images/google-play.png";
import appStoreBadge from "../../assets/images/app-store.png";
import featureIcon from "../../assets/images/icon/bubbles.png";
import girl1 from "../../assets/images/girl1.jpg";
import girl2 from "../../assets/images/girl2.jpg";
import girl3 from "../../assets/images/girl3.jpg";
import upArrow from "../../assets/images/upArrow.png";
import downArrow from "../../assets/images/downArrow.png";

export default function AppDownloadSection() {
  const features = [
    "Access To Prescriptions",
    "Track Health Efficiently",
    "Direct Chat With Doctors",
    "In-App Reminders For Consultations",
  ];

  return (
    <section className="w-full bg-[#FFF7E2] border-t border-[#e7decf]">

      

      {/* MOBILE VIEW */}
      <div className="lg:hidden flex flex-col items-center px-6 py-10 text-center">
        
        <h1
          className="font-bold text-[28px] leading-[140%] text-[#1A4D2E] max-w-[330px]"
          style={{ fontFamily: "DM Sans" }}
        >
          Download Amrutam Ayurveda App Now
        </h1>

        <p
          className="font-normal text-[16px] leading-[150%] text-[#555] mt-3 max-w-[350px]"
          style={{ fontFamily: "DM Sans" }}
        >
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda!
        </p>

        {/* FEATURE CARDS STACK */}
        <div className="flex flex-col gap-3 mt-8 w-full items-center">
          {features.map((item) => (
            <div
              key={item}
              className="w-full max-w-[310px] rounded-[16px] border border-[#E6E0CF] bg-[#FFF9E7] px-5 py-4 flex items-center justify-start gap-4"
            >
              <div className="w-[45px] h-[45px] rounded-full border-[2px] border-[#3A643B] flex items-center justify-center bg-[#FFF9E7]">
                <img src={featureIcon} className="w-[24px] h-[24px]" />
              </div>
              <p className="text-[15px] text-[#265734]">{item}</p>
            </div>
          ))}
        </div>

        {/* STORE BADGES */}
        <div className="flex justify-center gap-4 mt-10">
          <img src={googlePlayBadge} className="h-[60px]" />
          <img src={appStoreBadge} className="h-[60px]" />
        </div>
      </div>


      {/* DESKTOP VIEW (UNTOUCHED ORIGINAL) */}
      <div className="hidden lg:grid max-w-[1437px] mx-auto pl-[100px] pr-6 py-16 min-h-[707px] grid-cols-[1.5fr_1.5fr] gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1
            className="font-bold text-[36px] leading-[140%] capitalize text-[#1A4D2E] max-w-[530px]"
            style={{ fontFamily: "DM Sans" }}
          >
            Download Amrutam Ayurveda App Now
          </h1>

          <p
            className="font-normal text-[20px] leading-[150%] tracking-[-0.01em] text-[#555] mb-8 max-w-[474px] mt-4"
            style={{ fontFamily: "DM Sans" }}
          >
            The Amrutam Ayurveda App is your one-stop app for all things
            Ayurveda! Apart from mimicking the website, the app has added
            benefits.
          </p>

          <div className="flex flex-wrap gap-y-[10px] mt-6">
            {features.map((item) => (
              <div
                key={item}
                className="w-[220px] h-[81px] mr-[30px] rounded-[16px] border border-[#E6E0CF]  px-6 py-5 flex items-center"
              >
                <div className="flex items-center gap-[10px] w-[196px] ml-[-6px]">
                  <div className="w-[48px] h-[48px] shrink-0 rounded-full overflow-hidden border-[2px] border-[#3A643B] flex items-center justify-center bg-[#FFF9E7]">
                    <img src={featureIcon} className="w-[26px] h-[26px]" />
                  </div>
                  <p className="text-[16px] text-[#265734]" style={{ fontFamily: "DM Sans" }}>{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[15.3px] mt-[40px] w-[503px] h-[71.99px]">
            <img src={googlePlayBadge} alt="Google Play" className="h-[72px]" />
            <img src={appStoreBadge} alt="App Store" className="h-[72px]" />
          </div>
        </div>


        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[460px] h-[420px]">

            <img src={upArrow} className="absolute top-[-20px] left-[-10px] w-[80px] z-[50]" />
            <img src={downArrow} className="absolute bottom-[50px] left-[140px] w-[110px] z-[50]" />

            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <div className="absolute top-[-30px] right-[20px] w-[320px] h-[320px] rounded-full bg-[#DFDFC7] z-[10]" />

              <img
                src={appPhoneImg}
                className="relative z-[20] w-[230px] h-auto scale-[1.28] translate-x-[-40px] translate-y-[-97px]"
              />
            </div>

            <div className="absolute top-[80px] left-[-140px] bg-[#2F5C37] rounded-[16px] px-5 py-4 w-[200px] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] border border-white/10 backdrop-blur-md z-[40]">
              <p className="text-[12px] opacity-80 mb-1">Engagement Time</p>
              <p className="text-[18px] font-semibold mb-3">6m 33s</p>
            </div>

            <div className="absolute bottom-[-14px] left-[-18px] bg-[#3A643B4F] rounded-[12px] w-[150px] h-[140px] px-4 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.18)] border border-white/20 backdrop-blur-sm flex flex-col items-center justify-between text-center z-[35]">
              <div className="flex -space-x-3 justify-center">
                <img src={girl2} className="w-11 h-11 rounded-full border-[2px] border-[#3A643B4F]" />
                <img src={girl1} className="w-14 h-14 rounded-full border-[3px] border-[#3A643B4F]" />
                <img src={girl3} className="w-11 h-11 rounded-full border-[2px] border-[#3A643B4F]" />
              </div>
              <p className="text-[18px] font-bold text-white">10K+</p>
              <p className="text-[13px] text-white/90">Downloads</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
