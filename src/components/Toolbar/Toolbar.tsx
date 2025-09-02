import { ButtonsContainer, FilterButtonsContainer } from './styles';
import Button from '../Button';
import { useUnit } from 'effector-react';
import { $filter, $completedCount, clearCompleted, setFilter } from '../../store';

const Toolbar = () => {
  const completedCount = useUnit($completedCount);
  const filter = useUnit($filter);
  const setFilterHandler = useUnit(setFilter);
  const clearCompletedHandler = useUnit(clearCompleted);
  const IsClearButtonDisabled = completedCount === 0;

  return (
    <ButtonsContainer>
      <FilterButtonsContainer>
        <Button $active={filter === 'all'} onClick={() => setFilterHandler('all')} variant={'secondary'} filter={'all'}>
          All
        </Button>
        <Button $active={filter === 'active'} onClick={() => setFilterHandler('active')} variant={'secondary'} filter={'active'}>
          Active
        </Button>
        <Button $active={filter === 'completed'} onClick={() => setFilterHandler('completed')} variant={'secondary'} filter={'completed'}>
          Completed
        </Button>
      </FilterButtonsContainer>

      <Button $active onClick={clearCompletedHandler} disabled={IsClearButtonDisabled} variant={'primary'}>
        Clear completed
      </Button>
    </ButtonsContainer>
  );
};

export default Toolbar;
