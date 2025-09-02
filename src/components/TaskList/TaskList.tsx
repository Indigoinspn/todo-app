import TaskItem from '../TaskItem';
import { List, EmptyMessage, ListContainer } from './styles';
import { useUnit } from 'effector-react';
import { $filteredTasks } from '../../store';

const TaskList = () => {
  const tasks = useUnit($filteredTasks);
  const listIsEmpty = !tasks || tasks.length === 0;

  return (
    <ListContainer>
      <List alignCenter={listIsEmpty}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        {listIsEmpty && <EmptyMessage>List is empty</EmptyMessage>}
      </List>
    </ListContainer>
  );
};

export default TaskList;
