package com.example.classthu.classthu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.classthu.classthu.model.UserModel;
import com.example.classthu.classthu.service.UserService;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("SignUp")
    public ResponseEntity<String> signUp(@RequestBody UserModel userModel) {
        //TODO: process POST request
        return userService.signUp(userModel);
    }

    @PostMapping("Login")
    public ResponseEntity<String> login(@RequestBody UserModel userModel) {
        return userService.verifyLogin(userModel);
    }

}
