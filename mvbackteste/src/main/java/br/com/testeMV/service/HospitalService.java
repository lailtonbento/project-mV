package br.com.testeMV.service;

import br.com.testeMV.exception.HospitalNotFoundException;
import br.com.testeMV.model.Hospital;
import br.com.testeMV.model.Profissional;
import br.com.testeMV.model.dto.HospitalDTO;
import br.com.testeMV.repository.HospitalRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.hibernate.validator.constraints.ModCheck;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HospitalService {

	private final HospitalRepository hospitalRepository;
	private final ProfissionalService profissionalService;

	public Page<HospitalDTO> findAll(Pageable pageable) {
		return hospitalRepository.findAll(pageable).map(Hospital::toDTO);
	}

	public HospitalDTO create(HospitalDTO hospitalDTO) {
//		Hospital hospital = hospitalRepository.save(hospitalDTO.toEntity());
//		hospital.setProfissionais(profissionalService.findAllById(hospitalDTO.profissionais.stream().map(Profissional::getId).collect(Collectors.toSet())));
//		return hospital.toDTO();

		return hospitalRepository.save(hospitalDTO.toEntity())
				.withProfissionais(profissionalService.findAllById(hospitalDTO.profissionais
						.stream()
						.map(Profissional::getId)
						.collect(Collectors.toSet()))).toDTO();

//		Hospital hospital = hospitalRepository.save(hospitalDTO.toEntity());
//		List<Long> ids = new ArrayList<>();
//		for (Profissional profissional : hospitalDTO.profissionais){
//			ids.add(profissional.getId());
//		}
//		Set<Profissional> profissionais = profissionalService.findAllById(ids);
//		hospital.setProfissionais(profissionais);
//		return hospital.toDTO();
	}

	@SneakyThrows
	public HospitalDTO findById(Long id) {
		return hospitalRepository
				.findById(id)
				.orElseThrow(() -> new HospitalNotFoundException(id))
				.toDTO();
	}

	public HospitalDTO update(Long id, HospitalDTO hospitalDTO) {
		existsById(id);
		hospitalDTO.id = id;
		return hospitalRepository.save(hospitalDTO.toEntity()).toDTO();
	}

	public void deleteById(Long id) {
		existsById(id);
		hospitalRepository.deleteById(id);
	}

	@SneakyThrows
	private void existsById(Long id) {
		if (!hospitalRepository.existsById(id)) {
			throw new HospitalNotFoundException(id);
		}
	}

	@SneakyThrows
	private void existsByIds(Long[] ids) {
		if (!hospitalRepository.existsByIdIn(Arrays.stream(ids).collect(Collectors.toList()))) {
			throw new HospitalNotFoundException(Arrays.stream(ids).map(String::valueOf).collect(Collectors.joining(", ")));
		}
	}


	public void deleteByIds(Long[] ids) {
		existsByIds(ids);
		hospitalRepository.deleteAllById(Arrays.stream(ids).collect(Collectors.toList()));
	}
}
