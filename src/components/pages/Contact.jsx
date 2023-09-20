import React, { useState, useRef, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { MuiTelInput } from "mui-tel-input";
import { ClipLoader } from "react-spinners";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Contact = () => {
  const form = useRef();

  const [choice, setChoice] = useState("");
  const [yesOptions, setYesOptions] = useState(Array(6).fill(false));
  const [noOptions, setNoOptions] = useState(Array(6).fill(false));
  const [selectedDropdownValue, setSelectedDropdownValue] =
    useState("Option 1");

  const handleChoiceChange = (event) => {
    setChoice(event.target.value);
  };

  const handleYesOptionChange = (index) => (event) => {
    const newYesOptions = [...yesOptions];
    newYesOptions[index] = event.target.checked;
    setYesOptions(newYesOptions);
  };

  const handleNoOptionChange = (index) => (event) => {
    const newNoOptions = [...noOptions];
    newNoOptions[index] = event.target.checked;
    setNoOptions(newNoOptions);
  };
  const handleDropdownChange = (event) => {
    setSelectedDropdownValue(event.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [phone_number, setPhone_number] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_lw0920c", // Your emailjs service ID
        "template_wds5rdb", // Your emailjs template ID
        {
          user_name: e.target.user_name.value,
          email: e.target.email.value,
          phone_number: phone_number,
          choice: choice,
          selectedDropdownValue: selectedDropdownValue,
          // Include other form fields here
        },
        "XUMoM5FgMGTUctBMI" // Your emailjs user ID
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error);
          setLoading(false);
          toast.error("Error sending email");
        }
      );
  };

  useEffect(() => {
    emailjs.init("XUMoM5FgMGTUctBMI");
  }, []);

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromTop} // Animation for the div after the navbar
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromBottom} // Animation for the form
      >
        <div className="w-full lg:px-52 px-[40px] flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[40%] w-full rounded-[12px] my-6">
            <h1 className=" mb-4 text-3xl text-[#0c3c4c] heading">
              Investor information
            </h1>
            <p className="text-lg font-medium text-black  body">
              Leave your details, and one of our financial advisors will contact
              you as soon as possible.
            </p>
            <br />
            <p className="text-lg font-medium text-black  body">
              Together with you, we will discuss the role of cryptocurrency in
              your investment portfolio.
            </p>
          </div>

          <form
            className="flex mt-12 flex-col gap-y-[20px] body lg:w-[50%] w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <TextField
              label="Full name"
              variant="outlined"
              required
              name="user_name"
              placeholder="Leroy Jenkins"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              type="email"
              label="Email address"
              variant="outlined"
              required
              name="email"
              placeholder="leroy@jenkins.com"
              fullWidth
              sx={{ mb: 2 }}
            />
            <section className="body text-lg">
              <MuiTelInput
                value={phone_number}
                id="phone_number"
                label="Phone Number"
                name="phone_number"
                defaultCountry="GB"
                required
                onChange={(newNumber) => {
                  setPhone_number(newNumber);
                }}
                className="block w-full border border-gray-400 rounded-[4px] bg-transparent h-[52px] focus:outline-none p-1 text-lg px-4 body"
              />
            </section>
            <section>
              <label htmlFor="">
                Have you already invested in cryptocurrency?
              </label>
              <RadioGroup
                aria-label="Choose an option"
                name="choice"
                value={choice}
                onChange={handleChoiceChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>

              {choice === "Yes" && (
                <FormGroup>
                  <h2>Why are you looking for a different investment method?</h2>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={yesOptions[0]}
                        onChange={handleYesOptionChange(0)}
                      />
                    }
                    label="Better returns"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={yesOptions[1]}
                        onChange={handleYesOptionChange(1)}
                      />
                    }
                    label="Too risky/volatile"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={yesOptions[2]}
                        onChange={handleYesOptionChange(2)}
                      />
                    }
                    label="Optimize investment strategy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={yesOptions[3]}
                        onChange={handleYesOptionChange(3)}
                      />
                    }
                    label="Be able to invest without any worries"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={yesOptions[4]}
                        onChange={handleYesOptionChange(4)}
                      />
                    }
                    label="Additional Return Options (Bots/DeFi)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={yesOptions[5]}
                        onChange={handleYesOptionChange(5)}
                      />
                    }
                    label="Otherwise"
                  />
                </FormGroup>
              )}

              {choice === "No" && (
                <FormGroup>
                  <h2>Why haven't you invested in cryptocurrency yet? </h2>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noOptions[0]}
                        onChange={handleNoOptionChange(0)}
                      />
                    }
                    label="Too time consuming"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noOptions[1]}
                        onChange={handleNoOptionChange(1)}
                      />
                    }
                    label="Too risky/volatile"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noOptions[2]}
                        onChange={handleNoOptionChange(2)}
                      />
                    }
                    label="Not convinced of the underlying value"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noOptions[3]}
                        onChange={handleNoOptionChange(3)}
                      />
                    }
                    label="Lack of clarity regarding regulation"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noOptions[4]}
                        onChange={handleNoOptionChange(4)}
                      />
                    }
                    label="Haven't found the right party yet."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noOptions[5]}
                        onChange={handleNoOptionChange(5)}
                      />
                    }
                    label="Otherwise"
                  />
                </FormGroup>
              )}
            </section>
            <section>
              <label>Desired Amount</label>
              <Select
                label="Select an option"
                value={selectedDropdownValue}
                onChange={handleDropdownChange}
                variant="outlined"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                <MenuItem value="Option1">€ 0 - 25,000</MenuItem>
                <MenuItem value="Option2">€ 25,000 - 100,000</MenuItem>
                <MenuItem value="Option3">€ 100,000 - 250,000</MenuItem>
                <MenuItem value="Option4">€ 250,000+</MenuItem>
              </Select>
            </section>

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              fullWidth
              size="large"
            >
              {!loading ? "Submit" : <ClipLoader size={24} />}
            </Button>
          </form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
