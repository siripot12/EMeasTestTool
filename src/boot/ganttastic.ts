import { boot } from 'quasar/wrappers';
import ganttastic from '@infectoone/vue-ganttastic';

export default boot(({ app }) => {
  app.use(ganttastic);
});
