package com.example.classthu.classthu.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.classthu.classthu.Dao.ClassDao;
import com.example.classthu.classthu.model.Classes;

@Service
public class ClassService {

    @Autowired
    ClassDao classDao;

    public List<Classes> getAllClasses() {
        return classDao.findAll();
    }

    public Optional<Classes> getClassById(Integer id) {
        return classDao.findById(id);
    }
}
