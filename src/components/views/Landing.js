import React, {Component} from 'react';

import Section from '../layout/Section';
import Container from '../layout/Container';

export default class Landing extends Component {
  render() {
    return (
      <main>
        <Section>
          <Container>
            <h1>Colt Premium Series</h1>
          </Container>
        </Section>

        <Section addClass="inverted">
          <Container>
            <h1>Colt Series</h1>
          </Container>
        </Section>

        <Section>
          <Container>
            <h1>Soviet Series</h1>
          </Container>
        </Section>

        <Section>
          <Container>
            <h1>Telli</h1>
          </Container>
        </Section>
      </main>
    );
  }
}
