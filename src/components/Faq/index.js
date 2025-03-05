import Image from 'next/image';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const items = [
  {
    header: 'Why do students prefer online learning?',
    content: (
      <>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </p>
        <Image
          className="d-none d-xl-block"
          src="/img/faq/thumb-2.jpg"
          width={206}
          height={108}
          alt=""
        />
      </>
    ),
  },
  {
    header: 'Where should I study abroad?',
    content: (
      <>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </p>
        <Image
          className="d-none d-xl-block"
          src="/img/faq/thumb-2.jpg"
          width={206}
          height={108}
          alt=""
        />
      </>
    ),
  },
  {
    header: 'How can I contact a school directly?',
    content: (
      <>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </p>
        <Image
          className="d-none d-xl-block"
          src="/img/faq/thumb-2.jpg"
          width={206}
          height={108}
          alt=""
        />
      </>
    ),
  },
  {
    header: 'How do I find a school where I want to study?',
    content: (
      <>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation.
        </p>
        <Image
          className="d-none d-xl-block"
          src="/img/faq/thumb-2.jpg"
          width={206}
          height={108}
          alt=""
        />
      </>
    ),
  },
];

export default function Faq() {
  return (
    <Accordion className="accordion">
      {items
        .map(({ header, content }, i) => (
          <AccordionItem
            header={header}
            key={i}
            initialEntered
            className="accordion-items"
          >
            {content}
          </AccordionItem>
        ))
        .slice(0, 1)}
      {items
        .map(({ header, content }, i) => (
          <AccordionItem header={header} key={i} className="accordion-items">
            {content}
          </AccordionItem>
        ))
        .slice(1, 4)}
    </Accordion>
  );
}
