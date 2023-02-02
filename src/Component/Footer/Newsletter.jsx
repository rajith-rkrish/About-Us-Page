import React, { useState } from "react";
import axios from "axios";
import {
  Sendd,
  Foorm,
  Div,
  Input,
  Btn,
} from "../../cssComponents/NewsletterStyled.jsx";

const Newsletter = () => {
  const [emaill, setEmaill] = useState("");

  // const headers = {
  //   "Content-Type": "application/json;charset=UTF-8",
  //   "Access-Control-Allow-Origin": "*",
  // };

  const inputChangeHandler = (e) => {
    setEmaill((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // setEmaill(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(emaill);

    if (emaill) {
      try {
        const response = await axios.post(
          "http://localhost:5000/newsLetter",
          emaill,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        // .then((res) => {
        //   console.log("RESPONSE RECEIVED: ", res);
        //   if (res.status === 201) {
        //     window.alert("Form Submitted....");
        //     setEmail({ email: "" });
        //   }
        // });
        if (response.status === 201) {
          window.alert("Newsletter subscribed.....");
          setEmaill("");
        }
      } catch (errors) {
        window.alert(`${errors} --- Form not Submitted `);
        console.log(errors);
      }
    }
  };

  return (
    <Div>
      <Foorm onSubmit={submitHandler} method="POST" action="/newsLetter">
        <Input
          required
          type="email"
          name="email"
          // value={emaill}
          onChange={inputChangeHandler}
        />
        <Btn type="submit">
          <Sendd />
        </Btn>
      </Foorm>
    </Div>
  );
};

export default Newsletter;
