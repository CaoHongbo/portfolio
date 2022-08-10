import { render, screen } from "@testing-library/react";
import App from "./App";
import moment from "moment";

test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("test moment", () => {
  console.log(moment("20160707", "YYYYMMDD").fromNow(true));
});
