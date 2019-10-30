import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slide from "./Slide";
import LeftButton from "./leftButton";
import RightButton from "./rightButton";
import classes from "./carousel.css";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.imageRef = [];
  }
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
  ceil = () => {
    return Math.ceil(this.state.images.length / 2);
  };
  componentDidMount() {
    console.log(this.imageRef[this.state.currentIndex]);

    const transVal = this.ceil();
    this.setState({
      transalateXinitVal:
        -transVal * (this.sliderWidth() - 0.25 * this.sliderWidth()),
      currentIndex: transVal
    });
    console.log(ReactDOM.findDOMNode(this.imageRef[transVal]));
    this.findnode(transVal);
  }
  findnode(val) {
    ReactDOM.findDOMNode(this.imageRef[val]).className = `${classes.slide} ${
      classes.visible
    }`;
  }
  classAddSub = index => {
    let elements = document.querySelectorAll(`.${classes.slide}`);
    elements.forEach(el => {
      el.classList.remove(`${classes.visible}`);
    });
    this.findnode(index);
  };
  leftButtonClickHandler = () => {
    if (this.state.currentIndex === 0) {
      this.classAddSub(this.ceil());
      return this.setState({
        transalateXinitVal:
          -this.ceil() * (this.sliderWidth() - 0.25 * this.sliderWidth()),
        currentIndex: this.ceil()
      });
    }
    this.classAddSub(this.state.currentIndex - 1);
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      transalateXinitVal: prevState.transalateXinitVal + this.sliderWidth()
    }));
  };

  rightButtonClickHandler = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.classAddSub(this.ceil());
      return this.setState({
        transalateXinitVal:
          -this.ceil() * (this.sliderWidth() - 0.25 * this.sliderWidth()),
        currentIndex: this.ceil()
      });
    }
    this.classAddSub(this.state.currentIndex + 1);
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      transalateXinitVal: prevState.transalateXinitVal - this.sliderWidth()
    }));
  };
  sliderWidth = () => {
    let containerWidth = document.querySelector(`.${classes.slide}`)
      .clientWidth;
    return containerWidth;
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
                ref={ref => (this.imageRef[i] = ref)}
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
