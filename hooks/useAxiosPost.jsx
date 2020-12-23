import React, { useEffect } from "react";
import axios from "axios";

const useAxiosPost = (serverUrl, reqData, reqParams) => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const _reqData =
          typeof reqData === "function" ? await reqData() : reqData;
        const _reqParams =
          typeof reqParams === "function" ? await reqParams() : reqParams;
        const r = await axios.post(serverUrl, _reqData, {
          cancelToken: source.token,
          params: _reqParams,
        });
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

export default useAxiosPost;
