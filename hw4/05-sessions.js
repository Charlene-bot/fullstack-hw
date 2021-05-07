const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
const parseurl = require('parseurl');
// Use the express-session module

app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'secrets',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 86400000}
  })
);

app.get('/', (req, res) => {
  // Add your code here
  if (req.session.views === undefined) {
    req.session.views = [];
    req.session.views.push = `/ \n`;
    res.send(`Welcome to http://localhost:${port}`);
  }
  else {
    res.write(`Currently on path: / \n\n`);
    res.write(req.session.views.join('\n'));
    res.end();
  }
});
  
  app.get('/:path', (req, res) => {
    if (req.session.views === undefined) {
      req.session.views = [];
      req.session.views.push(`/${req.params.path} \n`);
      res.send(`Welcome to http://localhost:${port}`);
    }
      else {
        let pathname = parseurl(req).pathname;
        res.write(`Currently on path:  ${pathname}\n\n`);
        res.write(`Previously visited: `);
      res.write(req.session.views.join('\n'));
      if (!req.session.views.includes(pathname)) {
        req.session.views.push(pathname);
      }
        res.end();
      }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
