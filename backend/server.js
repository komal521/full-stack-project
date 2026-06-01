const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const db = require("./config/db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer setup for profile image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// ─── Register User (with optional profile image) ───
app.post("/api/auth/register", upload.single("profileImage"), (req, res) => {
  const {
    fullName,
    username,
    email,
    phone,
    gender,
    dob,
    password,
  } = req.body;

  const profileImage = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO users
    (
      full_name,
      username,
      email,
      phone,
      gender,
      dob,
      password,
      profile_image
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullName, username, email, phone, gender, dob, password, profileImage],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Registration Failed",
        });
      }

      res.status(201).json({
        success: true,
        message: "Registration Successful",
      });
    }
  );
});

// ─── Get All Users (for Admin Panel) ───
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Users fetch error:", err);
      return res.status(500).json({
        success: false,
        message: "Users fetch failed",
      });
    }

    // Map DB column names to frontend-friendly keys
    const users = results.map((u) => ({
      id: u.id,
      fullName: u.full_name,
      username: u.username,
      email: u.email,
      phone: u.phone,
      gender: u.gender,
      dob: u.dob,
      profileImage: u.profile_image,
      status: u.status || "Active",
      createdAt: u.created_at,
    }));

    res.status(200).json({ success: true, users });
  });
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});