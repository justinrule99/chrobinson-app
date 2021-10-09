import {Stage, Layer} from "react-konva";
import CountryItem from "./CountryItem";

const CountryMap = ({list}) => {
    const HORIZONTAL_CENTER = 240

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

    return (
        <Stage width={600} height={600} className="stage">
            <Layer>
                {coords.map((item) =>
                    <CountryItem x={item.x} y={item.y} text={item.text} selected={list.includes(item.text)} />
                )}
            </Layer>
        </Stage>
    );
}

export default CountryMap;

