import React from 'react';
import {Row, Col, Card} from 'react-materialize';

const Landing = () => (
  <div className="container">
  <section className="landing">
  <h1 className="center-align">Turn The Music Up!</h1>
  <img className="responsive-img" src="https://pixabay.com/get/e830b70f20f2083ed1534705fb0938c9bd22ffd41cb019499df6c07ea7/rock-1560869_1920.jpg" alt="" />
    <Row>
      <Col m={4} s={12}>
        <Card className='red darken-4 center-align' textClassName='white-text' title='Choose your music'>
        <p className="center-align">The world is full of music; why should you have to listen to music that someone else chose?</p>
		    </Card>
      </Col>
      <Col m={4} s={12}>
        <Card className='yellow darken-4 center-align' textClassName='white-text' title='Unlimited, streaming, ad-free'>
        <p className="center-align">No arbitrary limits. No distractions.</p>
		    </Card>
      </Col>
      <Col m={4} s={12}>
        <Card className='blue darken-4 center-align' textClassName='white-text' title='Mobile enabled'>
        <p className="center-align">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
		    </Card>
      </Col>
    </Row>
  </section>
  </div>
);

export default Landing;
