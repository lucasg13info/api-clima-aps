// anexar aps BACKEND


package com.climatempo.demo.resource;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 * Controller que lista os dados
 * 
 */
@RestController
// uma base da nossa api -> só o path
@RequestMapping(value = "/api")
public class IndexController {
    private RestTemplate restTemplate = new RestTemplate();
    private String baseURL = "https://api.hgbrasil.com/weather?woeid=";
    private String key = "&key=bd1a5133";

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findData(@PathVariable(value = "id") String id) {
        String url = this.baseURL + id + this.key;
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("user-agent",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        ResponseEntity<ObjectClima> res = this.restTemplate.exchange(url, HttpMethod.GET, entity, ObjectClima.class);
        return new ResponseEntity<>(res.getBody(), HttpStatus.OK);
    }
}
