package com.payments.event.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "eventdata")
public class EventData {
	@Id
	private int id;
	private Date eventDate;
	private String eventType;
	private String eventSummary;
	private String eventSize;
	private String eventDetails;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getEventDate() {
		return eventDate;
	}

	public void setEventDate(Date eventDate) throws ParseException {
		this.eventDate = formatDate(eventDate);
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public String getEventSummary() {
		return eventSummary;
	}

	public void setEventSummary(String eventSummary) {
		this.eventSummary = eventSummary;
	}

	public String getEventSize() {
		return eventSize;
	}

	public void setEventSize(String eventSize) {
		this.eventSize = eventSize;
	}

	public String getEventDetails() {
		return eventDetails;
	}

	public void setEventDetails(String eventDetails) {
		this.eventDetails = eventDetails;
	}

	private Date formatDate(Date date) throws ParseException {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		return formatter.parse(formatter.format(date));
	}
}
