import React, { Component } from 'react';
import {Icon, Table} from 'react-materialize';

class PlayerBar extends Component {
  render() {
    return(

      <Table centered>
      <tbody>
        <tr>
          <td>
          <button className="btn waves-effect waves-light" id="previous" onClick={this.props.handlePrevClick}>
            <Icon small >skip_previous</Icon>
          </button>
          </td>
          <td>
          <button className="btn waves-effect waves-light" id="play-pause" onClick={this.props.handleSongClick}>
          <Icon small className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></Icon>
          </button>
          </td>
          <td>
          <button className="btn waves-effect waves-light" id="next" onClick={this.props.handleNextClick}>
            <Icon small>skip_next</Icon>
          </button>
          </td>
          <td>{this.props.formatTime(this.props.currentTime)}</td>
          <td>
          <input 
            type="range" 
            className="seek-bar" 
            value={(this.props.currentTime / this.props.duration) || 0} 
            max="1" 
            min="0" 
            step="0.01" 
            onChange={this.props.handleTimeChange}
          />
          {this.props.formatTime(this.props.duration)}
          </td>
          <td>
          <input type="range" 
                 className="seek-bar" 
                 value={this.props.volume} 
                 max="1" 
                 min="0" 
                 step="0.01" 
                 onChange={this.props.handleVolumeChange}    
          />
          <Icon tiny>volume_up</Icon>
          </td>
        </tr>
        </tbody>
      </Table>
    );
  }
}

export default PlayerBar;