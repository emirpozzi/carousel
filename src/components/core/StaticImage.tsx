import React from "react";

type Props = {
  url: string;
  alt: string;
  width?: string;
};

/** Url should be prefixed by a slash
 * @example /image.png
 */
const StaticImage = ({ url, alt, width = "300px" }: Props) => {
  return <img src={require(`src/assets${url}`)} alt={alt} width={width} />;
};

export default StaticImage;
