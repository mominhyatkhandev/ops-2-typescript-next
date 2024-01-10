'use client';

import type { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { apiClient, loading } from '@/api/apiClient';

interface ApiResponse {
  data: any;
}

interface IUseAxios {
  initialUrl?: string;
  initialData?: any;
  initialConfig?: any;
  initialMethod?: string;
}

const useAxios = ({
  initialUrl,
  initialData = {},
  initialConfig = {},
  initialMethod,
}: IUseAxios) => {
  const [url, setUrl] = useState<string | undefined>(initialUrl);
  const [data, setData] = useState<any>(initialData);
  const [method, setMethod] = useState<string | undefined>(initialMethod);
  const [config, setConfig] = useState<any>(initialConfig);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let res: AxiosResponse<ApiResponse>;
      try {
        if (url && method === 'post') {
          console.log('RUNNING post FUNCTION IN USEFFECT');
          res = await apiClient.post(url, data, config);
          console.log(res, 'response from useaxios');

          setResponse(res.data);
          setError(null);
        } else if (url && method === 'patch') {
          res = await apiClient.patch(url, data, config);
          setResponse(res.data);
          setError(null);
        } else if (url && method === 'delete') {
          res = await apiClient.delete(url);
          setResponse(res.data);
          setError(null);
        } else {
          res = await apiClient.get(url, config);
          setResponse(res.data);
          setError(null);
        }
      } catch (error: any) {
        setResponse(null);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (url && method) {
      fetchData();
    }
  }, [url, method, data, config]);

  const onApiCall = (
    newUrl: string,
    newData: any,
    newConfig: any,
    newMethod: string,
  ) => {
    setUrl(newUrl);
    setData(newData);
    setMethod(newMethod);
    setConfig(newConfig);
  };

  return { response, isLoading, error, onApiCall };
};

export default useAxios;
