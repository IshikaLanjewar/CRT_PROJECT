package com.tailorhub.tailorhub.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

    @ManyToOne
    @JoinColumn(name = "tailor_id")
    private User tailor;

    @Column(name = "customer_name")
    private String customerName;

    private String mobile;

    private String email;

    private String address;

    private String notes;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}