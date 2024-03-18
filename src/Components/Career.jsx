import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";

const Career = (props) => {
  let { setjobtitle } = props;
  let [anime, setanime] = useState("");
  let [show, setshow] = useState(false);
  let [jobpost, setjobpost] = useState([]);
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [Message, setmessage] = useState("");
  let [title, settitle] = useState("");
  let [resume, setFile] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    setanime("animate__fadeIn");
    sessionStorage.setItem("active", "careers");
    window.scrollTo(0, 0);
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "4s");
    let fetchpost = () => {
      axios
        .get(`https://backendapi.meridahr.com/api/job_description/`)
        .then((response) => {
          console.log(response.data);
          setjobpost(response.data);
          sessionStorage.setItem("careers", JSON.stringify(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchpost();
  }, []);
  let submitform = (e) => {
    e.preventDefault();
    let namereg = /^[a-zA-Z]{2,}$/;
    let emailreg = /^[a-z0-9]{2,}@[a-z]{2,}.[a-z]{2,}$/;
    let phonereg = /^[0-9]{10}$/;
    let errormessage = document.getElementById("errormessage");
    if (
      namereg.test(name) &&
      emailreg.test(email) &&
      phonereg.test(phone) &&
      resume != null
    ) {
      let value = { name, email, phone, resume, Message, title };
      errormessage.innerHTML = "";
      const formDataToSend = new FormData();

      // Append each form field to the FormData object
      Object.keys(value).forEach((key) => {
        formDataToSend.append(key, value[key]);
      });
      axios
        .post(`https://backendapi.meridahr.com/api/details/`, formDataToSend)
        .then((response) => {
          alert("Your request has been submited");
          setshow(false);
          navigate("/careers");
          setname("");
          setFile(null);
          setemail("");
          setphone("");
          setmessage("");

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      errormessage.innerHTML = "* Enter the Input correctly";
    }
  };
  return (
    <section
      id="home"
      className={`${anime} animate__animated transi durationani `}
    >
      <NavBar />
      <div
        className={`flex ${anime} animate__animated transi durationani
         flex-wrap mx-auto mt-3  container-lg gap-3 ${
           jobpost.length > 0 ? " justify-between" : "justify-around"
         }`}
      >
        {jobpost.length > 0 ? (
          jobpost.map((job) => {
            return (
              <div className="p-4 flex flex-col justify-between border-2 w-[20rem]">
                <p className="fw-bolder text-lg fontfam">
                  Job Title :{" "}
                  <span className="mulish text-base">{job.Title}</span>{" "}
                </p>
                <p className="fw-bolder fontfam text-lg">
                  Experience :{" "}
                  <span className="mulish text-base">
                    {job.Experience} years{" "}
                  </span>{" "}
                </p>
                <p className="fw-bolder fontfam text-lg">
                  Job Description :{" "}
                  <span className=" mulish text-base">
                    {job.Job_Discription.slice(0, 50)}
                  </span>
                  <Link
                   onClick={(e) => {
                    e.preventDefault(); // Prevents the default navigation behavior
                    setjobtitle(job.Title); // Update the jobtitle state
                    sessionStorage.setItem("title",job.Title)
                    navigate(`/careers/${job.Title.replace(/\s/g, "")}`); // Navigate programmatically
                  }}
                    to={`/careers/${job.Title.replace(/\s/g, "")}`}
                    className=" text-slate-900">
                    {" "}
                    read more
                  </Link>{" "}
                </p>
                <a
                  href="https://interview.meridatechminds.com/register"
                  target="_blank"
                  className="p-3 text-center text-decoration-none text-lg  bgclr2 rounded-3xl text-slate-50"
                >
                  Apply now
                </a>
              </div>
              //onClick={()=>{setshow(true);settitle(job.Title)}}
            );
          })
        ) : (
          <div className="text-center">
            No Job are available as of now!!! Thank you for Visiting!!
          </div>
        )}
      </div>

      <Modal
        show={show}
        onHide={() => setshow(false)}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        className="mx-auto"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dear Applicant
          </Modal.Title>
        </Modal.Header>
        <div className="container p-4 p-sm-0">
          <h4 className="mx-auto mt-2 mt-sm-3 text-center">
            Personal Information
          </h4>
          <form
            className=" md:w-fit mx-auto rounded-s-3xl rounded-tr-3xl mt-4 mb-2 "
            action=""
          >
            <div className="d-flex flex-col flex-sm-row">
              <div className="d-flex flex-col">
                <input
                  required
                  type="text"
                  className="p-3 text-slate-500 border-1 border-slate-400 rounded-2xl text-lg m-1 focus:outline-orange-600 "
                  placeholder="Name *"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                />
                <input
                  required
                  type="email"
                  className="p-3  text-slate-500 border-1 border-slate-400 rounded-2xl text-lg m-1 focus:outline-orange-600 "
                  placeholder="Email *"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                <input
                  required
                  type="number"
                  className="p-3  text-slate-500 border-1 border-slate-400  rounded-2xl text-lg m-1 focus:outline-orange-600 "
                  placeholder="Phone *"
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                />
              </div>
              <div className="d-flex flex-col">
                {/* <select value={subjects} onChange={(e)=>setsubject(e.target.value)} name="Subject" id="selectdrop"
                        className='border-1 border-slate-400 p-3 text-slate-500 cursor-pointer  rounded-s-2xl rounded-tr-2xl text-lg m-2 focus:outline-violet-600'>
                            <option value="Subject"> Subject</option>
                            <option value="Software consulting">Software Consulting</option>
                            <option value="Digital Marketing"> Digital Marketing</option>
                            <option value="Branding">Branding</option>
                            <option value="Business Consulting">Business Consulting</option>

                        </select> */}
                <input
                  required
                  type="file"
                  className="p-3 cursor-pointer sm:w-11/12  text-slate-500 border-1 borderlat2xl text-lg m-1 focus:outline-orange-600 "
                  placeholder=""
                  onChange={(e) => setFile(e.target.files[0])}
                />

                <textarea
                  name="Message"
                  placeholder="Message"
                  value={Message}
                  onChange={(e) => setmessage(e.target.value)}
                  className="p-3 border-1 border-slate-400  text-slate-500  rounded-2xl 
                                      text-lg m-2 focus:outline-orange-600 "
                  id=""
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <p id="errormessage" className="text-red-600 "></p>
            <button
              id="three-rounded"
              onClick={submitform}
              className="px-4 text-white w-50 float-end me-2  my-3 btn-change fw-semibold p-3 bgclr rounded"
            >
              Submit Application
            </button>
          </form>
        </div>
      </Modal>
      <Footer />
    </section>
  );
};

export default Career;
