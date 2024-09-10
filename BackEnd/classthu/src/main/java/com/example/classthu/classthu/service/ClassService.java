package com.example.classthu.classthu.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.classthu.classthu.Dao.ClassDao;
import com.example.classthu.classthu.model.Classes;

@Service
public class ClassService {

    @Autowired
    ClassDao classDao;

    public ResponseEntity<List<Classes>> getAllClasses() {
        try {
            return new ResponseEntity<>(classDao.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Optional<Classes>> getClassById(Integer id) {
        try {
            return new ResponseEntity<>(classDao.findById(id), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(Optional.empty(), HttpStatus.BAD_REQUEST);

    }

    public ResponseEntity<String> addClass(Classes dataclClasses) {
        try {
            classDao.save(dataclClasses);
            return new ResponseEntity<>("Success", HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("failure", HttpStatus.BAD_REQUEST);
    }
}
