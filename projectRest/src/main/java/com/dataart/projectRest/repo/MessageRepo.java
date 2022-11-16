package com.dataart.projectRest.repo;

import com.dataart.projectRest.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Long> {

}
