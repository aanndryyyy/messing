import React, {Component} from 'react';

import Section from '../layout/Section';
import Container from '../layout/Container';
import SocialLinks from '../layout/SocialLinks';

import ProductBuilder from '../blocks/ProductBuilder';

export default class Landing extends Component {
  render() {
    return (
      <main>
        <Section>
          <Container>
            <h1>Colt Premium Series</h1>

            <p>Deeper bass, crystal clear sound.</p>
          </Container>

          <SocialLinks />
        </Section>

        <Section addClass="inverted">
          <Container>
            <h1>Soviet Series</h1>

            <p>Studio sound quality.</p>
          </Container>
        </Section>

        <Section>
          <Container>
            <h1>Colt Series</h1>

            <p>Designed for the casual listener.</p>
          </Container>
        </Section>

        <Section>
          <Container>
            <h1>Build your own</h1>

            <ProductBuilder />
          </Container>

          <SocialLinks />
        </Section>
      </main>
    );
  }
}
