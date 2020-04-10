import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test('Is the email feild visible?', () => {
  //Arrange- Set up testing enviornment

  const { getByText } = render(<App/>)
  //const result = render(<App/>);
  //console.log(result.debug());
  //console.log(result);

  //Act-take the action we want to test(click submit button, fill out form)
  //No action

  //Assert- Test that the data or app responded the way your expected.  (Test routing, test if there is a new component)

  const linkElement = getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});
test('is the form visible?', () => {
  //Arrange- Set up testing enviornment

  const { getByText } = render(<App/>)
  //const result = render(<App/>);
  //console.log(result.debug());
  //console.log(result);

  //Act-take the action we want to test(click submit button, fill out form)
  //No action

  //Assert- Test that the data or app responded the way your expected.  (Test routing, test if there is a new component)

  const linkElement = getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});








