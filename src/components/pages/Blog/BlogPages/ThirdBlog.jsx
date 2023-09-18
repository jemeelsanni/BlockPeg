import React from "react";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";

const ThirdBlog = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden sm:hidden lg:block xl:block">
        <div className=" mx-96 my-24">
          <h5 className="text-5xl heading font-semibold">
            What is Token Lockup?{" "}
          </h5>
          <div className="my-6">
            <img
              className=" h-96 w-full"
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*fQVqMl3-x2mrdoXC1poMIA.png"
              alt=""
            />
          </div>

          <div className="my-10">
            <p className="body text-xl">
              The term “token lockup” refers to a specific duration during which
              cryptocurrency tokens are restricted from being transacted or
              traded. Typically, these lockup periods serve as a strategic
              measure to ensure the enduring stability of a particular asset.
              <br />
              <br />
              Token lockups serve several crucial purposes. Firstly, they deter
              holders with substantial token holdings from flooding the market
              with their assets all at once, a scenario that could trigger rapid
              and significant price declines.
              <br />
              <br />
              One common occurrence is the massive sell-offs observed
              immediately after Initial Coin Offerings (ICOs), where early
              investors or even the project’s own team may hastily liquidate
              their holdings upon the token’s market debut. This often results
              in drastic price plunges, creating instability and discouraging
              potential participants.
              <br />
              <br />
              Token lockups, sometimes referred to as vesting periods, mitigate
              such risks. These lockup periods are typically established, often
              spanning one or two years following a cryptocurrency’s launch.
              <br />
              <br />
              For instance, consider a scenario where a startup introduces a
              cryptocurrency via an ICO. In this case, the team might enforce a
              two-year lockup period, ensuring that team members cannot access
              their tokens until this timeframe expires.
              <br />
              <br />
              This approach instills confidence in the project and its team, as
              it underscores their commitment to long-term success, rather than
              being driven solely by immediate market fluctuations. By aligning
              incentives and encouraging sustained effort, token lockups
              contribute to a healthier and more stable cryptocurrency
              ecosystem.
            </p>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className=" sm:block lg:hidden xl:hidden ">
        <div className=" mx-8 my-4">
          <h5 className="text-4xl heading font-semibold">
            What is Token Lockup?{" "}
          </h5>
          <div className="my-6">
            <img
              className=" h-96 w-full"
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*fQVqMl3-x2mrdoXC1poMIA.png"
              alt=""
            />
          </div>

          <div className="my-10">
            <p className="body text-xl">
              The term “token lockup” refers to a specific duration during which
              cryptocurrency tokens are restricted from being transacted or
              traded. Typically, these lockup periods serve as a strategic
              measure to ensure the enduring stability of a particular asset.
              <br />
              <br />
              Token lockups serve several crucial purposes. Firstly, they deter
              holders with substantial token holdings from flooding the market
              with their assets all at once, a scenario that could trigger rapid
              and significant price declines.
              <br />
              <br />
              One common occurrence is the massive sell-offs observed
              immediately after Initial Coin Offerings (ICOs), where early
              investors or even the project’s own team may hastily liquidate
              their holdings upon the token’s market debut. This often results
              in drastic price plunges, creating instability and discouraging
              potential participants.
              <br />
              <br />
              Token lockups, sometimes referred to as vesting periods, mitigate
              such risks. These lockup periods are typically established, often
              spanning one or two years following a cryptocurrency’s launch.
              <br />
              <br />
              For instance, consider a scenario where a startup introduces a
              cryptocurrency via an ICO. In this case, the team might enforce a
              two-year lockup period, ensuring that team members cannot access
              their tokens until this timeframe expires.
              <br />
              <br />
              This approach instills confidence in the project and its team, as
              it underscores their commitment to long-term success, rather than
              being driven solely by immediate market fluctuations. By aligning
              incentives and encouraging sustained effort, token lockups
              contribute to a healthier and more stable cryptocurrency
              ecosystem.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThirdBlog;
