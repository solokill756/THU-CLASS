package com.example.classthu.classthu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.classthu.classthu.Dao.UserDao;
import com.example.classthu.classthu.model.UserModel;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JWTService jWTService;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    public ResponseEntity<String> signUp(UserModel userModel) {
        userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));
        try {
            userDao.save(userModel);
            return new ResponseEntity<>(jWTService.getToken(userModel.getEmail()), HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("error", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> verifyLogin(UserModel userModel) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userModel.getEmail(), userModel.getPassword()));
        if (authentication.isAuthenticated()) {
            return new ResponseEntity<>(jWTService.getToken(userModel.getEmail()), HttpStatus.OK);
        }
        return new ResponseEntity<>("error", HttpStatus.BAD_REQUEST);
    }
}
