package com.example.classthu.classthu.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.classthu.classthu.model.UserModel;

@Repository
public interface UserDao extends JpaRepository<UserModel, Long> {

    UserModel findByEmail(String email);
}
