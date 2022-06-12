package br.com.testeMV.exception;

public class ProfissionalNotFoundException extends Exception {

	public ProfissionalNotFoundException(Long id) {
		super("Profissional não encontrado com o ID" + id);
	}

	public ProfissionalNotFoundException(String ids) {
		super("IDs de Profissionais não encontrados" + ids);
	}
}
