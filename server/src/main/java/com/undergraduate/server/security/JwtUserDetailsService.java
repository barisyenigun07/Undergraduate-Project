package com.undergraduate.server.security;

import com.undergraduate.server.entity.Role;
import com.undergraduate.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public JwtUserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<com.undergraduate.server.entity.User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()){
            com.undergraduate.server.entity.User user = optionalUser.get();
            Role role = user.getRole();
            List<SimpleGrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(role.getName()));
            return new User(username,user.getPassword(), authorities);
        }
        else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        
    }
}
