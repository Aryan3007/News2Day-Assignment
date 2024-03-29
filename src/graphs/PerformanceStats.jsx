import { useRef, useEffect, useMemo } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PerformanceStats = () => {
  const chartRef = useRef(null);

  const topViews = useMemo(
    () => ({
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "Top Viewd News",
      },
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { x: 10, y: 71 },
            { x: 20, y: 55 },
            { x: 30, y: 50 },
            { x: 40, y: 65 },
            { x: 50, y: 71 },
            { x: 60, y: 68 },
            { x: 70, y: 38 },
            { x: 80, y: 92, indexLabel: "Highest" },
            { x: 90, y: 54 },
            { x: 100, y: 60 },
            { x: 110, y: 21 },
            { x: 120, y: 49 },
            { x: 130, y: 36 },
          ],
        },
      ],
    }),
    []
  );
  const topLiked = useMemo(
    () => ({
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "Top Liked News",
      },
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { x: 10, y: 33 },
            { x: 20, y: 55 },
            { x: 30, y: 89 },
            { x: 40, y: 99 },
            { x: 50, y: 71 },
            { x: 60, y: 68 },
            { x: 70, y: 38 },
            { x: 80, y: 22 },
            { x: 90, y: 54 },
            { x: 100, y: 23 },
            { x: 110, y: 21 },
            { x: 120, y: 23 },
            { x: 130, y: 36 },
          ],
        },
      ],
    }),
    []
  );

  useEffect(() => {
    if (chartRef.current && CanvasJSChart) {
      chartRef.current.render(topViews);
    }
  }, [chartRef, topViews]);

  return (
    <div className="pr-4 flex flex-col gap-6">
      <CanvasJSChart options={topViews} ref={chartRef} />
      <CanvasJSChart options={topLiked} ref={chartRef} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default PerformanceStats;
