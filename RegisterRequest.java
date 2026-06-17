package com.tailorhub.tailorhub.dto;

import com.tailorhub.tailorhub.enums.Role;

import lombok.Data;

@Data
public class RegisterRequest {

    private String fullName;
    private String email;
    private String password;
    private String phone;
    private Role role;
}