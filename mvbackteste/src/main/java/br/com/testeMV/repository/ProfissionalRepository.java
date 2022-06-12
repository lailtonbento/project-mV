package br.com.testeMV.repository;

import br.com.testeMV.model.Profissional;
import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfissionalRepository extends JpaRepository <Profissional, Long> {

	boolean existsById(Long id);

	boolean existsByIdIn(Collection<Long> ids);
}
