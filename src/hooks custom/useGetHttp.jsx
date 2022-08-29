import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const useGetHttp = () => {
const [ubication, setUbication] = useState({});

  useEffect(() => {
    const success = (pos) => {
    
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=1c01f07c895cff6eb7e70ef612699848`
        )
        .then((res) => setUbication(res.data));
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return { ubication };
};

export default useGetHttp;
