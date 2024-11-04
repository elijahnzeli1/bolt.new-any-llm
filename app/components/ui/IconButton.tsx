import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from '~/utils/classNames';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  title?: string;
}

export const IconButton: FC<IconButtonProps> = ({ 
  children, 
  className, 
  icon,
  title,
  ...props 
}) => {
  return (
    <button
      type="button"
      title={title}
      className={classNames(
        'flex items-center rounded p-1.5 text-bolt-elements-textTertiary enabled:hover:bg-bolt-elements-item-backgroundHover enabled:hover:text-bolt-elements-textPrimary disabled:opacity-50',
        className
      )}
      {...props}
    >
      {icon && <div className={icon} />}
      {children}
    </button>
  );
};
