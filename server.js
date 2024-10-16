import app from './app.js'
import { connectToDatabase } from './db/connection.js'

connectToDatabase()
.then(() => {
    app.listen(5000,()=>console.log("helo server open"))
}).catch((err) => {
    console.log(err);
});
// app.listen(5000,()=>console.log("helo server open"))