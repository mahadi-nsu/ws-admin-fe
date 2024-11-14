import apiClient from './apiClient';

const fetcher = (url: string) => apiClient.get(url).then((res) => res.data);

export default fetcher;
