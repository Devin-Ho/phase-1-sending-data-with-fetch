// Add your code here

function submitData(firstName, email) {
  const configurableObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      "name": firstName,
      "email": email,
    }),
  };
  return fetch("http://localhost:3000/users", configurableObject)
    .then(res => res.json())
    .then(body => addNewContact(body.id))

    .catch(response => {
     alert("Unathorized Access")
     document.body.append(response.message);
    });
  }

function addNewContact(newID){
  document.getElementsByTagName("body")[0].innerHTML = newID;
  //document.body.append(message)
}

submitData("Name", "name@name.com");


 /* fetch("http://localhost:3000/users", configurableObject)
    .then(response => {
      return response.json();
    })
    .then(body => {
      return addNewContact(body.id);
    })
    .catch(error => {
      alert("Unathorized Access");
      return error.message;
    })
  }
  */