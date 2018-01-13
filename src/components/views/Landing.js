import React, {Component} from 'react';

import Section from '../layout/Section';
import Container from '../layout/Container';
import SocialLinks from '../layout/SocialLinks';

export default class Landing extends Component {
  render() {
    return (
      <main>
        <Section>
          <Container>
            <h1>Colt Premium Series</h1>

            <p>Sügavam bass, puhtam heli.</p>
          </Container>

          <SocialLinks />
        </Section>

        <Section addClass="inverted">
          <Container>
            <h1>Colt Series</h1>

            <p>Vabaajakuulajale.</p>
          </Container>
        </Section>

        <Section>
          <Container>
            <h1>Soviet Series</h1>

            <p>Stuudio helikvaliteet.</p>
          </Container>
        </Section>

        <Section>
          <Container>
            <h1>Telli</h1>
          </Container>

          <SocialLinks />
        </Section>
      </main>
    );
  }
}
