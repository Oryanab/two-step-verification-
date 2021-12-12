import express from "express";
import cors from "cors";
import { User } from "./types";
import bycrypt from "bcrypt";
import twofactor from "node-2fa";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000;

/*
    get database
*/
function returnDataBase() {
  let dataBase = fs.readFileSync(path.resolve(__dirname, "../db.json"));
  let dataBaseJson = JSON.parse(dataBase.toString());
  return dataBaseJson;
}

/*
      save database
  */
function saveDataBase(dataBaseJson: User[]) {
  fs.writeFileSync("db.json", Buffer.from(JSON.stringify(dataBaseJson)));
}

function isUser(user: User): user is User {
  return <User>user !== undefined;
}

app.post("/sign-up", async (_req, res) => {
  let encryptedPassword = await bycrypt.hash(_req.body.password, 10);
  const newUser = {
    id: uuidv4(),
    email: _req.body.email,
    password: encryptedPassword,
    twoFactorAuth: _req.body.twoFactorAuth,
  };
  if (isUser(newUser)) {
    let database = returnDataBase();
    database.push(newUser);
    saveDataBase(database);
    res
      .status(200)
      .json({ status: "success", twoFactorAuth: newUser.twoFactorAuth });
  } else {
    res.status(403).json({ status: "Users Info invalid Error" });
  }
});

app.post("/login", (_req, res) => {
  const CurrentUser: User = returnDataBase().find(
    (user: User) => user.email === _req.body.email
  );
  if (CurrentUser) {
    bycrypt
      .compare(_req.body.password, CurrentUser.password)
      .then((success) => {
        if (CurrentUser.twoFactorAuth === true) {
          const newSecret = twofactor.generateSecret({
            name: "amazing app",
            account: CurrentUser.id,
          });
          console.log(newSecret);

          addNewUserWithAuth({ ...newSecret, ...CurrentUser });
          res.status(200).json({
            status: "success",
            qr: newSecret.qr,
            uri: newSecret.uri,
          });
        } else {
          res.status(200).json({
            status: "success",
            twoFactorAuth: CurrentUser.twoFactorAuth,
          });
        }
      })
      .catch((err) => {
        res.status(403).json({
          status: "Wrong Password",
        });
      });
  } else {
    res.status(403).json({
      status: "Please Sign Up",
    });
  }
});

const addNewUserWithAuth = (newUser: User) => {
  const user = {
    id: newUser.id,
    email: newUser.email,
    password: newUser.password,
    twoFactorAuth: newUser.twoFactorAuth,
    secret: newUser.secret,
    uri: newUser.uri,
    qr: newUser.qr,
  };
  if (isUser(user)) {
    let database = returnDataBase();
    const newDatabase = database.filter((user: User) => user.id !== newUser.id);
    newDatabase.push(user);
    saveDataBase(newDatabase);
  }
};

// const removeUser = (id: string) => {
//   fetch(`http://localhost:5000/users/${id}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then(() => {
//       return true;
//     })
//     .catch((err) => {
//       return false;
//     });
// };

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
