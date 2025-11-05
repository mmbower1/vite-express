import express from "express";
// import users from "../_data/users.json";

const router = express.Router();

const users = [
  {
    _id: "5d7a514b5d2c12c7449be042",
    name: "Admin Account",
    email: "admin@gmail.com",
    role: "admin",
    password: "123456",
  },
  {
    _id: "5d7a514b5d2c12c7449be043",
    name: "Publisher Account",
    email: "publisher@gmail.com",
    role: "publisher",
    password: "1234567",
  },
  {
    _id: "5d7a514b5d2c12c7449be044",
    name: "User Account",
    email: "user@gmail.com",
    role: "user",
    password: "12345678",
  },
];

router.get("/users", (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length,
  });
});

// Error Handler Middleware (last in chain)
router.use((err, req, res, next) => {
  console.error("API Error:", err);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

export default router;
