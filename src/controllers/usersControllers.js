import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const usersControllers = {
  listUsers: async (req, res) => {
    res.status(200).send(user);
  },

  registerUsers: async (req, res) => {
    const { username, password, email, confirmPassword } = req.body;

    // Check e-mail
    if (await User.findOne({ email: email })) {
      return res.status(422).json({ msg: "Please use another e-mail!" });
    }
    // Create password

    bcrypt.genSalt(12, (error, salt) => {
      if (error) {
        console.error("Error generating salt:", error);
        return;
      }

      if (password !== confirmPassword) {
        return res.status(422).json({ msg: "The passwords don't match" });
      }

      // Use the generated salt to hash the password
      bcrypt.hash(password, salt, async (hashError, hash) => {
        if (hashError) {
          console.error("Error generating hash:", hashError);
          return;
        }

        // Create User
        const user = new User({
          name: username,
          email: email,
          password: hash,
        });

        try {
          await user.save();
          res.status(201).json({ msg: "User created successfully!" });
        } catch (error) {
          res.status(422).json({ msg: "There was an error internally!" });
        }
      });
    });
  },

  checkLogin: async (req, res) => {
    const { email, password } = req.body;

    const _user = await User.findOne({ email: email });

    const checkPass = bcrypt.compare(password, _user.password);

    if (checkPass) {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: _user._id,
        },
        secret
      );

      res.status(201).json({ msg: `Authentication successful!`, Token: `${token}` });
    } else {
      res.status(404).json({ msg: "User not found!" });
    }
  },
};

export default usersControllers;
