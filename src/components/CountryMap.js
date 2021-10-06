import React  from "react";
import '../styles/CountryMap.css'
import {Stage, Layer} from "react-konva";
import CountryItem from "./CountryItem";

const CountryMap = ({list}) => {
    const HORIZONTAL_CENTER = 240

    // array of coords, setup to map over rect and text objects
    const coords = [
        {
            x: HORIZONTAL_CENTER,
            y: 20,
            text: "CAN"
        },
        {
            x: HORIZONTAL_CENTER,
            y: 70,
            text: "USA"
        },
        {
            x: HORIZONTAL_CENTER,
            y: 120,
            text: "MEX"
        },
        {
            x: HORIZONTAL_CENTER,
            y: 170,
            text: "GTM"
        },
        {
            x: HORIZONTAL_CENTER+120,
            y: 140,
            text: "BLZ"
        },
        {
            x: HORIZONTAL_CENTER-60,
            y: 220,
            text: "SLV"
        },
        {
            x: HORIZONTAL_CENTER+60,
            y: 220,
            text: "HND"
        },
        {
            x: HORIZONTAL_CENTER+60,
            y: 270,
            text: "NIC"
        },
        {
            x: HORIZONTAL_CENTER+60,
            y: 320,
            text: "CRI"
        },
        {
            x: HORIZONTAL_CENTER+60,
            y: 370,
            text: "PAN"
        }
    ]
    // update list based on selected for each

    return (
        <Stage width={600} height={600} className="stage">
            <Layer>
                {coords.map((item) => {
                    // set selected prop
                    item.selected = !!list.includes(item.text);

                    return (
                        <CountryItem x={item.x} y={item.y} text={item.text} selected={item.selected} />
                    );
                })}
            </Layer>
        </Stage>
    );
}

export default CountryMap;

