import SingleEvent from '@/components/Event';
import Events from '@/data/events';

export default function Event() {
  return (
    <div id="it-event" className="it-event-2-area p-relative pt-90 pb-90">
      <div className="container">
        <div className="it-event-2-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-12">
              <div className="it-event-2-title-box text-center">
                <span className="it-section-subtitle-2">Our Events</span>
                <h2 className="it-section-title-3">Upcoming Events</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {Events.map((event) => {
            return (
              <div key={event.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <SingleEvent
                  Slug={event.slug}
                  Title={event.title}
                  Img={event.image}
                  Description={event.description}
                  eventDate={event.eventDate}
                  eventMonth={event.eventMonth}
                  eventLocation={event.location}
                  eventTime={event.eventTime}
                />
              </div>
            );
          }).slice(3, 6)}
        </div>
      </div>
    </div>
  );
}
