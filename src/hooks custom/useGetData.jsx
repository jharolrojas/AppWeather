import React from "react";

const useGetData = () => {
  let date = new Date();
  let dateDay =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    date.getFullYear();
  let hour =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return { dateDay, hour };
};

export default useGetData;
