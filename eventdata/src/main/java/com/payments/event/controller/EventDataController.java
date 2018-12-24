package com.payments.event.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.payments.event.dao.EventDataRepository;
import com.payments.event.model.EventData;

@RestController
public class EventDataController {

	@Autowired
	EventDataRepository rep;

	@GetMapping(path = "events/eventsData/{eventStartDate}/{eventEndDate}", produces = { "application/xml",
			"application/json" })
	@ResponseBody
	public List<EventData> getEvents(@PathVariable("eventStartDate") String eventStartDate,
			@PathVariable("eventEndDate") String eventEndDate) {
		List<EventData> EventDetails = (List<EventData>) rep.findEvents(eventStartDate, eventEndDate);
		return EventDetails;
	}

	@GetMapping(path = "events/eventDetails/{id}", produces = { "application/xml", "application/json" })
	@ResponseBody
	public Optional<EventData> getEventDetails(@PathVariable("id") int id) {
		Optional<EventData> EventDetails = (Optional<EventData>) rep.findById(id);
		return EventDetails;
	}

}
