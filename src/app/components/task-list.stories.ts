import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import {actionsData, Default as TaskDefault} from './task.stories';

export default {
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule]
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`)
  ],
  title: 'TaskList'
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask
  }
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {...TaskDefault.args.task, id: '1', title: 'Task 1'},
    {...TaskDefault.args.task, id: '2', title: 'Task 2'},
    {...TaskDefault.args.task, id: '3', title: 'Task 3'},
    {...TaskDefault.args.task, id: '4', title: 'Task 4'},
    {...TaskDefault.args.task, id: '5', title: 'Task 5'},
    {...TaskDefault.args.task, id: '6', title: 'Task 6'},
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false
};
