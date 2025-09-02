import { useState } from 'react';
import { Form, Input } from './styles';
import { addTask } from '../../store';
import { useUnit } from 'effector-react';
import Button from '../Button';

const TaskInput: React.FC = () => {
  const [text, setText] = useState('');
  const addTaskHandler = useUnit(addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTaskHandler(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='New task' autoFocus maxLength={130} />
      <Button variant={'primary'} type='submit' disabled={text === ''} $active>
        Add
      </Button>
    </Form>
  );
};

export default TaskInput;
