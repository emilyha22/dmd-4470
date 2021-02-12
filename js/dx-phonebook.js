const div = document.getElementById('container');
const url = 'https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json';
var arr = [];
var lName = [];

//call fetch function
fetch(url)
//use json method on response to parse
.then(response => response.json())
.then(data => {
    /*console.log(data)*/
    function Person(firstname, lastname, phone, title, birth, email){
            this.firstname = firstname;
            this.lastname = lastname;
            this.phone = phone;
            this.title = title;
            this.birth = birth;
            this.email = email;
    }

    for (i=0; i<5; i++){
        let x = data.contacts[i];
        
        let newPerson = new Person(x.firstname, x.lastname, x.phone, x.title, x.birthdate, x.email);
        arr.push(newPerson);
        lName.push(arr[i].lastname);

        arr.sort((a, b) => {
          if (a.firstname > b.lastname){
            return 1
          }
          else{
            return -1
          }
        });
    }

})

.then(data => {
  for (i=0; i<5; i++){
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    newP.innerHTML = "DOB: " + arr[i].birth + "<br />" + "Email: " + arr[i].email + "<br />" + "Phone: " + arr[i].phone;
    h2.innerHTML = arr[i].firstname + " " + arr[i].lastname;
    h3.innerHTML = arr[i].title;

    newDiv.appendChild(h2);
    newDiv.appendChild(h3);
    newDiv.appendChild(newP);
    
    div.appendChild(newDiv);
    
}

console.log(arr[1]);
lName.sort();
console.log(lName);
})

.catch(function(error) {
  console.error("something went wrong!");
  console.error(error)
});
