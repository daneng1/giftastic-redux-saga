import React, { useState } from "react";


export default function Gif({ gif }) {
  const [viewModal, setViewModal] = useState(false);
  const height = +gif.images.original.height;
  const width = +gif.images.original.width;

  return (
    <div style={{ width: 300, height: 300}}>
      {viewModal && (
        <div>
          <p>{gif.title}</p>
        </div>
      )}
      <a target="_blank" href={gif.url}>
        <image
          onMouseEnter={() => setViewModal(true)}
          onMouseLeave={() => setViewModal(false)}
          orientation={width >= height ? "horizontal" : "vertical"}
          src={gif.images.original.url}
          alt={gif.title}
        />
      </a>
    </div>
  );
}
