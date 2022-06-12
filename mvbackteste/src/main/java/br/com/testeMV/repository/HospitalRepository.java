package br.com.testeMV.repository;

import br.com.testeMV.model.Hospital;
import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {

	boolean existsById(Long id);

	boolean existsByIdIn(Collection<Long> ids);
}
