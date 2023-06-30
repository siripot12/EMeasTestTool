<script lang="ts">
import { GanttBarObject } from '@infectoone/vue-ganttastic/lib_types/types';
import { defineComponent, ref } from 'vue';

const breakitems: GanttBarObject[] = [
  {
    myBeginDate: '2023-06-29 12:00',
    myEndDate: '2023-06-29 13:00',
    ganttBarConfig: {
      id: 'break-id-1',
      immobile: true,
      style: {
        background: 'yellow',
      },
    },
  },
  {
    myBeginDate: '2023-06-30 00:00',
    myEndDate: '2023-06-30 01:00',
    ganttBarConfig: {
      id: 'break-id-2',
      immobile: true,
      style: {
        background: 'yellow',
      },
    },
  },
];

export default defineComponent({
  setup() {
    const rowHeight = 100;
    const row1BarList = ref<GanttBarObject[]>([
      ...breakitems,
      {
        myBeginDate: '2023-06-29 13:00',
        myEndDate: '2023-06-29 15:00',
        ganttBarConfig: {
          // each bar must have a nested ganttBarConfig object ...
          id: 'unique-id-1', // ... and a unique "id" property
          label: 'Hello',
          immobile: false,
          dragLimitLeft: 0.1,
        },
      },
    ]);

    const row2BarList = ref<GanttBarObject[]>([
      ...breakitems,
      {
        myBeginDate: '2023-06-29 13:00',
        myEndDate: '2023-06-29 15:00',
        ganttBarConfig: {
          id: 'another-unique-id-2',
          hasHandles: true,
          label: 'Hey, look at me',
          style: {
            // arbitrary CSS styling for your bar
            background: '#e09b69',
            borderRadius: '20px',
            color: 'black',
          },
        },
      },
    ]);

    return {
      row1BarList,
      row2BarList,
      rowHeight,
    };
  },
});
</script>

<template>
  <div style="display: flex">
    <div></div>
    <div></div>
  </div>
  <g-gantt-chart
    grid
    row-height="100"
    chart-start="2023-06-29 08:00"
    chart-end="2023-06-30 08:00"
    precision="hour"
    bar-start="myBeginDate"
    bar-end="myEndDate"
    color-scheme="material-blue"
  >
    <g-gantt-row label="My row 1" :bars="row1BarList" />
    <g-gantt-row label="My row 2" :bars="row2BarList" />
  </g-gantt-chart>
</template>

<style scoped>
::v-deep .g-gantt-row-label {
  height: 40%;
  font-size: 1.3em;
  opacity: 0.85;
}

::v-deep #break-id-1,
::v-deep #break-id-2 {
  top: 0px !important;
  height: v-bind(rowHeight + 'px') !important;
}
</style>
