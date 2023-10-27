import React from "react";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import about3 from "../../assets/about-3.png";
import tick from "../../assets/tick.png";
import AppDownloadSection from "../core/homepage/AppDownloadSection";

export default function About() {
  return (
    <div className=" flex flex-col gap-10">
      <div className="aboutpage flex flex-col justify-center items-center gap-3 border-b-0 shadow shadow-black">
        <h1 className=" text-3xl md:text-5xl font-semibold">About Us</h1>
        <h1 className=" md:text-xl text-lg">Story about our Company</h1>
      </div>

      <section className=" flex flex-col md:flex-row justify-around items-center gap-44 px-56 py-10">
        <div className=" flex flex-col gap-8">
          <h1 className=" uppercase text-lg font-bold text-blue-600">
            About TheDoctors
          </h1>
          <h1 className=" text-5xl font-medium text-sky-900">
            We Care About Your Health
          </h1>
          <p className=" opacity-75  text-lg">
            TheDoctors is a registered Start Up Company empanelled with 1200
            plus doctors and have touched lives of more than 3 lakhs patients.
            Incubated by IIM Kolkata, Nasscom, IIT Guwahati, Assam Start Up
            Nest, Bengal Chamber of Commerce. We’ve raised 50 lakhs grants and
            1.5 Cr investments from Angel Investors, Banks and NEDFI.
          </p>
          <div className=" space-y-4">
            <p className=" opacity-90 text-lg">List of Products</p>
            <div className=" pl-8 text-xl text-cyan-700 space-y-2">
              <li>Appointment of Doctors</li>
              <li>Door Step Medicine Delivery</li>
              <li>Lab Appointments</li>
              <li>Doctor Utility ERP Solution</li>
              <li>Online Consultation</li>
              <li>Digital Marketing & Health related knowledge dairies</li>
            </div>
          </div>
          <div className=" w-full border bg-slate-300 "></div>
          <div className=" grid grid-cols-2 gap-4 text-lg">
            <div className=" flex gap-4">
              <img src={tick} alt="" width={25} />
              <p> 100% Expert Doctor</p>
            </div>
            <div className=" flex gap-4">
              <img src={tick} alt="" width={25} />
              <p> Instant Appointment</p>
            </div>
            <div className=" flex gap-4">
              <img src={tick} alt="" width={25} />
              <p> Instant Medicine</p>
            </div>
            <div className=" flex gap-4">
              <img src={tick} alt="" width={25} />
              <p> Lab Test</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={about1}
            alt=""
            width={1600}
            className="relative rounded-3xl shadow-2xl shadow-slate-900"
          />
          <img
            src={about2}
            alt=""
            className=" absolute -bottom-16 -right-16 rounded-3xl shadow-2xl shadow-slate-900"
          />
        </div>
      </section>

      <section className=" flex flex-col md:flex-row justify-around items-center gap-20 px-44 py-10">
        <div>
          <img className="" src={about3} alt="" width={1000} />
        </div>
        <div className=" space-y-4">
          <h1 className=" text-5xl font-medium text-sky-900">
            Why People Choose Us
          </h1>
          <h1 className=" uppercase text-lg font-bold text-blue-600">
            WE ARE PROUD TO HAVE THE OPPORTUNITY TO GIVE YOU THE SMILE OF YOUR
            DREAMS.
          </h1>
          <div className=" py-4 space-y-3 opacity-75">
            <p>
              We are registered with over 1200+ specialists & provide the
              facility of online doctor booking at the most renowned Hospitals
              in the valley.
            </p>
            <p>
              We provide lab appointments, Doctor Utility ERP Solutions & online
              consultation.We also share health related knowledge & Digital
              Marketing dairies related to a variety of widespread health
              aspects.
            </p>
            <p>
              We provide the fastest delivery of medicines at your doorstep
              along with impressive discounts without any extra delivery
              charges.
            </p>
            <p>
              We have been providing quality services to our customers since 5
              years & have shared a bond with more than 3 lakh patients over the
              time.
            </p>
            <p>
              We are a registered company incubated by IIM Kolkata, Nasscom, IIT
              Guwahati, Assam Start Up Nest & Bengal Chamber of Commerce.
            </p>
            <p>
              We provide hassle-free customer services and solve respective
              queries within a short period in a professional manner , because
              we value your time!
            </p>
          </div>
        </div>
      </section>

      <div>
        <AppDownloadSection />
      </div>
    </div>
  );
}
