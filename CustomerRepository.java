package com.tailorhub.tailorhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tailorhub.tailorhub.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}