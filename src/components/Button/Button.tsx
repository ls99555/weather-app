import styles from './Button.module.scss';
import { useTheme } from '../../contexts/ThemeContext';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'toggle';
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  disabled = false,
  className = ''
}: ButtonProps) {
  const { theme } = useTheme();

  if (variant === 'toggle') {
    const buttonProps = {
      type,
      onClick,
      disabled,
      className: `${styles.button} ${styles.toggleSwitch} ${theme === 'dark' ? styles.active : ''} ${className}`.trim(),
      'aria-label': theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode',
      'role': 'switch' as const,
      'aria-checked': theme === 'dark' ? 'true' as const : 'false' as const
    };
    
    return (
      <button {...buttonProps}>
        <span className={styles.toggleIcon} aria-hidden="true">
          {theme === 'light' ? '☀️' : '🌙'}
        </span>
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
