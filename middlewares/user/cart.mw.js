
const responseMiddleware = (req, res) => {


    let send = res.send

    res.send = () => {
        console.log("resposne middleware working");
    }


    send.call(this)

}


module.exports = responseMiddleware;