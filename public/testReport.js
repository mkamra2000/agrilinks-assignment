const api_url = "http://localhost:3000/reports";

async function getData() {
  let get_api_url =
    api_url + "?reportID=" + document.getElementById("reportId").value;
  const response = await fetch(get_api_url);

  // Response from Api
  let data = await response.json();
  const getDataDiv = document.getElementById("getData");
  if (data.message) {
    // There is some error occur
    getDataDiv.innerHTML = `{
    <ul>
        <li>_id: ${data.message}</li>
    </ul>
  }`;
  } else {
    getDataDiv.innerHTML = `{
      <ul>
        <li>_id: ${data._id},</li>
        <li>_cmdtyName: ${data.cmdtyname},</li>
        <li>cmdtyID: ${data.cmdtyID},</li>
        <li>marketID: ${data.marketID},</li>
        <li>marketName: ${data.marketName},</li>
        <li>users: ${data.users},</li>
        <li>timestamp: ${data.timestamp},</li>
        <li>priceUnit: ${data.priceUnit},</li>
        <li>price: ${data.price}</li>
    </ul>
    }`;
  }
  console.log(data);
  getForm.reset();
}

function postData() {
  let post_api_url = api_url;
  let postForm = document.getElementById("postForm");
  fetch(post_api_url, {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      userID: document.getElementById("userId").value,
      marketID: document.getElementById("marketId").value,
      marketName: document.getElementById("marketName").value,
      marketType: document.getElementById("marketType").value,
      cmdtyID: document.getElementById("cmdtyID").value,
      cmdtyName: document.getElementById("cmdtyName").value,
      priceUnit: document.getElementById("priceUnit").value,
      convFctr: document.getElementById("convFctr").value,
      price: document.getElementById("price").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const postDataDiv = document.getElementById("postData");
      if (json.message) {
        postDataDiv.innerHTML = `{
        <ul>
        <li>status: ${json.message}</li>
    </ul>
  }`;
      } else {
        postDataDiv.innerHTML = `{
        <ul>
      <li>status: ${json.status},</li>
      <li>reportId: ${json.reportId}</li>
  </ul>
}`;
      }
    });
  postForm.reset();
}
