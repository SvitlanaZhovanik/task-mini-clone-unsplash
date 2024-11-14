import * as Switch from '@radix-ui/react-switch';
import styles from './toggleButton.module.css';
import data from '@/data/common.json';

interface ToggleButtonProps {
  onToggleChange: () => void;
}

export const ToggleButton = ({ onToggleChange }: ToggleButtonProps) => {
  return (
    <form>
      <div className={styles.toggleContainer}>
        <label className={styles.label} htmlFor="toggle">
          {data.toggleButtonName}
        </label>
        <Switch.Root
          className={styles.root}
          id="toggle"
          onCheckedChange={() => onToggleChange()}
        >
          <Switch.Thumb className={styles.thumb} />
        </Switch.Root>
      </div>
    </form>
  );
};
