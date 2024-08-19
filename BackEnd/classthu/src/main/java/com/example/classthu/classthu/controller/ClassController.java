package com.example.classthu.classthu.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classthu.classthu.model.Classes;
import com.example.classthu.classthu.service.ClassService;

@RestController
@RequestMapping("/class")
public class ClassController {

    @Autowired
    private ClassService classService;

    @GetMapping("allClasses")
    public ResponseEntity<List<Classes>> getAllClasses() {
        return classService.getAllClasses();
    }

    @GetMapping("classById/{id}")
    public ResponseEntity<Optional<Classes>> getClassById(@PathVariable Integer id) {
        return classService.getClassById(id);
    }

    @PostMapping("add")
    public ResponseEntity<String> addClass(@RequestBody Classes dataClasses) {
        return classService.addClass(dataClasses);
    }

}
