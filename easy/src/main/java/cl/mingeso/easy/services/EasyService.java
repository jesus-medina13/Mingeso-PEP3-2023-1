package cl.mingeso.easy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.mingeso.easy.repositories.EasyRepository;
import cl.mingeso.easy.entities.EasyEntity;

import java.util.List;

@Service
public class EasyService {
    @Autowired
    private EasyRepository easyRepository;

    public List<EasyEntity> getQuestions(){
        return easyRepository.findAll();
    }

    public EasyEntity createQuestion(EasyEntity question){
        return easyRepository.save(question);
    }
}
