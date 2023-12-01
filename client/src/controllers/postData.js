export default async function postData (url= '', data={}) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  try {
    const newData = await response.json();
    return newData;
  }
  catch (err) {
    console.log("Error: ", err); //handle errors here
  }

}
