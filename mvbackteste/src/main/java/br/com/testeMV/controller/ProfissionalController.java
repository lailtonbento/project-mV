package br.com.testeMV.controller;


import br.com.testeMV.model.dto.ProfissionalDTO;
import br.com.testeMV.service.ProfissionalService;
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
@RequestMapping("api/v1/profissionais")
public class ProfissionalController {

	private final ProfissionalService profissionalService;


	@GetMapping
	public ResponseEntity<Page<ProfissionalDTO>> findAllPageable(
			@PageableDefault(page = 0, sort = {"nome"}) Pageable pageable) {
		return ResponseEntity.ok(profissionalService.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProfissionalDTO> findById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(profissionalService.findById(id));
	}

	@PutMapping("/{id}")
	public ProfissionalDTO update(@PathVariable Long id, @Valid @RequestBody ProfissionalDTO profissionalDTO) {
		return profissionalService.update(id, profissionalDTO);
	}

	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public ProfissionalDTO save(@Valid @RequestBody ProfissionalDTO profissionalDTO) {
		return profissionalService.create(profissionalDTO);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Long id) {
		profissionalService.deleteById(id);
	}

	@DeleteMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteByIds(@RequestParam Long[] ids) {
		profissionalService.deleteByIds(ids);
	}
}