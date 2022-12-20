import { Cloudinary } from "@cloudinary/url-gen";

export default function gallery() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dt4ne9pio",
    },
  });
  cld.image();
  return <div></div>;
}
