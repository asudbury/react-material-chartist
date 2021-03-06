import Chartist from 'chartist';

const BarChartPeakCircles = {
  title: 'Bar Chart - Peak Circles',
  type: 'Bar',
  data: {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
  },
  options: {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  },
  listener: {
    draw(data) {
      if (data.type === 'bar') {
        data.group.append(
          new Chartist.Svg(
            'circle',
            {
              cx: data.x2,
              cy: data.y2,
              r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
            },
            'ct-slice-pie'
          )
        );
      }
    }
  }
};

export default BarChartPeakCircles;
