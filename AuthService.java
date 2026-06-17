package com.tailorhub.tailorhub.service;

import com.tailorhub.tailorhub.dto.*;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
    
}

