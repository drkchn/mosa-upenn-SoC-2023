import { ActualHttpResponseData, MyHttpResponseData } from "./Interfaces.ts";

export const updateLocalStorage = (
  req: string,
  res: ActualHttpResponseData,
  method: string
) => {
  if (window.localStorage.getItem("history") === null) {
    window.localStorage.setItem("history", JSON.stringify([]));
  }

  const previousHistory: MyHttpResponseData[] = JSON.parse(
    window.localStorage.getItem("history") ?? ""
  );

  const responseData: MyHttpResponseData = {
    method: method,
    url: req.split("?")[0],
    status: res.status,
  };

  previousHistory.unshift(responseData);
  window.localStorage.setItem("history", JSON.stringify(previousHistory));

  updateResponseCounts(responseData);
};

const updateResponseCounts = (responseData: MyHttpResponseData) => {
  if (window.localStorage.getItem("successful") === null) {
    window.localStorage.setItem("successful", String(0));
  }

  if (window.localStorage.getItem("failure") === null) {
    window.localStorage.setItem("failure", String(0));
  }

  if (responseData.status === 200) {
    const successful = Number(window.localStorage.getItem("successful"));
    window.localStorage.setItem("successful", String(successful + 1));
  } else {
    const failure = Number(window.localStorage.getItem("failure"));
    window.localStorage.setItem("failure", String(failure + 1));
  }
};

export const clearResponseData = () => {
  localStorage.removeItem("history");
  localStorage.removeItem("successful");
  localStorage.removeItem("failure");
};
