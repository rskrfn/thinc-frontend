import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./News.module.css";
import Loading from "../../../loading/Loading";

function News(props) {
  const { newsData } = props;
  return (
    <>
      {newsData ? (
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          emulateTouch={true}
        >
          {newsData?.slice(0, 15).map((item, index) => {
            return (
              <section key={index}>
                <div
                  className={classes.overlay}
                  onClick={() => {
                    window.open(item.url);
                  }}
                />
                <div className={classes.newscontent}>
                  <img
                    className={classes.newsimage}
                    src={item.urlToImage}
                    alt=""
                  />
                  <p className={classes.newstitle}>{item.title}</p>
                </div>
              </section>
            );
          })}
        </Carousel>
      ) : (
        <div className={classes.newsloadingcontainer}>
          <Loading text="News Loading..." />
        </div>
      )}
    </>
  );
}

export default News;
