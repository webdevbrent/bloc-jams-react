import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-materialize';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <div className="container">
      <section className='library'>
      <Row>
        {
          this.state.albums.map( (album, index ) =>
          <Link to={`/album/${album.slug}`} key={index}>
            <Col m={6} s={12}>
            <img className="responsive-img" src={album.albumCover} alt={album.title} />
                  <h4 className="center-align">{album.title}</h4>
                  <p className="center-align">{album.artist}</p>
                  <p className="center-align">{album.songs.length}</p>
            </Col>
          </Link>
          )
        }      
        </Row>
      </section>
    </div>
    );
  }
}


export default Library;
