const config = {
    dev : {
        ip_address : '0.0.0.0',
        port : 8080,
        mongo :{
            url : "mongodb://mongo:27017/blueprint_dev",
            options : ""
        }
    },
    prod : {
        ip_address : '0.0.0.0',
        port : 3000,
        mongo :{
            url : "mongodb://localhost:27017/blueprint_prod",
            options : ""
        }
    }
}

module.exports = config;
