import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

const FAQs = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div className="bg-[#F2F8FE] py-5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className="text-center mx-auto mb-10"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="text-5xl font-bold">FAQs</h1>
          <p className="text-2xl font-normal mt-2 capitalize">
            Frequently asked questions
          </p>
        </div>
        <div>
          <div id="accordionExample">
            {/* Accordion Item #1 */}
            <div className="rounded-t border border-neutral-200 bg-white">
              <h2 className="mb-0">
                <button
                  className={`${
                    activeElement === "element1" &&
                    "text-primary border-neutral-200"
                  } group relative flex w-full items-center rounded-t border-0 bg-[#F2F8FE] px-5 py-4 text-left text-lg transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:text-[#16D5FF] dark:hover:bg-blue-400`}
                  type="button"
                  onClick={() => handleClick("element1")}
                  aria-expanded={
                    activeElement === "element1" ? "true" : "false"
                  }
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                  <span
                    className={`${
                      activeElement === "element1"
                        ? "rotate-[-180deg] -mr-1"
                        : "rotate-0 fill-[#16D5FF]"
                    } ml-auto h-5 w-5 shrink-0 fill-[#16D5FF] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element1"}>
                <div className="px-5 py-4 text-lg">
                  <strong>This is the first item's accordion body.</strong>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                  elementum egestas ligula in varius. Proin ac erat pretium,
                  ultricies leo at, cursus ante. Pellentesque at odio euismod,
                  mattis urna ac, accumsan metus. Nam nisi leo, malesuada vitae
                  pretium et, laoreet at lorem. Curabitur non sollicitudin
                  neque.
                </div>
              </TECollapse>
            </div>

            {/* Accordion Item #2 */}
            <div className="border border-neutral-200 bg-white">
              <h2 className="mb-0">
                <button
                  className={`${
                    activeElement === "element2" &&
                    "text-primary border-neutral-200"
                  } group relative flex w-full items-center border-0 bg-[#F2F8FE] px-5 py-4 text-left text-lg transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:text-[#16D5FF] dark:hover:bg-blue-400`}
                  type="button"
                  onClick={() => handleClick("element2")}
                  aria-expanded={
                    activeElement === "element2" ? "true" : "false"
                  }
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                  <span
                    className={`${
                      activeElement === "element2"
                        ? "rotate-[-180deg] -mr-1"
                        : "rotate-0 fill-[#16D5FF]"
                    } ml-auto h-5 w-5 shrink-0 fill-[#16D5FF] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element2"}>
                <div className="px-5 py-4 text-lg">
                  <strong>This is the second item's accordion body.</strong>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                  elementum egestas ligula in varius. Proin ac erat pretium,
                  ultricies leo at, cursus ante. Pellentesque at odio euismod,
                  mattis urna ac, accumsan metus. Nam nisi leo, malesuada vitae
                  pretium et, laoreet at lorem. Curabitur non sollicitudin
                  neque.
                </div>
              </TECollapse>
            </div>

            {/* Accordion Item #3 */}
            <div className="border-b border-neutral-200 bg-white">
              <h2 className="mb-0">
                <button
                  className={`${
                    activeElement === "element3"
                      ? "text-primary border-neutral-200"
                      : "transition-none"
                  } group relative flex w-full items-center border-0 bg-[#F2F8FE] px-5 py-4 text-left text-lg transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:text-[#16D5FF] dark:hover:bg-blue-400`}
                  type="button"
                  onClick={() => handleClick("element3")}
                  aria-expanded={
                    activeElement === "element3" ? "true" : "false"
                  }
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                  <span
                    className={`${
                      activeElement === "element3"
                        ? "rotate-[-180deg] -mr-1"
                        : "rotate-0 fill-[#16D5FF]"
                    } ml-auto h-5 w-5 shrink-0 fill-[#16D5FF] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element3"}>
                <div className="px-5 py-4 text-lg">
                  <strong>This is the third item's accordion body.</strong>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
                  elementum egestas ligula in varius. Proin ac erat pretium,
                  ultricies leo at, cursus ante. Pellentesque at odio euismod,
                  mattis urna ac, accumsan metus. Nam nisi leo, malesuada vitae
                  pretium et, laoreet at lorem. Curabitur non sollicitudin
                  neque.
                </div>
              </TECollapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
