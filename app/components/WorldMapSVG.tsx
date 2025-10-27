import { Worldmap } from "@/public/Assets/icons";

export default function WorldMapSVG() {
  // Modify the SVG to add proper styling classes
  const modifiedSvg = Worldmap.replace(
    '<svg',
    '<svg class="w-full h-full object-contain"'
  );

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: modifiedSvg }}
    />
  );
}
