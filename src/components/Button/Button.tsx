import { BaseButton, ButtonVariant } from './styles';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  $active: boolean;
  type?: 'button' | 'submit';
  variant: ButtonVariant;
  filter?: 'all' | 'active' | 'completed';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, $active, type = 'button', variant = 'primary', filter }) => {
  return (
    <BaseButton type={type} onClick={onClick} disabled={disabled} variant={variant} $active={$active} filter={filter}>
      {children}
    </BaseButton>
  );
};

export default Button;
