package cl.mingeso.hard.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.mingeso.hard.repositories.HardRepository;
import cl.mingeso.hard.entities.HardEntity;

import java.util.List;

@Service
public class HardService {
    @Autowired
    private HardRepository hardRepository;

    public List<HardEntity> getQuestions(){
        return hardRepository.findAll();
    }

    public HardEntity createQuestion(HardEntity question){
        return hardRepository.save(question);
    }
}
