import { FormCard, FrmBtn, FrmName, Heading } from "./contactStyled";

function contactForm() {
  //   const [input, setInput] = useState("");
  const inputChangeHandler = (e) => {
    // setInput(e.target.value);
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    // if (input) {
    //   console.log(input);
    // }
  };

  return (
    <>
      <FormCard onSubmit={submitHandler}>
        <div>
          <Heading className="flex-row d-flex just-centre">
            We'd Love To Hear
          </Heading>
          <Heading className="flex-row d-flex just-centre">From You.</Heading>
        </div>
        <div className="pt-10">
          <FrmName
            required
            id="glassinputID"
            type="text"
            onChange={inputChangeHandler}
            placeholder="Your First Name"
          />
        </div>
        <div className="pt-5">
          <FrmName
            id="glassinputID"
            required
            type="email"
            onChange={inputChangeHandler}
            placeholder="Your Email"
          />
        </div>
        <div className="pt-5">
          <FrmName
            style={{ height: "150px" }}
            as="textarea"
            id="glassinputID"
            required
            type="text"
            onChange={inputChangeHandler}
            placeholder="Your Message"
          />
        </div>
        <div className="pt-9 align-center flex-row d-flex just-end">
          <FrmBtn>Send Message</FrmBtn>
        </div>
      </FormCard>
    </>
  );
}

export default contactForm;
