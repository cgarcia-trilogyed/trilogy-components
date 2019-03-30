import * as React from 'react';
import styled from '../../utils/styled-components';

export interface FaqProps {
  content?: { id: string; question: string; answer: string }[];
}

const P = styled.p`
  display: inline-block;
`;

export const Faq = (props: FaqProps) => (
  <>
    {props.content && props.content.length > 0
      ? props.content.map(n => (
          <details key={n.id}>
            <summary>
              <P>{n.question}</P>
            </summary>
            <div dangerouslySetInnerHTML={{ __html: n.answer }} />
          </details>
        ))
      : null}
  </>
);
