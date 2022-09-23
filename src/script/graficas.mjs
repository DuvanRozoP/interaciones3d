import { ejeX,ejeY } from "./animation.mjs";

export const grafica = (amplitud, w, fase, time) => {
  return new Promise((resolve, reject) => {
    const graf = document.getElementById("#graphicOscilation");
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / 142;
    const previousY = (ctx) =>
      ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart
            .getDatasetMeta(ctx.datasetIndex)
            .data[ctx.index - 1].getProps(["y"], true).y;

    // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
    var pruebas = new Chart(graf, {
      type: "line",
      data: {
        datasets: [
          {
            //EJE Y
            data: ejeY(amplitud, w, fase, time),
          },
        ],
        // EJE X
        labels: ejeX(amplitud, w, fase, time),
      },
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        animations: {
          x: {
            type: "number",
            easing: "easeInCubic",
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
              if (ctx.type !== "data" || ctx.xStarted) {
                return 0;
              }
              ctx.xStarted = true;
              return ctx.index * delayBetweenPoints;
            },
          },
          y: {
            type: "number",
            easing: "easeInCubic",
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
              if (ctx.type !== "data" || ctx.yStarted) {
                return 0;
              }
              ctx.yStarted = true;
              return ctx.index * delayBetweenPoints;
            },
          },
        },
      },
    });
  });
};
