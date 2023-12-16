import React from "react";
import { describe, expect, it } from "vitest";
import PageAbout from "./../src/app/about/page";
import { render, screen } from "@testing-library/react";

describe("About Page", () => {
  it("should render", () => {
    render(<PageAbout />);
    expect(screen.getByText("Version: v1.0.0-dev")).toBeDefined();
  });

  // it("should render", () => {
  //   render(<PageAbout />);
  //   // Assert that the component is rendered without errors
  //   expect(
  //     screen.getByText(/SIMBIO - World first & largest online blood network/i),
  //   ).toBeDefined();
  //   expect(screen.getByText(/Version: v1.0.0-dev/i)).toBeDefined();
  //   expect(
  //     screen.getByText(
  //       /SIMBIO serves as a centralized system designed for the comprehensive management of blood donation organizations and their entire process, spanning from member registration to the blood donation process and beyond./i,
  //     ),
  //   ).toBeDefined();
  //   expect(
  //     screen.getByText(
  //       /Our overarching objective is to deliver a versatile system that caters to the needs of any blood donation organization./i,
  //     ),
  //   ).toBeDefined();
  //   expect(
  //     screen.getByText(
  //       /What sets this system apart is its ability to seamlessly oversee the journey of a donor from one corner of the nation to a patient residing in another, particularly in special cases, all while enhancing the efficiency of the donation process and elevating the donor experience./i,
  //     ),
  //   ).toBeDefined();
  //   expect(
  //     screen.getByText(
  //       /Our approach to security exceeds the standard norms prevalent within the same domain, ensuring a robust safeguarding of information./i,
  //     ),
  //   ).toBeDefined();
  //   expect(
  //     screen.getByText(
  //       /Furthermore, our strategic vision encompasses integration with prevalent ERP systems in the health sector, elevating its utility and value./i,
  //     ),
  //   ).toBeDefined();
  //   expect(screen.getByText(/Developed by Abu Taher Muhammad/i)).toBeDefined();
  //   expect(screen.getByText(/Maintained by Dot9/i)).toBeDefined();
  // });

  // it("renders Link with correct href", () => {
  //   render(<PageAbout />);
  //   // Assert that the Link components have the correct href
  //   expect(
  //     screen.getByText(/Abu Taher Muhammad/i).closest("a"),
  //   ).toHaveAttribute("href", "https://at-mah.vercel.app");
  //   expect(screen.getByText(/Dot9/i).closest("a")).toHaveAttribute(
  //     "href",
  //     "https://dot9.dev",
  //   );
  // });
});
