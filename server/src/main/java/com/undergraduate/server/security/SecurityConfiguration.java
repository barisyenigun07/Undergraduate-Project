package com.undergraduate.server.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    private JwtAuthenticationEntryPoint authenticationEntryPoint;
    private UserDetailsService userDetailsService;
    private JwtFilter jwtFilter;

    public SecurityConfiguration(JwtAuthenticationEntryPoint authenticationEntryPoint, UserDetailsService userDetailsService, JwtFilter jwtFilter){
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.userDetailsService = userDetailsService;
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/register").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers(HttpMethod.GET,"/house-advert/**","/housemate-searching-advert/**","/housemate-wanting-advert/**","/belongings-advert/**","/user/**").permitAll()
                .antMatchers(HttpMethod.POST,"/house-advert/**").hasAnyAuthority("HOUSE_OWNER")
                .antMatchers(HttpMethod.PUT, "/house-advert/**").hasAnyAuthority("HOUSE_OWNER")
                .antMatchers(HttpMethod.DELETE, "/house-advert/**").hasAnyAuthority("HOUSE_OWNER")
                .antMatchers(HttpMethod.POST,"/housemate-searching-advert/**","/housemate-wanting-advert/**","/belongings-advert/**").hasAnyAuthority("STUDENT")
                .antMatchers(HttpMethod.PUT,"/housemate-searching-advert/**","/housemate-wanting-advert/**","/belongings-advert/**").hasAnyAuthority("STUDENT")
                .antMatchers(HttpMethod.DELETE,"/housemate-searching-advert/**","/housemate-wanting-advert/**","/belongings-advert/**").hasAnyAuthority("STUDENT")
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

    }
}
