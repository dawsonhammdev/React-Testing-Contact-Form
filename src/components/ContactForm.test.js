import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm"


test('inputs are visible', () => {
  //Arrange- Set up testing enviornment

const { getByText } = render(<ContactForm/>)
//const result = render(<App/>);
//console.log(result.debug());
//console.log(result);

//Act-take the action we want to test(click submit button, fill out form)
//No action

//Assert- Test that the data or app responded the way your expected.  (Test routing, test if there is a new component)

const firstNameInput = getByText(/bill/i);
expect(firstNameInput).toBeVisible();
const lastNameInput = getByText(/luo/i);
expect(lastNameInput).toBeVisible();
// const emailInput = getByText(/Email*/i);
// expect(emailInput).toBeVisible();
// const  messageInput = getByText(/Message/i);
// expect(messageInput).toBeVisible();

})