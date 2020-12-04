import React from "react";
import axios from "axios";

const useAxiosLazy = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();
  const [called, setCalled] = React.useState(false);

  const dispatch = React.useCallback((url) => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        setData(undefined);
        setLoading(true);
        setCalled(true);
        setError(undefined);
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

  return [dispatch, { data, loading, error, called }];
};

export default useAxiosLazy;
