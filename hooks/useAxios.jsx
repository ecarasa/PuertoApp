import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const r = await axios.get(url);
        setData(r.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
};

export default useAxios;
