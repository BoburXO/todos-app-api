require("dotenv").config(); //env format ucun
const usersRouter = require("./routes/todos"); //users routerni import qildik ismi unique ya'ni bowqaca boliwi kere
const express = require("express"); //express
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express(); //express () bilan qo'yiliwi kere ctob cistiyro bosin!
app.use(cors());

app.use(express.json()); //app.use bu middleware iwlatiw ucun serverga dopolneniyala qoyiw ucun json() json farmat ucun;
app.use("/todos", usersRouter);

const PORT = process.env.PORT || 8000; // env port ucun



async function start() {
  try {
    await mongoose.connect('mongodb+srv://todo:todo@todoslesson.juhi34b.mongodb.net').then(() => console.log('db: ok')).catch(() => console.log('db: bad'));
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
