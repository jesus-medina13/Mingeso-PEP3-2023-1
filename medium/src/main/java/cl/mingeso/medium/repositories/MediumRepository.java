package cl.mingeso.medium.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cl.mingeso.medium.entities.MediumEntity;

@Repository
public interface MediumRepository extends JpaRepository<MediumEntity, Long>{
    
}
