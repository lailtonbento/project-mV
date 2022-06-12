package br.com.testeMV.model;

import br.com.testeMV.model.dto.ProfissionalDTO;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
@Builder
public class Profissional {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "profissional_id")
	private Long id;

	private String nome;
	private String telefone;
	private String cargo;

	@Embedded
	private Endereco endereco;


	@ManyToMany
	@JoinTable(name = "profissional_hospital",
			joinColumns = {@JoinColumn(name = "profissional_id")},
			inverseJoinColumns = {@JoinColumn(name = "hospital_id")})
	public Set<Hospital> hospitais = new HashSet<>();

	public ProfissionalDTO toDTO() {
		return ProfissionalDTO.builder()
				.id(id)
				.nome(nome)
				.telefone(telefone)
				.cargo(cargo)
				.hospitais(hospitais)
				.endereco(endereco)
				.build();
	}
}
