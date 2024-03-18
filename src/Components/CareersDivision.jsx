import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";

const CareersDivision = (props) => {
  let job=sessionStorage.getItem("title")
  console.log(job);
  let navigate = useNavigate();
  let { career } = useParams();
  let [careers, setcarers] = useState([]);
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [Message, setmessage] = useState("");
  let [title, settitle] = useState(career);
  let [resume, setFile] = useState(null);
  // console.log(career);
  let [show, setshow] = useState(false);
  let [anime, setanime] = useState("");

  useEffect(() => {
    setanime("animate__fadeIn");
    window.scrollTo(0, 0);
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "2s");
    setcarers(JSON.parse(sessionStorage.getItem("careers")));
    setTimeout(() => {
      setanime("");
    }, 2000);
    // console.log(anime);
  }, [career]);
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
  let makearry = (str) => {
    let array = [];
    while (str.indexOf(".") > 0) {
      let point = str.slice(0, str.indexOf(".")+1);
      str = str.slice(str.indexOf(".") + 1);
      array.push(point.trim());
    }
    array.push(str.trim()); // Push the remaining part of the string
    // console.log(array);
    return array;
  };
  let content = {
    title: "Java Developer Intern",
    Experience: "2 years",
    Job_Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo laborum commodi? Et accusantium, quasi quia, porro aperiam minima labore ipsum nemo quam error debitis? Fuga adipisci pariatur magnam dolores",
    points: [
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
      {
        point:
          "Clearly state the position's title to give applicants a quick understanding of the role.",
      },
    ],
  };
  return (
    <div className={`${anime} animate__animated transi durationani `}>
      <NavBar />

      {/* <div className='border-2 mx-auto p-4 md:w-3/5 xl:w-1/2 mt-3'>
              <p className='text-center text-3xl fw-semibold'>Job Details</p>
              <p className='text-2xl fontfam blclr fw-bold'>Title :<span className='mulish fw-medium text-slate-900 text-xl'>
               {content.title} </span></p>
              <p className='text-2xl fontfam blclr fw-bold'>Experience : <span className='mulish fw-medium text-slate-900 text-xl'>
               {content.Experience} </span></p>
              <p className='text-2xl fontfam blclr fw-bold'>Job description : <span className='mulish fw-medium text-slate-900 text-xl'>
               {content.Job_Description} </span></p>
              <div className='flex flex-wrap justify-around gap-2'>
               
              
              {
               content.points.map((p)=>{
                 return(
                   <div className='md:w-2/5 mulish my-2'>
                         {p.point}
                   </div>
                 )
               })
              }</div>
              <div className='mt-2 flex justify-end  pe-3'>
              <button onClick={()=>setshow(true)} className='p-3 rounded-3xl bg-orange-500 text-slate-50'>Apply now</button>
            </div>
       </div> */}

      {careers.length > 0 ? (
        <div>
          {careers.map((obj) => {
            if (obj.Title == job) {
              let responsibility = obj.Job_Discription.slice(
                obj.Job_Discription.indexOf("Responsibilities:") + 17,
                obj.Job_Discription.indexOf("Qualifications:")
              );
              let qualification = obj.Job_Discription.slice(
                obj.Job_Discription.indexOf("Qualifications:") + 15,obj.Job_Discription.indexOf("Key Result Areas (KRA):")
              );
              let keyrole=obj.Job_Discription.slice(
                obj.Job_Discription.indexOf("Key Result Areas (KRA):") + "Key Result Areas (KRA):".length
              );
              let responsearry = makearry(responsibility);
              let qualificationarry =makearry(qualification);
              let keyrolearry=makearry(keyrole)
              return (
                <div className="border-2 mx-auto p-4 md:w-3/5 xl:w-1/2 mt-3">
                  <p className="text-center text-xl fw-semibold">
                    Job Details
                  </p>
                  <p className="text-xl fontfam blclr fw-bold">
                    Title :
                    <span className="mulish fw-medium text-slate-900 text-lg">
                      {obj.Title}
                    </span>
                  </p>
                  <p className="text-xl fontfam blclr fw-bold">
                    Experience :{" "}
                    <span className="mulish fw-medium text-slate-900 text-lg">
                      {obj.Experience} 
                    </span>
                  </p>
                  <p className="text-xl fontfam blclr fw-bold">
                    Job description :{" "}
                    <span className="mulish fw-medium text-slate-900 text-lg">
                      {obj.Job_Discription.slice(
                        0,
                        obj.Job_Discription.indexOf("Responsibilities:")
                      )}
                    </span>
                  </p>
                  <p className="text-xl fontfam blclr fw-bold">
                    Responsibilities :{" "}
                    {
                        responsearry.map((point)=>{
                          return(<span className="mulish block fw-medium text-slate-900 text-lg">
                      {point}
                      </span>
                          )
                        })
                      }
                   
                  </p>
                  <p className="text-xl fontfam blclr fw-bold">
                    Qualification :{" "}
                    {
                        qualificationarry.map((point)=>{
                          return(<span className="mulish fw-medium block text-slate-900 text-lg">
                      {point}
                      </span>
                          )
                        })
                      }
                  </p>
                  <p className="text-xl fontfam blclr fw-bold">
                    Key Role :{" "}
                    {
                        keyrolearry.map((point)=>{
                          return(<span className="mulish fw-medium block text-slate-900 text-lg">
                      {point}
                      </span>
                          )
                        })
                      }
                  </p>

                  <div className="flex flex-wrap justify-between gap-2">
                    {obj.points.map((p) => {
                      return (
                        <div className="md:w-2/5 mulish my-2">{p.point}</div>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex justify-end  pe-3">
                    <a
                    target="_blank"
                      href="https://interview.meridatechminds.com/register"
                      className="p-3 text-decoration-none rounded-3xl bgclr2 text-slate-50"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div>Bye</div>
      )}

      <div>
        <Link to={"/careers"} className="text-decoration-none ">
          <p className="text-center my-3"> Back to the Careers page </p>
        </Link>
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
            Application for the Job
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
                  type="Phone"
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
                  className="p-3 cursor-pointer sm:w-11/12 xl:w-full text-slate-500 border-1 border-slate-400  rounded-2xl text-lg m-1 focus:outline-orange-600 "
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
            <p id="errormessage" className="text-red-600"></p>
            <button
              id="three-rounded"
              onClick={submitform}
              className="px-4 float-end rounded me-2 text-white w-50 ms-auto  my-3 btn-change fw-semibold p-3 bgclr"
            >
              Submit Application
            </button>
          </form>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default CareersDivision;
