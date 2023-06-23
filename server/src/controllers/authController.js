const argon2 = require("argon2");

const User = require("../models/user");

exports.signup = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Validate email, password, and username
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character.",
      });
    }

    const usernameRegex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        message:
          "Username must contain only letters, numbers, underscores, hyphens, and spaces.",
      });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already taken!" });
    }
    const hashedPassword = await argon2.hash(password);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar: "",
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({
      message: "An error occurred during signup, please try again later!",
    });
  }
};

exports.login = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
      res.status(401).json({
        message: "Invalid login credentials, check and try again later!",
      });
    }
    const verifiedPassword = argon2.verify(user.password, password);
    if (!verifiedPassword) {
      res
        .status(401)
        .json({ message: "Invalid password, please check and try again!" });
    }
  } catch (error) {
    console.error("Error logging the user in: ", error);
    res.status(500).json({
      message: "An unexpected error occurred, please try again later!",
    });
  }
};
