// Utilities
import clsx from 'clsx';

type BadgeProps = {
  variant: 'new' | 'ourPick' | 'almostGone';
}

const Badge = (props: BadgeProps) => {
  const { variant } = props;

  const renderStyles = (variant: string) => {
    return clsx([
      variant === 'new' && 'text-green-900 bg-teal-300',
      variant === 'ourPick' && 'text-green-900 bg-green-100',
      variant === 'almostGone' && 'text-red-700 bg-red-300',
    ]);
  };

  const renderText = (variant: string) => {
    switch (variant) {
      case 'almostGone':
        return 'Almost Gone!';
      case 'ourPick':
        return 'Our Pick';
      default:
        return variant;
    }
  };

  return (
    <div className={`w-fit px-2 text-xs text-center rounded-lg font-medium uppercase ${renderStyles(variant)}`}>
      {renderText(variant)}
    </div>
  );
};

export { Badge };
