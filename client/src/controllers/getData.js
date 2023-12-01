export default async function getData(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    const newData = await response.json();
    return newData;
  } catch (err) {S
    console.log("Error:", err);
  }
}

