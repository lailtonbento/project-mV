package br.com.testeMV.model;

import lombok.*;

import javax.persistence.Embeddable;

@Setter
@Getter
@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Endereco {

    private String rua;
    private String numero;
    private String bairro;
    private String cidade;
    private String estado;
}
