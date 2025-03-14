import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const recentActivity = [
    {
      icon: "📝",
      title: "New meeting minutes posted",
      time: "2 hours ago",
      bgColor: "rgba(255, 182, 182, 0.2)"
    },
    {
      icon: "💰",
      title: "Monthly dues collected",
      time: "5 hours ago",
      bgColor: "rgba(183, 255, 182, 0.2)"
    },
    {
      icon: "🎉",
      title: "New event announced",
      time: "1 day ago",
      bgColor: "rgba(255, 223, 182, 0.2)"
    }
  ];

  const upcomingEvents = [
    {
      date: 15,
      month: "March",
      title: "Monthly General Meeting",
      time: "10:00 AM",
      location: "Main Hall"
    },
    {
      date: 22,
      month: "March",
      title: "Community Fundraiser",
      time: "2:00 PM",
      location: "Community Center"
    },
    {
      date: 28,
      month: "March",
      title: "Executive Board Meeting",
      time: "4:00 PM",
      location: "Conference Room"
    }
  ];

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatMonth = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
  };

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Generate calendar grid
  const generateCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const today = new Date();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        today.getDate() === day && 
        today.getMonth() === currentDate.getMonth() && 
        today.getFullYear() === currentDate.getFullYear();

      const hasEvent = upcomingEvents.some(event => event.date === day);

      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}`}
        >
          <span className="day-number">{day}</span>
          {hasEvent && <div className="event-indicator"></div>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-page">
      <div className="calendar-layout">
        <div className="calendar-section">
          <div className="calendar-header">
            <h2>Calendar</h2>
            <div className="calendar-controls">
              <button className="calendar-btn" onClick={goToToday}>Today</button>
              <div className="calendar-nav">
                <button className="calendar-nav-btn" onClick={goToPreviousMonth}>◀</button>
                <h3>{formatMonth(currentDate)}</h3>
                <button className="calendar-nav-btn" onClick={goToNextMonth}>▶</button>
              </div>
            </div>
          </div>
          <div className="calendar-body">
            <div className="calendar-grid-container">
              <div className="calendar-weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              <div className="calendar-days">
                {generateCalendarGrid()}
              </div>
            </div>
          </div>
        </div>
        
        <div className="events-dashboard">
          <div className="events-column">
            <div className="activity-section">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon" style={{ backgroundColor: activity.bgColor }}>
                      {activity.icon}
                    </div>
                    <div className="activity-details">
                      <p className="activity-title">{activity.title}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="events-column">
            <div className="events-section">
              <h3>Upcoming Events</h3>
              <div className="events-list">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="event-item">
                    <div className="event-date">
                      <span className="event-day">{event.date}</span>
                      <span className="event-month">{event.month}</span>
                    </div>
                    <div className="event-details">
                      <h4>{event.title}</h4>
                      <p>{event.time} - {event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar; 