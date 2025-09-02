import TaskItem from '../TaskItem';
import { List, EmptyMessage, ListContainer } from './styles';
import { useUnit } from 'effector-react';
import { $filteredTasks } from '../../store';

const TaskList = () => {
  const tasks = useUnit($filteredTasks);

  if (!tasks || tasks.length === 0) {
    return <EmptyMessage>List is empty</EmptyMessage>;
  }

  return (
    <ListContainer>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </ListContainer>
  );
};

export default TaskList;
