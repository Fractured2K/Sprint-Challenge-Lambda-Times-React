import React, { Component } from 'react';
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      images: []
    }
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    })
  }

  leftClick = () => {
    this.state.count === 0 ? this.setState({ count: this.state.images.length - 1 }) : this.setState({ count: this.state.count - 1 })
  }

  rightClick = () => {
    this.state.count === this.state.images.length - 1 ? this.setState({ count: 0 }) : this.setState({ count: this.state.count + 1 })
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.count]} style={{ display: 'block' }} alt="image" />
  }

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
