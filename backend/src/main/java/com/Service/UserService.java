package com.Service;

import com.Model.user;
import com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<user> findAll() {
        return userRepository.findAll();
    }

    public Optional<user> findById(Long id) {
        return userRepository.findById(id);
    }

    public user save(user user) {
        // Remove password encoding for now
        // user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    public user findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
