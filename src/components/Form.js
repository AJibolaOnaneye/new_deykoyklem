import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import emailjs from "emailjs-com";

import { COLORS, BREAKPOINTS, FONT_SIZES, FONTS, WEIGHTS } from "../constants";
// import Button from "./Button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      const serviceId = "gmail";
      const templateId = "deykoyklem_template";
      const userId = "user_WhaaUTucf4MbuQGtxjctA";
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
  
      <Container class="container">
        <FormWrap ref={form} onSubmit={submit}>
          <Intro>
            <Heading> Feel free to contact us </Heading>
            <p> Connect with us today to get your dreams started</p>
          </Intro>
          <InputName
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputEmail
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputSubject
            type="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextArea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>
          <Button onClick={submit}>Send Message</Button>

          <Span className={emailSent ? "visible" : null}>
            Thank you for your message, we will be in touch in no time!
          </Span>
        </FormWrap>
      </Container>
  
  );
};

const Container = styled.div`
  background: #0477b3;
  color: #fff;
  font-family: sans-serif;
  padding: 20px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    min-width: 300px;
    @media ${BREAKPOINTS.tablet} {
        min-width: 400px;
      }
      @media ${BREAKPOINTS.laptop} {
      width: 480px;
      }
`;

const Intro = styled.div`
  margin-bottom: 64px;

  @media ${BREAKPOINTS.tablet} {
    max-width: 540px;
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${BREAKPOINTS.tablet} {
    margin-bottom: 86px;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  line-height: 1;
  margin-bottom: 24px;

  @media ${BREAKPOINTS.tablet} {
    font-size: ${FONT_SIZES.l};
    line-height: 1.5;
  }
`;

const FormWrap = styled.form`
//   width: 368px;
// display: grid;

  @media ${BREAKPOINTS.tablet} {
    // width: 460px;
  }
  @media ${BREAKPOINTS.laptop} {
//   width: 508px;
  }

`;

const InputName = styled.input`
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const InputEmail = styled.input`
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const InputSubject = styled.input`
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  height: 100px;
  resize: vertical;
`;

const Span = styled.span`
  display: none;
  text-align: center;

  &.visible {
    display: block;
  }
`;

const Button = styled.button`
  font-family: ${FONTS.secondary};
  font-size: ${FONT_SIZES.s};
  font-weight: ${WEIGHTS.bold};
  cursor: pointer;
  text-align: center;
  background-color: ${COLORS.white};
  color: ${COLORS.black[1000]};
  border: none;
  border-radius: 6px;
  padding: 16px 32px;
  width: ${(p) => (p.width ? `${p.width}px` : "auto")};
  transition: background-color 0.2s ease-in-out, transform 0.3s;

  &:hover {
    // background-color: ${COLORS.lightCyan};
    background-color: #0aa7fa;
    transform: scale(1.1);
  }

  &:disabled {
    background-color: ${COLORS.grey[300]};
    cursor: not-allowed;
  }
`;

export default Form;
