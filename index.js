// Add your code here
function submitData(username, userEmail){
    const body = document.querySelector('body');
    const user={
        'name': username,
        'email': userEmail,
    }
    return fetch('http://localhost:3000/users',{
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user)
    }).then(
        response => response.json()
    ).then(
        newObj => {
            // find the ID of newObj and append the value to the DOM within the body
            // snag the body
            // create a new 'p' element to hold the ID in
            //const p = document.createElement('p');
            //p.innerText = newObj.id;
            // append to the body
            //body.appendChild(p);
            body.innerHTML=newObj.id;
        }
    ).catch(
        error => {
            body.innerHTML='Unauthorized Access';
        }
    )
}