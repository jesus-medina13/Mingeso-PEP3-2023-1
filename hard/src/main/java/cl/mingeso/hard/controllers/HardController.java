package cl.mingeso.hard.controllers;

import cl.mingeso.hard.entities.HardEntity;
import cl.mingeso.hard.services.HardService;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/hard")
public class HardController {
    @Autowired
    HardService hardService;

    @GetMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<HardEntity>> getQuestions(){
        List<HardEntity> questions = hardService.getQuestions();
        return ResponseEntity.ok(questions);
    }

    @PostMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<HardEntity> createQuestion(HardEntity question){
        HardEntity newQuestion = hardService.createQuestion(question);
        return ResponseEntity.ok(newQuestion);
    }
}
