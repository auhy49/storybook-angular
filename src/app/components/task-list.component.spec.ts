import { render } from '@testing-library/angular';
import { TaskListComponent } from './task-list.component';
import { WithPinnedTasks } from './task-list.stories';
import { TaskComponent } from './task.component';


describe('TaskList component', () => {
  it('renders pinned tasks at the start of the list ', async () => {
    const mockedActions = jest.fn();
    const tree = await render(TaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        ...WithPinnedTasks.args,
        onPinTasks: {
          emit: mockedActions
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any
      }
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});

