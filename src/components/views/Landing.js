import React, {Component} from 'react';

import Section from '../layout/Section';

export default class Landing extends Component {
	render() {
		return (
      <main>
        <Section>
          <h1>Colt Premium Series</h1>
        </Section>

        <Section>
          <h1>Colt Series</h1>
        </Section>

        <Section>
          <h1>Soviet Series</h1>
        </Section>
      </main>
		);
	}
}
