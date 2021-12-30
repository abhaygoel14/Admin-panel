module.exports=(req,res,next)=>{
    res.headers.add('Access-Control-Expose-Headers', 'Content-Range')
    res.headers.add('Content-Range','posts 0-20/20')
    next()
}