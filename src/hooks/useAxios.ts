'use client';

import type { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import apiClient from '@/api/apiClient';

interface ApiResponse {
  data: any;
}

interface IUseAxios {
  initialUrl: string;
  initialData?: any;
  config?: any;
  method: string;
}

const useAxios = ({
  initialUrl,
  initialData = {},
  config = {},
  method,
}: IUseAxios) => {
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<any>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // switch (method) {
      //   case 'get':
      //     GET(url);
      //     break;
      //   case 'post':
      //     POST(url, data);
      //     break;
      //   case 'patch':
      //     PATCH(url, data);
      //     break;
      //   case 'delete':
      //     DELETE(url);
      //     break;
      //   default:
      //     break;
      // }
      if (method === 'post') {
        try {
          const response: AxiosResponse<ApiResponse> = await apiClient.post(
            url,
            data,
            config,
          );
          setData(response.data);
          setError(null);
        } catch (error: any) {
          setData(null);
          setError(error);
        }
      } else if (method === 'patch') {
        try {
          const response: AxiosResponse<ApiResponse> = await apiClient.patch(
            url,
            data,
            config,
          );
          setData(response.data);
          setError(null);
        } catch (error: any) {
          setData(null);
          setError(error);
        }
      } else if (method === 'delete') {
        try {
          const response: AxiosResponse<ApiResponse> =
            await apiClient.delete(url);
          setData(response.data);
          setError(null);
        } catch (error: any) {
          setData(null);
          setError(error);
        }
      } else {
        try {
          const response: AxiosResponse<ApiResponse> = await apiClient.get(
            url,
            config,
          );
          setData(response.data);
          setError(null);
        } catch (error: any) {
          setData(null);
          setError(error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const fetchDataWithUrl = (newUrl: string) => {
    setUrl(newUrl);
  };

  return { data, isLoading, error, fetchDataWithUrl };
};

export default useAxios;
