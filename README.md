# Node.js Web Server — Simple Routing with HTTP Module

A basic web server built with Node.js that handles different routes and serves corresponding HTML pages.

---

## 🚀 Features

- ✅ Routes for `/home`, `/about`, and `/contact`
- ✅ Custom `404` error page for invalid routes
- ✅ Reusable `servePage` function for modular code
- ✅ Proper HTTP status codes (`200`, `404`)
- ✅ `Content-Type` headers for correct HTML rendering

---

## 🛠️ Tech Stack

- **Node.js**
- **http** module (built-in)
- **fs** module (built-in)

---

## 📁 Project Structure

```
node-server/
├── server.js
└── pages/
    ├── home.html
    ├── about.html
    ├── contact.html
    └── error.html
```

---

## ⚙️ Getting Started

```bash
# Run the server
node server.js

# Or with auto-restart on save
nodemon server.js
```

Then open your browser and visit:
```
http://localhost:3000/home
http://localhost:3000/about
http://localhost:3000/contact
```

---

## 🔍 How My Server Works

I created a `server.js` file. In that, I have imported the `http` module, which is a built-in module in Node.js, which is going to create the server for us. I have also imported another module called `fs`, which is the File System, which is going to help us in routing between HTML files.

I have created a function called `servePage`, which has `fs` code and takes the response, the file path, and the status code for the pages and guides through. It goes like this: if there's an error, it will show "Error Loading Page", and if there is no error, it will show us the HTML page with the status code and the content type.

I have created a server with the `http` module's `createServer` method, where I have given the argument request and response. I have created a conditional argument saying that if `request.url` is `/home`, `/about`, or `/contact`, it will go to the respective pages with the status code of `200`. If it is none of those, it will go to the `error.html` with the status code of `404`.

The server is listening on port number `3000` with a message saying *"Server is running on Port: 3000"*. I have also created a separate `pages` folder with all the HTML files in it.

---

## 📊 Routes

| Route | File Served | Status Code |
|---|---|---|
| `/home` | `pages/home.html` | 200 |
| `/about` | `pages/about.html` | 200 |
| `/contact` | `pages/contact.html` | 200 |
| anything else | `pages/error.html` | 404 |