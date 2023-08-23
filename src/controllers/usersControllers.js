import User from "../models/user.js";
import bcrypt from "bcrypt";

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

    const abcde = bcrypt.genSalt(12, (error, salt) => {
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

        await user.save();

        res.status(200).json({ msg: `${hash}` });
      });
    });
  },
};

export default usersControllers;
