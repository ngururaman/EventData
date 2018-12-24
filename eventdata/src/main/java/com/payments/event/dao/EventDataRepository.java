package com.payments.event.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.payments.event.model.EventData;

public interface EventDataRepository extends CrudRepository<EventData, Integer> {

	public static final String FIND_EVENTS = "SELECT id,event_date, event_type,event_size, event_summary, '' as event_details  FROM EventData where event_date BETWEEN ?1 AND ?2";

	@Query(value = FIND_EVENTS, nativeQuery = true)
	public List<EventData> findEvents(String startDate, String endDate);
}
