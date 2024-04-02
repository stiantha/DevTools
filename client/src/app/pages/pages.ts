export async function getPages() {
  const response = await fetch(`${process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : 'http://localhost:7000'}/api/resources`);
  const data = await response.json();
  return data;
}