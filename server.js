const express = require("express");
const bodyparser = require("body-parser");



const port =3000;
const app= express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(port,function(){
	console.log("App is listening the port :"+port);
});

