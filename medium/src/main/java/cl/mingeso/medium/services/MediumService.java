package cl.mingeso.medium.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.mingeso.medium.repositories.MediumRepository;
import cl.mingeso.medium.entities.MediumEntity;

import java.util.List;

@Service
public class MediumService {
    @Autowired
    private MediumRepository mediumRepository;

    public List<MediumEntity> getQuestions(){
        return mediumRepository.findAll();
    }

    public MediumEntity createQuestion(MediumEntity question){
        return mediumRepository.save(question);
    }
}
