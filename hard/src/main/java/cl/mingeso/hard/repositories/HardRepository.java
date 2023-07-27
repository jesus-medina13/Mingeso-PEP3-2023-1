package cl.mingeso.hard.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cl.mingeso.hard.entities.HardEntity;



@Repository
public interface HardRepository extends JpaRepository<HardEntity, Long>{    
}
