import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Profile from "../../assets/profile.jpg";

const Team = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-bold text-[#0c3c4c] text-center mb-5 title">
        The Team
      </h1>
      <div className="grid grid-cols-3 px-12 w-full justify-between">
        <div className=" bg-slate-200 flex flex-col justify-center items-center p-8 hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 gap-3">
          <img
            src={Profile}
            alt=""
            className="h-72 w-72 border-2 border-[#0c3c4c] rounded-full "
          />
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <div>
              <h2 className="head text-xl font-extrabold">Leroy Jenkins</h2>
              <p className="head text-lg">Head of Communications</p>
            </div>
            <div className="flex gap-2">
              <div>
                {" "}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin "
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin "
                >
                  <FaTwitter size={20} />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon twitter"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 flex flex-col justify-center items-center p-8 hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 gap-3">
          <div>
            <img
              src={Profile}
              alt=""
              className="h-72 w-72 border-2 border-[#0c3c4c] rounded-full "
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <h2 className="head text-xl font-extrabold">Leroy Jenkins</h2>
            <p className="head text-lg">Head of Communications</p>
          </div>
          <div className="flex gap-2">
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin "
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin "
              >
                <FaTwitter size={20} />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 flex flex-col justify-center items-center p-8 hover:bg-[#0c3c4c] text-[#0c3c4c] hover:text-slate-200 gap-3">
          <div>
            <img
              src={Profile}
              alt=""
              className="h-72 w-72 border-2 border-[#0c3c4c] rounded-full "
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <h2 className="head text-xl font-extrabold">Leroy Jenkins</h2>
            <p className="head text-lg">Head of Communications</p>
          </div>
          <div className="flex gap-2">
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin "
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin "
              >
                <FaTwitter size={20} />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
