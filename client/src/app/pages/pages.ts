export async function getPages() {
  const response = await fetch('http://localhost:7000/api/resources');
  const data = await response.json();
  return data;
}