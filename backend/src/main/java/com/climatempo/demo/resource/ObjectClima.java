package com.climatempo.demo.resource;

import java.io.Serializable;

import com.fasterxml.jackson.databind.JsonNode;


public class ObjectClima implements Serializable {
    //Variavel do tipo JsonNode que recebe o objeto de resposta
    private JsonNode results;

    //Só tem um método rsrs
    public JsonNode getResults() {
        //so retorna o objeto
        return this.results;
    }
}