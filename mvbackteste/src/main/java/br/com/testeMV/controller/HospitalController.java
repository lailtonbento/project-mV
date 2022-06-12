package br.com.testeMV.controller;


import br.com.testeMV.model.dto.HospitalDTO;
import br.com.testeMV.service.HospitalService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("api/v1/hospitais")
public class HospitalController {

	private final HospitalService hospitalService;

	@GetMapping
	public ResponseEntity<Page<HospitalDTO>> findAllPageable(
			@PageableDefault(page = 0, sort = {"nome"}) Pageable pageable) {
		return ResponseEntity.ok(hospitalService.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<HospitalDTO> findById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(hospitalService.findById(id));
	}

	@PutMapping("/{id}")
	public HospitalDTO update(@PathVariable Long id, @Valid @RequestBody HospitalDTO hospitalDTO) {
		return hospitalService.update(id, hospitalDTO);
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public HospitalDTO save(@Valid @RequestBody HospitalDTO hospitalDTO) {
		return hospitalService.create(hospitalDTO);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Long id) {
		hospitalService.deleteById(id);
	}

	@DeleteMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteByIds(@RequestParam Long[] ids) {
		hospitalService.deleteByIds(ids);
	}
}
