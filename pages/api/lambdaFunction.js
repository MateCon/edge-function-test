export default (req, res) => {
    return res.json({
        message: `Hello, from ${req.url} I'm a Serverless Function!`
    })
}