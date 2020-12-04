import React from "react";
import axios from "axios";

const useAxiosLazy = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();
  const [called, setCalled] = React.useState(false);

  const dispatch = React.useCallback((url) => {
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
    setLoading(true);
    setCalled(true);
    fetchData();
  }, []);

  return [dispatch, { data, loading, error, called }];
};

export default useAxiosLazy;
