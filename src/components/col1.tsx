import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./col1.css";

type Col1Type = {
  parisImage?: string;
  paris?: string;
  component?: string;

  /** Style props */
  detailsWidth?: Property.Width;
  componentWidth?: Property.Width;
  fromLeft?: Property.Left;
};

const Col1: FunctionComponent<Col1Type> = ({
  parisImage,
  paris,
  detailsWidth,
  component,
  componentWidth,
  fromLeft,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      width: componentWidth,
    };
  }, [componentWidth]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: fromLeft,
    };
  }, [fromLeft]);

  return (
    <button className="col-1">
      <div className="pariscard">
        <img className="parisimage-icon" alt="" src={parisImage} />
        <div className="destination-details">
          <b className="paris">{paris}</b>
          <div className="details5" style={detailsStyle}>
            <div className="div13" style={divStyle}>
              {component}
            </div>
            <div className="from" style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Col1;
