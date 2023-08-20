 const app = require('express')()
 const body= require('body-parser');
 app.use(body.urlencoded({extended:true}));
 app.use(body.json());
 require('dotenv').config()
 require('./config/db')
 require('./routes')(app)

  const port = 3030;
  app.listen(port,()=>
  {
    console.log(`server connected on port ${port}`)
  })
