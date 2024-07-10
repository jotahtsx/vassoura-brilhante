package br.com.jotahdev.backend.core.repositories;

import br.com.jotahdev.backend.core.models.Service;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ServiceRepository extends JpaRepository<Service, Long> {
    
}
