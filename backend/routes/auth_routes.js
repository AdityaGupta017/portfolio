//import express, express router as shown in lecture code

import { Router } from "express";

import user from "../data/users.js";

const router = Router();

router.route("/").get(async (req, res) => {
  //code here for GET THIS ROUTE SHOULD NEVER FIRE BECAUSE OF MIDDLEWARE #1 IN SPECS.
  console.log("here in this")
  try
  {
  return res.render({ error: "YOU SHOULD NOT BE HERE!" });
  }
  catch(e)
  {
    return res.json({error: "error in error"});
  }
});

router
  .route("/register")
  .get(async (req, res) => {

    console.log("here in register")
    //code here for GET

    res.render("register");
  })
  .post(async (req, res) => {
    //code here for POST
    try {
      const regData = req.body;

      const firstName = regData.firstNameInput;
      const lastName = regData.lastNameInput;
      const email = regData.emailAddressInput;
      const password = regData.passwordInput;
      const confirmPassword = regData.confirmPasswordInput;
      const role = regData.roleInput;

      if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
        return res.status(400).render('error', {error: "enter something"});
      }
      if (!helpers.validateEmail(email))
      {
        return res.status(400).render('error',{error:"wrong email format"})
      }

      if (typeof firstName !== "string" || typeof lastName !== "string") {
        return res.status(400).render('error',{ error: "bad data type" });
      }

      if (helpers.checkSymbols(firstName) || helpers.checkSymbols(lastName)) {
        return res.status(400).render('error',{ error: "No symbols in names" });
      }
      if (helpers.checkNumbers(firstName) || helpers.checkNumbers(lastName)) {
        return res.status(400).render('error',{ error: "no numbers in names" });
      }
      if (firstName.length < 2 || firstName.length > 25) {
        return res
          .status(400)
          .render('error',{ error: "First name length betwween 2 and 25" });
      }
      if (lastName.length < 2 || lastName.length > 25) {
        return res
          .status(400)
          .render('error',{ error: "Last Name length between 2 and 25" });
      }

      if (password.length < 8) {
        return res.status(400).render('register',{ errorPassword: "password length less than 8" });
      }

      if (!helpers.checkSymbols(password)) {
        return res
          .status(400)
          .render('register',{ errorPassword: "enter atleast one special character" });
      }

      if (!helpers.checkNumbers(password)) {
        return res.status(400).render('register',{ errorPassword: "Enter atleast one number" });
      }
      if (!helpers.checkLowerCase(password)) {
        return res.status(400).render('register',{ errorPassword: "Enter atleast one lower case" });
      }
      if (!helpers.checkUpperCase(password)) {
        return res.status(400).render('register',{ errorPassword: "Enter atleast one uppercase" });
      }

      if (helpers.checkBlankChars(password)) {
        return res.status(400).render('register',{ errorPassword: "blank in password" });
      }

      if (password !== confirmPassword) {
        return res.status(400).render('register',{ errorPassword: "password did not match" });
      }

      if (!role) {
        return res.status(400).render('error',{ error: "enter role" });
      }



      const createReg = await user.createUser(
        firstName,
        lastName,
        email,
        password,
        role
      );

      
      if (createReg.insertedUser === true) {
        res.render("login");
      }
      else if (createReg.insertedUser === false)
      {
        res.render('error',{error: "user already exists"} )
      }
    
      else {
        return res.status(500).render('register',{ firstName: firstName, lastName: lastName , email: email, role:role });
      }
    } catch (e) {
     
      res.status(400).render('error', { error: e });
    }
  });

router
  .route("/login")
  .get(async (req, res) => {
    //code here for GET
    res.render("login", {});
  })
  .post(async (req, res) => {
    //code here for POST

    try {
      const loginData = req.body;

      const email = loginData.emailAddressInput.toLowerCase();
      const password = loginData.passwordInput;

      



      if (!email || !password) {
        return res.status(400).render('error',{ error: "enter email or password" });
      }
      if (!helpers.validateEmail(email))
      {
        return res.status(400).render('login',{error:"wrong email format"})
      }

      const authUser = await user.checkUser(email, password);

      if (!authUser)
      {
        return res.status(400).render('login', {error: 'either password or email is wrong'})
      }
      const authUserobj = authUser[0];


      req.session.user = authUserobj
      
      
      

      if (authUserobj.role === "user") {
        res.redirect("/protected");
      }
      if (authUserobj.role === "admin") {
        res.redirect("/admin");
      }

   
    } catch (e) {
      
      return res.status(400).render('error',{ error: e });
    }
  });

router.route("/protected").get(async (req, res) => {
  //code here for GET

  try 
  {
    if (req.session.user.role === 'user' || req.session.user.role === 'admin')
    {
  const date = new Date();
  res.render("protected", { userData: req.session.user, currentTime: date });
    }
  }
  catch (e)
  {
    console.log(e);
  }
});

router.route("/admin").get(async (req, res) => {
  //code here for GET
  try
  {
    if (req.session.user.role === 'admin')
    {
  const date = new Date();
  res.render("admin", { userData: req.session.user, currentTime: date });
  }
  
}
  catch (e)
  {
    return res.status(400).render('error', {"error": "Can't get access to admin"});
  }
});

router.route("/error").get(async (req, res) => {
  //code here for GET
  res.render('error');
});

router.route("/logout").get(async (req, res) => {
  //code here for GET
  req.session.destroy();
  // res.send('Logged out');
 
  res.render('logout');
 
});

export default router;
