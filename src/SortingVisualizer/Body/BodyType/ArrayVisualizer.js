import React from 'react'

function ArrayVisualizer({arr, size, speed}) {
    return (
        <div className="container red blue">
            {arr.map((item, index) => {
                return (
                    <div
                        id={`id${index + 1}`}
                        className="bar"
                        style={{
                            width: 500 / size + "px",
                            height: item.value * 4,
                            transform: `translate(${(600 / size + 5) * index
                                }px, ${0}px)`,
                            transition: `transform ${speed / 1500}s ease`,
                        }}
                    >
                        <span
                            style={{ fontSize: `min(${300 / size}px, 2rem)` }}
                            className="barcount"
                        >
                            {item.value}
                        </span>
                    </div>
                );
            })}
        </div>
    )
}

export default ArrayVisualizer
