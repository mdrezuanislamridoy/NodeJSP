## Server Create and work with req & resp

**_to create a server need to import http method_**

**_to run the code on server we need to set a port into server.lister() method_**
_inside server.listen() we can set port name and host name and a messege_

```
server.listen(port, hostName, () => {
    console.log("server is running successfully");
});
```

**we can set content type by using**

` res.writeHead(202, { "content-type": "text/html" });`
