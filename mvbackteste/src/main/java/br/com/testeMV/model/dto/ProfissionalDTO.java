package br.com.testeMV.model.dto;

import br.com.testeMV.model.Endereco;
import br.com.testeMV.model.Hospital;
import br.com.testeMV.model.Profissional;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@Builder
@Getter
@Setter
@NoArgsConstructor
public class ProfissionalDTO {

	public Long id;

	@NotNull(message = "nome não pode estar nulo")
	private String nome;
	@NotNull(message = "telefone não pode estar nulo")
	private String telefone;
	@NotNull(message = "cargo não pode estar nulo")
	private String cargo;
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

	public Set<Hospital> hospitais = new HashSet<>();

	public Profissional toEntity() {
		return Profissional.builder()
				.id(id)
				.nome(nome)
				.telefone(telefone)
				.cargo(cargo)
				.hospitais(hospitais)
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
