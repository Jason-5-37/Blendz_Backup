import React, { useRef } from 'react';
import { GlobalStyle, StyledFormWrapper, StyledForm, StyledInput, StyledTextArea, StyledButton } from "./style";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2iqobe', 'template_81wr11f', form.current, 'ManIZzhZrsQFXRWHy')
      .then((result) => {
          console.log(result.text);
          alert("SUCCESS!");
      }, (error) => {
          console.log(error.text);
          alert("FAILED!", error);
      });
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <h1>Contact Us Form</h1>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            required
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            required
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            required
          />
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactUs;