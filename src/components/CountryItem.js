import {Rect, Text} from "react-konva";
import {getCountries} from "../utils";


const CountryItem = ({x, y, text, selected}) => {
    const fillColor = selected ? "#0078ae" : "white";

    const handleClick = (text) => {
        // get the stuff, then modify selected and re-render?
        // can we modify the other ones from here? push state up
        // alert('click on '+text);
        const list = getCountries(text);
        alert(list);
    }

    // set style (fill) to be state/prop var

    return (
        <>
            <Rect
                x={x}
                y={y}
                draggable
                width={120}
                height={50}
                fill={fillColor}
                shadowBlur={5}
                onClick={() => handleClick(text)}
                onMouseEnter={() => null}
            />
            <Text
                text={text}
                x={x+45}
                y={y+18}
                fontSize={18}
                fontStyle="bold"
                onClick={() => handleClick(text)}
            />
        </>
    );
}

export default CountryItem;