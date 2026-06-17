package com.tailorhub.tailorhub.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tailorhub.tailorhub.dto.AuthResponse;
import com.tailorhub.tailorhub.dto.LoginRequest;
import com.tailorhub.tailorhub.dto.LoginResponse;
import com.tailorhub.tailorhub.dto.RegisterRequest;
import com.tailorhub.tailorhub.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request) {

        return ResponseEntity.ok(
                authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request) {

        return ResponseEntity.ok(
                authService.login(request));
    }
}