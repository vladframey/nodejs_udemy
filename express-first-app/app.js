
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(adminRoutes);
app.use(shopRoutes);


app.listen(3000);