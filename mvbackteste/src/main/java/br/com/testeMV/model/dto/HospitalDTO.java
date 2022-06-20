package br.com.testeMV.model.dto;

import br.com.testeMV.model.Endereco;
import br.com.testeMV.model.Hospital;
import javax.validation.constraints.NotNull;

import br.com.testeMV.model.Profissional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class HospitalDTO {

	public Long id;

	@NotNull(message = "nome não pode estar nulo")
	private String nome;
	@NotNull(message = "telefone não pode estar nulo")
	private String telefone;
	@NotNull(message = "rua não pode estar nulo")
	private String rua;
	@NotNull(message = "numero não pode estar nulo")
	private String numero;
	@NotNull(message = "bairro não pode estar nulo")
	private String bairro;
	@NotNull(message = "cidade não pode estar nulo")
	private String cidade;
	@NotNull(message = "estado não pode estar nulo")
	private String estado;

	public Set<Profissional> profissionais = new HashSet<>();

	public Hospital toEntity() {
		return Hospital.builder()
				.id(id)
				.nome(nome)
				.telefone(telefone)
				.profissionais(profissionais)
				.endereco(Endereco.builder()
						.rua(rua)
						.numero(numero)
						.bairro(bairro)
						.cidade(cidade)
						.estado(estado)
						.build())
				.build();
	}
}
