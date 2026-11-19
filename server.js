

const express = require("express");

const app = express();
const PORT = 3000;

// Configure EJS
app.set("view engine", "ejs");

// Read submitted HTML form data
app.use(express.urlencoded({ extended: true }));

// Temporary task storage
let tasks = [];

// Display home page

app.get("/", (req, res) => {
  res.render("index", { tasks: tasks });
});


// Handle Add Task form submission
app.post("/add-task", (req, res) => {
    const taskName = req.body.task;

    if (typeof taskName === "string" && taskName.trim() !== "") {
        tasks.push(taskName.trim());
        console.log("New task added:", taskName.trim());
    }

    // Return to home page
    res.redirect("/");
});

// Start server
app.listen(PORT, () => {
    console.log(`TaskFlow server running at http://localhost:${PORT}`);
});
