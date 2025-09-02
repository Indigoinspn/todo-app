import { Counter, CountersContainer } from './styles';

import { useUnit } from 'effector-react';
import { $activeCount, $completedCount, $filter, $totalCount } from '../../store';

const Footer = () => {
  const totalCount = useUnit($totalCount);
  const activeCount = useUnit($activeCount);
  const completedCount = useUnit($completedCount);
  const filter = useUnit($filter);

  return (
    <CountersContainer>
      <Counter $active={filter === 'all'} filter={'all'}>
        {totalCount} Total
      </Counter>
      <Counter $active={filter === 'active'} filter={'active'}>
        {activeCount} Active
      </Counter>
      <Counter $active={filter === 'completed'} filter={'completed'}>
        {completedCount} Completed
      </Counter>
    </CountersContainer>
  );
};

export default Footer;
