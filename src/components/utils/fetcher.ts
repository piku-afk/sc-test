export const fetchData = async () => {
  const res = await fetch('https://api.npoint.io/93bed93a99df4c91044e'); 
  const data = await res.json();
  // console.log(data);
  return data.body.Recommendations;
}