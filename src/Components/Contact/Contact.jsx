import React from "react";
import "./Contact.css";
function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "96adfbd6-3c86-4bb9-a09c-15cfcb82c154");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your Information Submitted!!")
    }
  }

  

  return (
    <>
      <div className="contact-con">
       <h1> <span className="con">Get In Touch</span></h1>

        <form onSubmit={onSubmit}>
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="name" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="text" placeholder="Email Address"  name="email" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="number" name="mobile" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="text" name="emailSub" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="textarea-field">
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Messages"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
