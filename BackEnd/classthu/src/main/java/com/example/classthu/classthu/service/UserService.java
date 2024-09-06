package com.example.classthu.classthu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.classthu.classthu.Dao.UserDao;
import com.example.classthu.classthu.model.UserModel;
import com.example.classthu.classthu.model.UserPrincipal;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        UserModel user = userDao.findByEmail(email);

        if (user == null) {
            System.out.println("Can't find user");
            throw new UsernameNotFoundException("can't find user");
        } else {
            return new UserPrincipal(user);
        }
    }

}
