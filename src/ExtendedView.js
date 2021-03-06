import React, { Component } from 'react';
import './styles/main.scss';

export default class ExtendedView extends Component {

  convertTime = (ms) => {
    var milliseconds = parseInt(ms);
    var hours = Math.floor(milliseconds / 3600000);
    var minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
    var seconds = parseInt((milliseconds - (hours * 3600000) - 
      (minutes * 60000)) / 1000);

    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <section className='song-table-container'>
        <section className='venue-info-container'>
          <i className="fas fa-chevron-left" 
            onClick={this.props.returnFromExtendedView}></i>
          <section className='venue-info'>
            <h3 className='venue-date'>{this.props.currentShow.date}</h3>
            <h2 className='venue-name'>{this.props.currentShow.venue.name}</h2>
            <h3 className='venue-location'>
              {this.props.currentShow.venue.location}</h3>
          </section>
        </section>
        <table className='song-table'>
          <tbody>
            {
              this.props.setlist.map((song, index) => {
                return <tr className='song-table-row' key={index}>
                  <td className='song-table-position'>{song.position}</td>
                  <td className='song-table-title' 
                    onClick={() => 
                      this.props.updateCurrentSongIndex(index)}>
                    <i className='far fa-play-circle'></i>{song.title}</td>
                  <td className='song-table-duration' >
                    {this.convertTime(song.duration)}</td>
                </tr>; 
              })                         
            }
          </tbody>
        </table>
      </section>
    );
  }
}