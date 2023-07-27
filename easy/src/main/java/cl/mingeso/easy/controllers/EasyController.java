package cl.mingeso.easy.controllers;


import org.springframework.web.bind.annotation.RestController;
import cl.mingeso.easy.services.EasyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import cl.mingeso.easy.entities.EasyEntity;
import java.util.List;

@RestController
@RequestMapping("/easy")
public class EasyController {
    @Autowired
    EasyService easyService;

    @GetMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<EasyEntity>> getQuestions(){
        List<EasyEntity> questions = easyService.getQuestions();
        return ResponseEntity.ok(questions);
    }

    @PostMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<EasyEntity> createQuestion(EasyEntity question){
        EasyEntity newQuestion = easyService.createQuestion(question);
        return ResponseEntity.ok(newQuestion);
    }
}