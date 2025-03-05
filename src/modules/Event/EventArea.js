import SingleEvent from '@/components/Event';
import Events from '@/data/events';

export default function EventArea() {
  return (
    <div className="it-event-2-area it-event-style-3 p-relative pt-90 pb-90">
      <div className="container">
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
          }).slice(0, 6)}
        </div>
      </div>
    </div>
  );
}
