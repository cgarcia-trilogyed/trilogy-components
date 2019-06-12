import * as React from 'react';
import Toggle from '../Toggle';

export interface FaqProps {
  content?: { id: string; question: string; answer: string }[];
}

export const Faq = (props: FaqProps) => (
  <>
    {props.content && props.content.length > 0
      ? props.content.map(n => (
          <Toggle key={n.id} title={n.question} content={n.answer} />
        ))
      : null}
  </>
);
