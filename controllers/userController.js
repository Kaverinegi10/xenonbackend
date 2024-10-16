import userModel from "../model/userModel.js";
import { compare,hash } from "bcrypt";
export const userLogin = async (req, res, next) => {
  console.log("ok");
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user && user==null) {
    res.status(401).send("user not registered");
  }
  const isPassCorrect = await compare(password, user.password);

  if (!isPassCorrect) {
    return res.status(403).json("incorrect password");
  }

  res.send({ message: "loginsuccess", name: user.name, email: user.email });
};

export const userSignup = async (req, res, next) => {
  try {
    console.log("signup");
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(401).send("user already exists");
    const hashedPass = await hash(password, 10);
    const user = new userModel({ name, email, password: hashedPass });
    await user.save();
    console.log("saved");
    return res.json({ message: "user created" });
  } catch (error) {
    console.log(error);
  }
};


export const userLogout = async (req, res, next) => {
  try {
    //user token checking
    const user = await usersModel.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      signed: true,
      // domain:"cheat-chat-production.up.railway.app",
    });

    return res
      .status(200)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

