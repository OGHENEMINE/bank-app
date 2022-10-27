const { stack } = require("../app")

const errorHandler = (err, req, res) => {
    if (err.statusCode === 500){
        return res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
        })
    }
    res.json(err.message)
}

module.exports = errorHandler