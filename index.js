const http = new easyHttp()


//GET REQUEST
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){

if(err) {
    console.log(err)
} else{
    console.log(response)
}
  
})


//POST REQUEST
const data = {
    title : 'Custom Post',
    body : 'This is Sparta'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err) {
            console.log(err)
        } else{
            console.log(post)
        }
})


//PUT REQUEST
http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(err, post){
    if(err) {
            console.log(err)
        } else{
            console.log(post)
        }
})


//DELETE REQUEST
http.delete('https://jsonplaceholder.typicode.com/posts/3', function(err, response){
    if(err) {
            console.log(err)
        } else{
            console.log(response)
        }
})


//couples ==> http.js