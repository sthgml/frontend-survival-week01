import { render } from "@testing-library/react";
import App from "./App";

test("render app", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Hello/i);
  expect(titleElement).toBeInTheDocument();
});
