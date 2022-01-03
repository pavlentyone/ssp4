'use strict'
function onClick() {
    fetch(`https://api.github.com/users/${document.getElementById('user').value}`)
        .then(resource => resource.json())
        .then(data => {
            document.getElementById('image').setAttribute('src', data.avatar_url)
            var arr = ['name', 'login', 'bio', 'company', 'location', 'email', 'blog']
            arr.forEach((id)=>{
            	document.getElementById(id).innerHTML = data[id] ? data[id] : 'no information about ' + id
            })
        })
        .catch(error => console.log(error))
  }
  onClick()