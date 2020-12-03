import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const r = await axios.get(url, { cancelToken: source.token });
        setData(r.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        } else {
          setLoading(false);
          setError(error);
        }
      }
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  return [data, loading, error];
};

export default useAxios;
