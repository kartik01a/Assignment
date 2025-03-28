import axios from "axios";

// Added frontend URL directly for DEMO
const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

const createRequest = async (method: 'get' | 'post' | 'patch' | 'put' | 'delete', url: string, data?: any, isFormData = false) => {
    try {
        const config = {
            headers: {
                ...(isFormData && { 'Content-Type': 'multipart/form-data' }),
            },
            // ...(controller && { signal: controller.signal })
        };

        let response;
        switch (method) {
            case 'get':
                response = await api.get(url, config);
                break;
            case 'post':
                response = await api.post(url, data, config);
                break;
            // case 'patch':
            //     response = await api.patch(url, data, config);
            //     break;
            // case 'put':
            //     response = await api.put(url, data, config);
            //     break;
            // case 'delete':
            //     response = await api.delete(url);
            //     break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }
        return response;
    } catch (error) {
        console.error(`Error ${method}ing data:`, error);
        throw error;
    } finally {
        // controller = null;
    }
};

export const getData = (url: string) => createRequest('get', url);

export const postData = (url: string, data: any, isFormData = false) => createRequest('post', url, data, isFormData);




