const http = require('http')
const fs = require('fs')
const serverpage = (res,filepath,statusCode)=>{
    fs.readFile(filepath,(err,data)=>{
        if(err == null){
            res.writeHead(statusCode,{"content-type":"text/html"})
            res.write(data)
            res.end()
        }else{
            res.write("Error Loading Page")
            res.end()
        }
    })

}
const server= http.createServer((req, res) => {
    if(req.url == '/home'){
        serverpage(res,"./pages/home.html",200)
    }
    else if (req.url == '/about'){
        serverpage(res,"./pages/about.html",200)
    }
    else if(req.url == '/contact'){
        serverpage(res,"./pages/contact.html",200)
    }
    else{
        serverpage(res,"./pages/error.html",404)
    }
})
server.listen(3000,()=>{
    console.log("Server is running on Port:3000")
})