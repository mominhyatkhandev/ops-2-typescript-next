import apiClient from './apiClient';

export const GET = async (endpoint: TEndpoint, headers = {}) => {
  try {
    const response = await apiClient.get(endpoint, headers);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const POST = async (endpoint: TEndpoint, data: any, config = {}) => {
  try {
    const response = await apiClient.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
    console.log('error from helper', error);
    // throw error;
  }
};

export const PATCH = async (endpoint: TEndpoint, data: any) => {
  try {
    const response = await apiClient.patch(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DELETE = async (endpoint: TEndpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
