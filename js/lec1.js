class RestApi {
    // prop without a value:
    endpoint;

    //constructor:
    constructor(endpoint) {
        this.endpoint = endpoint;
    }


    //put method:
    put() {
        return `The Endpoint is : ${this.endpoint}`;
    }
}
const rest = new RestApi('/movies');
localStorage.setItem('r1', JSON.stringify(rest))

//read from disk:
let str = localStorage.getItem('r1');
let obj = JSON.parse(str);
console.log(obj.endpoint);
