/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);


const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fmwjoeisxodqrjyrlwsx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd2pvZWlzeG9kcXJqeXJsd3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzg4NTIsImV4cCI6MTk5Mzk1NDg1Mn0.gaYaCq2CMilnhB2OPYQLQbdSVjzlBw-DiKyl8RfJ1KI';

const supabase = createClient(supabaseUrl, supabaseKey);
const { getUsers } = require('./controllers/userController'); // Importez la fonction getUsers depuis votre contrôleur


// Exemple d'utilisation dans un contrôleur
app.get('/api/users', getUsers);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */
// server.js
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/ChatRoutes");
const InvitationRoutes = require("./routes/InvitationRoutes");
const MessageRoutes = require("./routes/MessageRoutes");
const FriendRoutes = require("./routes/FriendRoutes");
const cors = require("cors");

const app = express();

const supabaseUrl = "https://fmwjoeisxodqrjyrlwsx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd2pvZWlzeG9kcXJqeXJsd3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzg4NTIsImV4cCI6MTk5Mzk1NDg1Mn0.gaYaCq2CMilnhB2OPYQLQbdSVjzlBw-DiKyl8RfJ1KI";

const supabase = createClient(supabaseUrl, supabaseKey);
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/Invitation", InvitationRoutes);
app.use("/Friends", FriendRoutes);
app.use("/Message", MessageRoutes);

//sockets
const http = require("http");

//initialiser un server sockets
const server = http.createServer(app);
//pour ecouter les cnx entrantes du client

server.listen(3000, () => {
  console.log("Socket server listening on port 3000");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const io = require('socket.io')(server);
