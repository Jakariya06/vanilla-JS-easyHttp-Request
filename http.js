function easyHttp() {
    this.http = new XMLHttpRequest;
}


//GET METHOD
easyHttp.prototype.get = function(url, callback){

    this.http.open('GET', url, true)
    

    this.http.onload = ()=> {
        if(this.http.status === 200) {
            callback(null, this.http.responseText)
        } else {
            callback('Error: ' + this.http.status)
        }
    }

    this.http.send()
}


//POST METHOD
easyHttp.prototype.post = function(url, data, callback) {

    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/JSON')

    let self = this
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}


//PUT METHOD
easyHttp.prototype.put = function(url, data, callback) {

    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/JSON')

    let self = this
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}


//DELETE METHOD
easyHttp.prototype.delete = function(url, callback){

    this.http.open('DELETE', url, true)
    

    this.http.onload = ()=> {
        if(this.http.status === 200) {
            callback(null, 'POST DELETED')
        } else {
            callback('Error: ' + this.http.status)
        }
    }

    this.http.send()
}


//couples ==> index.js