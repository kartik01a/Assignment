import { getData, postData } from "./axios";

const BASE_URL = "http://localhost:5000/api";
const CREATE_COMPANY = "/company/";
const CREATE_PRODUCT = "/product/";

export const createCompany = async (formData: FormData) => {
  try {
    const url = `${BASE_URL}${CREATE_COMPANY}`;
    const response = await postData(url, formData, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllCompany = async () => {
  try {
    const url = `${BASE_URL}${CREATE_COMPANY}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getCompany = async (id: string) => {
  try {
    const url = `${BASE_URL}${CREATE_COMPANY}${id}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (formData: FormData) => {
  try {
    const url = `${BASE_URL}${CREATE_PRODUCT}`;
    const response = await postData(url, formData, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllProduct = async () => {
  try {
    const url = `${BASE_URL}${CREATE_PRODUCT}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getProduct = async (id: string) => {
  try {
    const url = `${BASE_URL}${CREATE_PRODUCT}${id}`;
    const response = await getData(url);
    return response;
  } catch (error) {
    throw error;
  }
};
