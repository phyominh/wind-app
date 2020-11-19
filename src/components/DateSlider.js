// Reference -> https://codesandbox.io/s/embla-carousel-ios-picker-default-react-fotej?file=/src/js/EmblaWheel.js

import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useEmblaCarousel } from "embla-carousel/react";

import {
  WHEEL_ITEM_RADIUS,
  getContainerCss,
  getSlidesCss,
} from "../utils/sliderUtils.js";

const DateSlider = ({ id, items, loop, perspective, selectedItem }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop,
    axis: "y",
    dragFree: true,
    draggableClass: "",
    draggingClass: "",
    selectedClass: "",
  });
  const [wheelReady, setWheelReady] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const totalRadius = items.length * WHEEL_ITEM_RADIUS;
  const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS;
  const containerStyles = getContainerCss(wheelRotation);
  const slideStyles = getSlidesCss(embla, loop, items.length, totalRadius);

  const rotateWheel = useCallback(() => {
    if (!embla) return;
    const rotation = items.length * WHEEL_ITEM_RADIUS - rotationOffset;
    const progress = isNaN(embla.scrollProgress()) ? 0 : embla.scrollProgress();
    setWheelRotation(rotation * progress);
  }, [setWheelRotation, items.length, rotationOffset, embla]);

  useEffect(() => {
    if (!embla) return;

    embla.dangerouslyGetEngine().translate.toggleActive(false);
    setWheelReady(true);
    embla.on("pointerUp", () => {
      const { scrollTo, target, location } = embla.dangerouslyGetEngine();
      scrollTo.distance((target.get() - location.get()) * 0.1, true);
    });

    embla.on("scroll", rotateWheel);
    rotateWheel();

    embla.on("select", () => {
      const snap = embla.selectedScrollSnap();
      selectedItem(items[snap]);
    });
  }, [embla, rotateWheel, selectedItem]);

  useEffect(() => {
    if (!embla) return;

    embla.scrollTo(0);
  }, [id]);

  return (
    <div className="embla__wheel">
      <div className="embla__wheel__scene">
        <div
          className={`embla__wheel__viewport embla__wheel__viewport--perspective-${perspective}`}
          ref={viewportRef}
        >
          <div
            className="embla__wheel__container"
            style={wheelReady ? containerStyles : { transform: "none" }}
          >
            {slideStyles.map((slideStyle, index) => {
              let styling = slideStyle;
              if (slideStyles.length == 1) styling.opacity = 1;
              return (
                <div
                  key={`${id}-${items[index]}`}
                  className="embla__wheel__slide"
                  style={wheelReady ? styling : { transform: "none" }}
                >
                  {items[index]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

DateSlider.defaultProps = {
  loop: false,
};

DateSlider.propTypes = {
  id: PropTypes.string,
  items: PropTypes.array,
  loop: PropTypes.bool,
  perspective: PropTypes.string,
  selectedItem: PropTypes.func,
};

export default DateSlider;
