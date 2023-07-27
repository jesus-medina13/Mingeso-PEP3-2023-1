package cl.mingeso.easy.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cl.mingeso.easy.entities.EasyEntity;

@Repository
public interface EasyRepository extends JpaRepository<EasyEntity, Long>{
}
