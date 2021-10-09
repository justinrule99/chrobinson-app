import {Rect, Text} from "react-konva";

const CountryItem = ({x, y, text, selected}) => {
    const fillColor = selected ? "#0078ae" : "white";

    return (
        <>
            <Rect
                x={x}
                y={y}
                width={120}
                height={50}
                fill={fillColor}
                shadowBlur={5}
            />
            <Text
                text={text}
                x={x+45}
                y={y+18}
                fontSize={18}
                fontStyle="bold"
            />
        </>
    );
}

export default CountryItem;