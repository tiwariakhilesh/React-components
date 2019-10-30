import React, { Component } from "react";
import Slide from "./Slide";
import LeftButton from "./leftButton";
import RightButton from "./rightButton";
import classes from "./carousel.css";
class Carousel extends Component {
  state = {
    images: [
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ],
    transalateXinitVal: 0,
    currentIndex: 0
  };
  componentDidMount() {
    const transVal = Math.ceil(this.state.images.length / 2);
    this.setState({
      transalateXinitVal: -transVal * this.sliderWidth(),
      currentIndex: transVal
    });
  }
  leftButtonClickHandler = () => {
    console.log(this.state.currentIndex);
    if (this.state.currentIndex === 0) {
      return this.setState({
        transalateXinitVal:
          -Math.ceil(this.state.images.length / 2) * this.sliderWidth(),
        currentIndex: Math.ceil(this.state.images.length / 2)
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      transalateXinitVal: prevState.transalateXinitVal + this.sliderWidth()
    }));
  };

  rightButtonClickHandler = () => {
    console.log(this.state.currentIndex);
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        transalateXinitVal:
          -Math.ceil(this.state.images.length / 2) * this.sliderWidth(),
        currentIndex: Math.ceil(this.state.images.length / 2)
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      transalateXinitVal: prevState.transalateXinitVal - this.sliderWidth()
    }));
  };
  sliderWidth = () => {
    return document.querySelector(".carousel__slide__hMqYA").clientWidth;
  };
  render() {
    return (
      <div className={classes.Slider}>
        <div
          className={classes.slideWrapper}
          style={{
            transform: `translateX(${this.state.transalateXinitVal}px)`,
            transition: `transform 0.5s ease-in-out`
          }}
        >
          {this.state.images.map((img, i) => {
            return (
              <Slide
                key={i}
                image={img}
                id={i}
                current={this.state.currentIndex}
              />
            );
          })}
        </div>
        <LeftButton click={this.leftButtonClickHandler} />
        <RightButton click={this.rightButtonClickHandler} />
      </div>
    );
  }
}
export default Carousel;
