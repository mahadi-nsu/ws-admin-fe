const isBrowser = typeof window !== 'undefined';

type Data = {
  fileName: string;
  source: ArrayBufferLike;
};

const fileDownloader = (data: Data) => {
  console.log('fileDownloader', data);
  if (!isBrowser) return;
  var bytes = new Uint8Array(data.source);
  const blob = new Blob([bytes], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', data.fileName);
  link.click();
};

export const zipFileDownloader = (data: ArrayBufferLike, fileName: string) => {
  if (!isBrowser) return;
  const blob = new Blob([data], { type: 'application/zip' });
  const link = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute('download', fileName);
  link.click();
  window.URL.revokeObjectURL(url);
};

export default fileDownloader;
