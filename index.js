// Add your code here
const url = ('http://localhost:3000/users')

function submitData(name, email) {
  return fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })

  .then(response => { return response.json()})

  .then((object) => {document.body.innerHTML = object["id"]})

  .catch(error =>{document.body.innerHTML = error.message;})
}

