import { Popover } from './popover';

const popovers = new Map();
const buttons = document.querySelectorAll('.popover-trigger');

document.addEventListener('click', onClick);

function onClick(event) {
  const targetEvent = event.target.closest('.popover-trigger');
  if (!targetEvent) return;

  buttons.forEach((el) => {
    const isPopver = el.querySelector('.popover');
    if (el === targetEvent) return;
    if (isPopver) {
      isPopver.remove();
      return;
    }
  });

  const target = event.target.closest('.popover-trigger');
  if (!target) return;

  if (!popovers.has(target)) {
    popovers.set(target, new Popover(target));
  }

  const popover = popovers.get(target);
  popover.toggle(event);
}
