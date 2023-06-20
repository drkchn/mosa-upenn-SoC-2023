import { act, fireEvent, render, screen } from "@testing-library/react";
import { Example } from "./Example.tsx";
import { assert, vitest } from "vitest";
// import axios from 'axios'
import axios, { AxiosResponse } from "axios";
import { UserDataFactory } from "../../test_setup/testFactory.ts";

vitest.mock("axios");

describe("Example", () => {
  const { getByText, findByTestId } = screen;
  it("Page Renders", () => {
    render(<Example />);

    // Assert there is text on the screen
    assert(getByText("Click the button to get some random user data"));

    // Print the screen to the console
    screen.debug();
  });

  it("Should make an api call when the button is clicked", async () => {
    // ================== Configuring axios mocked response =====================

    //jest.mock(...) is used to automatically mock the axios module.jest.mock('axios');
    // Create an object of type of mocked Axios.
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const mockedResponse: AxiosResponse = {
      data: {
        results: [UserDataFactory],
      },
      status: 200,
      statusText: "OK",
      headers: {},
      // @ts-ignore
      config: {},
    };
    // Make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    // ================== Configuring axios mocked response =====================

    // Render the component
    render(<Example />);

    // Find the button by test id
    const button = await findByTestId("get-users-button");

    // Expect the call has not yet been made
    expect(axios.get).not.toHaveBeenCalled();

    // click the button to fire api call
    // Must wrap in act since it updates react state
    await act(() => {
      fireEvent.click(button);
    });

    // Expect the call to have been made
    expect(axios.get).toHaveBeenCalledTimes(1);

    // Expect michael to be on the screen
    expect(getByText("Michael"));
  });
});
