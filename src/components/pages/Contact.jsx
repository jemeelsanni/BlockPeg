import React, { useState, useRef, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import emailjs from "emailjs-com";
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
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef(null);

  const [choice, setChoice] = useState("");
  const [yesOptions, setYesOptions] = useState(Array(6).fill(false));
  const [noOptions, setNoOptions] = useState(Array(6).fill(false));
  const [selectedDropdownValue, setSelectedDropdownValue] =
    useState("Option1");

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await emailjs.send(
        "service_tnm1eqe",
        "template_8xjjmoo",
        {
          user_name: formData.get('user_name'),
          email: formData.get('email'),
          phone_number: phone_number,
          choice: choice,
          yesOptions: yesOptions,
          noOptions: noOptions,
          selectedDropdownValue: selectedDropdownValue,
          yesOptionsLabels: [
            "Better returns",
            "Too risky/volatile",
            "Optimize investment strategy",
            "Be able to invest without any worries",
            "Additional Return Options (Bots/DeFi)",
            "Otherwise",
          ],
          noOptionsLabels: [
            "Too time-consuming",
            "Too risky/volatile",
            "Not convinced of the underlying value",
            "Lack of clarity regarding regulation",
            "Haven't found the right party yet.",
            "Otherwise",
          ],
        },
        "IijIZNKTANLgiOO4o"
      );

      toast.success("Email sent successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    emailjs.init("IijIZNKTANLgiOO4o");
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
        variants={fadeInFromTop}
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromBottom}
      >
        <div className="w-full lg:px-52 px-[40px] flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[40%] w-full rounded-[12px] my-6">
            <h1 className="mb-4 text-3xl text-[#0c3c4c] heading">
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
              placeholder="John Doe"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              type="email"
              label="Email address"
              variant="outlined"
              required
              name="email"
              placeholder="john.doe@example.com"
              fullWidth
              sx={{ mb: 2 }}
            />
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
            <label>Have you already invested in cryptocurrency?</label>
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
                {["Better returns", "Too risky/volatile", "Optimize investment strategy", "Be able to invest without any worries", "Additional Return Options (Bots/DeFi)", "Otherwise"].map((label, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={yesOptions[index]}
                        onChange={handleYesOptionChange(index)}
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
            )}

            {choice === "No" && (
              <FormGroup>
                <h2>Why haven't you invested in cryptocurrency yet?</h2>
                {["Too time-consuming", "Too risky/volatile", "Not convinced of the underlying value", "Lack of clarity regarding regulation", "Haven't found the right party yet.", "Otherwise"].map((label, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={noOptions[index]}
                        onChange={handleNoOptionChange(index)}
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
            )}

            <label>Desired Amount</label>
            <Select
              label="Select an option"
              value={selectedDropdownValue}
              onChange={handleDropdownChange}
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {["€ 0 - 25,000", "€ 25,000 - 100,000", "€ 100,000 - 250,000", "€ 250,000+"].map((option, index) => (
                <MenuItem key={index} value={`Option${index + 1}`}>
                  {option}
                </MenuItem>
              ))}
            </Select>

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




