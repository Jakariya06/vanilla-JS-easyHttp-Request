//couples ==> async.js
const http = new easyHttp;

http.get('https://jsonplaceholder.typicode.com/users')
   .then(data => console.log(data))
   .catch(err => console.log(err))


const data = {
    name : 'Jack',
    username: 'Jacktheripper',
    email: 'jakoo7@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(err => console.log(err))


http.put('https://jsonplaceholder.typicode.com/users/3', data)
   .then(data => console.log(data))
   .catch(err => console.log(err))



http.delete('https://jsonplaceholder.typicode.com/users/3', data)
   .then(data => console.log(data))
   .catch(err => console.log(err))

