package br.com.testeMV.service;

import br.com.testeMV.exception.HospitalNotFoundException;
import br.com.testeMV.exception.ProfissionalNotFoundException;
import br.com.testeMV.model.Profissional;
import br.com.testeMV.model.dto.ProfissionalDTO;
import br.com.testeMV.repository.ProfissionalRepository;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfissionalService {

	private final ProfissionalRepository profissionalRepository;

	public Page<ProfissionalDTO> findAll(Pageable pageable) {
		return profissionalRepository.findAll(pageable).map(Profissional::toDTO);
	}

	public ProfissionalDTO create(ProfissionalDTO profissionalDTO) {
		return profissionalRepository.save(profissionalDTO.toEntity()).toDTO();
	}

	public Set<Profissional> findAllById (Collection<Long> ids){
		return new HashSet<>(profissionalRepository.findAllById(ids));
	}

	@SneakyThrows
	public ProfissionalDTO findById(Long id) {
		return profissionalRepository
				.findById(id)
				.orElseThrow(() -> new HospitalNotFoundException(id))
				.toDTO();
	}

	public ProfissionalDTO update(Long id, ProfissionalDTO profissionalDTO) {
		existsById(id);
		profissionalDTO.id = id;
		return profissionalRepository.save(profissionalDTO.toEntity()).toDTO();
	}

	public void deleteById(Long id) {
		existsById(id);
		profissionalRepository.deleteById(id);
	}

	@SneakyThrows
	private void existsById(Long id) {
		if (!profissionalRepository.existsById(id)) {
			throw new ProfissionalNotFoundException(id);
		}
	}

	@SneakyThrows
	private void existsByIds(Long[] ids) {
		if (!profissionalRepository.existsByIdIn(Arrays.stream(ids).collect(Collectors.toList()))) {
			throw new ProfissionalNotFoundException(Arrays.stream(ids).map(String::valueOf).collect(Collectors.joining(", ")));
		}
	}


	public void deleteByIds(Long[] ids) {
		existsByIds(ids);
		profissionalRepository.deleteAllById(Arrays.stream(ids).collect(Collectors.toList()));
	}
}
