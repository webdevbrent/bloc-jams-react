import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

      const album = albumData.find( (album) => {
      return album.slug === this.props.match.params.slug
    });

      this.state = {
        album: album
      };

  }

  render() {
    return (
      <section className="album">
        {this.props.match.params.slug} Album
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-colum" />
            <col id="song-title-colum" />
            <col id="song-duration-colum" />
          </colgroup>
          <tbody>
            {this.state.album.songs.map( (song, index) =>
              <tr className={song} key={index} >
                <td className="song-actions">
                    <button>
                      <span className="ion-play"></span>
                    </button>
                    <button>
                      <span className="ion-pause"></span>
                    </button>
                </td>
                <td className="song-index"><span className="song-number">{index+1}</span></td>
                <td className="song-title">{song.title}</td>
                <td className="song-duration">{song.duration}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
