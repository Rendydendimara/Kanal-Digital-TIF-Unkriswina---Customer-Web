import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Image from 'next/image';
import SingleProgress from '@/components/Progress';

const progresses = [
  { id: 1, progressLabel: 'Case study success', progress: '90' },
  { id: 2, progressLabel: 'Happy student', progress: '82' },
  { id: 3, progressLabel: 'Engaging', progress: '75' },
  { id: 4, progressLabel: 'Student Community', progress: '98' },
];

export default function ValueArea() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="it-value-area pt-120 pb-120 p-relative fix">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="FdrNFEbcsRs"
        onClose={() => {
          openModal();
        }}
      />
      <div className="it-value-shape-1 d-none d-xxl-block">
        <Image
          src="/img/value/value-shape-3.jpg"
          width={176}
          height={168}
          alt=""
        />
      </div>
      <div className="it-value-shape-2 d-none d-xl-block">
        <Image
          src="/img/value/value-shape-4.jpg"
          width={778}
          height={392}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-value-title-box">
              <span className="it-section-subtitle-3">
                <Image src="/img/about/bg.svg" width={23} height={17} alt="" />{' '}
                Top Popular Course
              </span>
              <h4 className="it-section-title-3 pb-25">
                Our Classroom is a very deferent <span>school</span> than all{' '}
                <br /> the others
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore.
              </p>
            </div>

            <div className="it-progress-bar-wrap">
              {progresses.map((item) => (
                <div key={item.id} className="it-progress-bar-item">
                  <label>{item.progressLabel}</label>
                  <SingleProgress progress={item.progress} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-value-right-wrap text-end p-relative">
              <div className="it-value-right-img p-relative">
                <Image
                  src="/img/value/value-1.jpg"
                  width={588}
                  height={689}
                  alt=""
                  style={{ height: 'auto' }}
                />
                <button
                  className="it-value-play-btn"
                  onClick={() => {
                    openModal();
                  }}
                >
                  <i className="fa-sharp fa-solid fa-play"></i>
                </button>
              </div>
              <div className="it-value-img-shape d-none d-xl-block">
                <Image
                  src="/img/value/value-shape-2.jpg"
                  width={219}
                  height={730}
                  alt=""
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
