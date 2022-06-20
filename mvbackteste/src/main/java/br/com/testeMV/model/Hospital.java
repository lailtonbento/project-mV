package br.com.testeMV.model;

import br.com.testeMV.model.dto.HospitalDTO;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table
@Entity
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hospital_id")
	private Long id;

	private String nome;
	private String telefone;

	@Embedded
	private Endereco endereco;

	@ManyToMany(fetch = FetchType.EAGER)
	@With
	private Set<Profissional> profissionais = new HashSet<>();

	public HospitalDTO toDTO() {
		return HospitalDTO.builder()
				.id(id)
				.nome(nome)
				.telefone(telefone)
				.profissionais(profissionais)
				.rua(endereco.getRua())
				.numero(endereco.getNumero())
				.bairro(endereco.getBairro())
				.cidade(endereco.getCidade())
				.estado(endereco.getEstado())
				.build();
	}


}
