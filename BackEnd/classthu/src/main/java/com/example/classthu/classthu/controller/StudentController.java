package com.example.classthu.classthu.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classthu.classthu.model.Classes;
import com.example.classthu.classthu.service.ClassService;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private ClassService classService;

    @GetMapping("allClasses")
    public List<Classes> getAllClasses() {
        return classService.getAllClasses();
    }

    @GetMapping("classById/{id}")
    public Optional<Classes> getClassById(@PathVariable Integer id) {
        return classService.getClassById(id);
    }

}
