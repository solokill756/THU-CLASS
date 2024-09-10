package com.example.classthu.classthu.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.classthu.classthu.model.Classes;

@Repository
public interface ClassDao extends JpaRepository<Classes, Integer> {
}
