package cl.mingeso.medium.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import cl.mingeso.medium.services.MediumService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import cl.mingeso.medium.entities.MediumEntity;
import java.util.List;


@RestController
@RequestMapping("/medium")
public class MediumController {
    @Autowired
    MediumService mediumService;

    @GetMapping
    public ResponseEntity<List<MediumEntity>> getQuestions(){
        List<MediumEntity> questions = mediumService.getQuestions();
        return ResponseEntity.ok(questions);
    }

    @PostMapping
    public ResponseEntity<MediumEntity> createQuestion(MediumEntity question){
        MediumEntity newQuestion = mediumService.createQuestion(question);
        return ResponseEntity.ok(newQuestion);
    }
}
