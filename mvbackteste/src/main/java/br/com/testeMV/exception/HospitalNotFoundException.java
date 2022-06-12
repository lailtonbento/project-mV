package br.com.testeMV.exception;

public class HospitalNotFoundException extends Exception{

	public HospitalNotFoundException(Long id) {
		super("Hospital não encontrado com o ID" + id);
	}

	public HospitalNotFoundException(String ids) {
		super("IDs de Hospitais não encontrados" + ids);
	}
}
