import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const SankyChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('sanky');
    console.log(chartDom);

    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = {
        series: {
          type: 'sankey',
          layout: 'none',
          data: [
            { name: 'a' },
            { name: 'b' },
            { name: 'a1' },
            { name: 'a2' },
            { name: 'b1' },
            { name: 'c' },
          ],
          links: [
            { source: 'a', target: 'a1', value: 5 },
            { source: 'a', target: 'a2', value: 3 },
            { source: 'b', target: 'b1', value: 8 },
            { source: 'a', target: 'b1', value: 3 },
            { source: 'b1', target: 'a1', value: 1 },
            { source: 'b1', target: 'c', value: 2 },
          ],
        },
      };

      myChart.setOption(option);
      const handleContextMenu = (event:any) => {
        event.preventDefault();
        alert('Right-clicked on the chart!');
      };

      chartDom.addEventListener('contextmenu', handleContextMenu);
      return () => {
        chartDom.removeEventListener('contextmenu', handleContextMenu);
        myChart.dispose();
      };
    }
  }, []); 

  return <div id="sanky" className='flex mx-auto w-[20vh] h-[20vh] lg:w-[60vh] lg:h-[60vh]'></div>;
};

export default SankyChart;
